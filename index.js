const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middeleware
app.use(cors());
//allows us to have access to request.body
app.use(express.json());

//ROUTES//

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log("server has started on port 5000");
});