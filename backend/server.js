const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectsRoutes');
const usersRoutes = require('./routes/usersRoutes');
require("dotenv").config();
port=3000;

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(projectRoutes);
app.use(usersRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(port, () => {
       console.log('Successfully connected to port', port);
    });
    console.log('Connected to Database');
 }
 )
 .catch((error) => {
    console.log(error);
 })
