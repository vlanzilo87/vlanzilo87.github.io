
//Dependencies
const express = require('express')
const methodOverride = require('method-override')

//Configuration
const app = express()
const PORT = 3000

//Data
const parts = require('./models/parts.js')

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//Routes
//Welcome
app.get('/', (req, res) => {
  res.render('welcome.ejs')
})

//About
app.get('/about', (req, res) => {
  res.render('about.ejs')
})

//Index
app.get('/parts', (req, res) => {
  res.render('index.ejs', {
    allParts: parts
  })
})

//New (must be above show)
app.get('/parts/new', (req, res) => {
  res.render('new.ejs')
})

//Create
app.post('/parts', (req, res) => {
  parts.push(req.body)
  res.redirect('/parts')
})

//Edit
app.get('/parts/:id/edit', (req, res) => {
  res.render('edit.ejs', {part: parts[req.params.id], id: req.params.id})
})

//Update
app.put('/parts/:id', (req, res) => {
  parts[req.params.id] = req.body
  res.redirect('/parts')
})

//Delete
app.delete('/parts/:id', (req, res) => {
  parts.splice(req.params.id, 1)
  res.redirect('/parts')
})

//Show
app.get('/parts/:id', (req, res) => {
  res.render('show.ejs', {part: parts[req.params.id], id: req.params.id})
})

//Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
