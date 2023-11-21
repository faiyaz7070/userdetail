const express = require('express');

const userrouter= require('./routes/user.routes');
const connection=require("./config/db")
require("dotenv").config()

const app = express();
const port =process.env.PORT||3000;

app.use(express.json());
app.use(userrouter);

app.listen(port, async() => {
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log(error);
        
    }
  console.log(`Server is running on port ${port}`);
});
