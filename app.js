const express = require('express')
const app = express()

const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// These are the ones for login
const passport = require('passport')
const session = require('express-session')
const requireLogin = require('./require_login')

// Lessons
const Lesson = require('./api/lessons/model')
const lessons = require('./api/lessons/controller')

// Users
const User = require('./api/users/model')
const users = require('./api/users/controller')

mongoose.connect(process.env.MONGODB_SERVER);

passport.use(User.createStrategy())
app.use(bodyParser.json())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(session({ secret: process.env.COOKIE_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())

// This serves all files placed in the /public
// directory (where gulp will build all React code)
app.use(express.static('public'))

// Also serve everything from our assets directory (static
// assets that you want to manually include)
app.use(express.static('assets'))

// LESSONS
app.get('/api/lessons', lessons.getLessons)
app.post('/api/lessons', requireLogin, lessons.postLesson)
// app.post('/api/lessons', lessons.postLesson)
app.get('/api/user/:id/lessons', requireLogin, lessons.getUsersLessons)
// app.delete('/api/lessons/:id', movies.deleteMovie)
// app.put('/api/lessons/:id', movies.updateMovie)

// USER
app.get('/api/user', users.getUser)
app.post('/api/user', users.createUser)
app.patch('/api/user/:id', users.updateUser)

// LOGIN
app.post('/api/login', passport.authenticate('local'), (req, res) => {
  if (!req.user) {
    res.status(401).send({ message: "No user "});
  } else {
    res.send(req.user);
  }
})

app.get('/api/logout', (req, res) => {
  req.logout()
  res.json('User logged out.')
})


// This route serves your index.html file (which
// initializes React)
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Start your server, and listen on port 8080.
app.listen(process.env.PORT, function () {
  console.log(`App is now listening on port ${process.env.PORT}!`);
})
