const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

 const complaintsRouter = require('./routes/complaints');
 const employeesRouter = require('./routes/employees');

 app.use('/excersies', complaintsRouter);
 app.use('/users', employeesRouter);

app.use(express.static(path.join(__dirname, "Frontend/build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("Frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/Frontend/build/index.html"));
  });
}



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});