const express = require("express");
const connectDB = require("./config/db");
const cors =require("cors")
const app = express();
const path =require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const bodyParser = require('body-parser')





// connect mongodb
connectDB();

//init middleware
app.use(cors())
app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// init gfs



    // create storage engine

    



//app.get("/", (req, res) => res.send("API Running"));
app.post("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
//app.use("/api/upload", require("./routes/api/upload.js"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
