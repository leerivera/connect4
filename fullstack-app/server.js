const express = require('express')
const app = express()
const connectDB = require("./config/database");


//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
// require("./config/passport")(passport);

//Connect To Database
connectDB();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  });