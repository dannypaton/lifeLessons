const express = require('express')
const app = express()

const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Lessons
const Lesson = require('./api/lessons/model')
const lessons = require('./api/lessons/controller')

// Users
const User = require('./api/users/model')
const users = require('./api/users/controller')

mongoose.connect('mongodb://localhost/lifeLessons')

app.use(bodyParser.json())

// This serves all files placed in the /public
// directory (where gulp will build all React code)
app.use(express.static('public'))

// Also serve everything from our assets directory (static
// assets that you want to manually include)
app.use(express.static('assets'))

// Include your own logic here (so it has precedence over the wildcard
// route below)
app.get('/api/lessons', lessons.getLessons)
app.post('/api/lessons', lessons.postLesson)
// app.delete('/api/lessons/:id', movies.deleteMovie)
// app.put('/api/lessons/:id', movies.updateMovie)

app.get('/api/users', users.getUsers)
app.post('/api/users', users.createUser)

// This route serves your index.html file (which
// initializes React)
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Start your server, and listen on port 8080.
app.listen(8080, function () {
  console.log("App is now listening on port 8080!")
})
