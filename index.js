require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});

require('dotenv').config();
const express = require("express");
const cors = require('cors');
const helmet = require("helmet");
import passport from "passport"

//Database connection
import ConnectDB from './database/connection'

// //google authentication configuration
// import googleAuthConfig from './config/google.config'
// import privateRouteConfig from "./config/route.config";

// //passport config
// googleAuthConfig(passport);
// privateRouteConfig(passport);

const bms = express();
bms.use(cors());
bms.use(express.json());
bms.use(helmet());
// bms.use(passport.initialize());

//API
import Movies from "./API/movies"

bms.use("/movies", Movies);

// // http://localhost:5000/
// bms.get("/", (req, res) => {
//     return res.json({"WELCOME": `to my Backend Software for the BookMyShow`});
// });

bms.listen(5001, () => {
    ConnectDB()
      .then(() => {
        console.log("Server is running !!!");
      })
      .catch((error) => {
        console.log("Server is running, but database connection failed...");
        console.log(error);
      });
  });









// app.listen(5000, () => {
//     console.log("MY EXPRESS APP IS RUNNING.....")
// });