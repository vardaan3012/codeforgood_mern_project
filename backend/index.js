require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

const path = require('path');
const bodyParser = require('body-parser');

connectToMongo();
const app = express()
const PORT = process.env.PORT

//init  middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/upload'))

// // Available Routes
// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))
// routes
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`iNotebook backend listening at http://localhost:${PORT}`)
})
