require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

// routes
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`iNotebook backend listening at http://localhost:${PORT}`)
})