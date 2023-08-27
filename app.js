const express = require('express')
const logger = require('morgan')
const cors = require('cors')

// const mongoose = require('mongoose')
// const DB_HOST = 'mongodb+srv://Anatolii:EtvurSt7qq92W4dF@cluster0.rkzhogc.mongodb.net/phonebook?retryWrites=true&w=majority'

// // mongoose.set('strictQuery', true)

// mongoose.connect(DB_HOST)
//   .then(() => console.log('Database connection successful'))
//   .catch(error => console.log(error.message))


const contactsRouter = require('./routes/api/contacts')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  
  const { status = 500, message = "Server Error" } = err;
    res.status(status).json({ message });
})

module.exports = app
