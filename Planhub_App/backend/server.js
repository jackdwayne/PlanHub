//Setting up MongoDb database

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb database connection established successfully!!!")
})

//const exercisesRouter = require('./routes/exercises.js');
const tasksRouter = require('./routes/tasks');

//app.use('/exercises', exercisesRouter);
app.use('/tasks', tasksRouter);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})