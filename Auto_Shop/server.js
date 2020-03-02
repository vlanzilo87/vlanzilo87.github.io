
//Dependencies
const express = require('express')
const methodOverride = require('method-override')

//Configuration
const app = express()
const PORT = 3000

//Data
const items = require('./models/items.js')

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//Routes
//Index
app.get('/items', (req, res) => {
  res.render('index.ejs', {
    allItems: items
  })
})

//New (must be above show)
app.get('/items/new', (req, res) => {
  res.render('new.ejs')
})

//Seed (if needed)


//Create
app.post('/items', (req, res) => {
  items.push(req.body)
  res.redirect('/items')
})

//Edit
app.get('/items/:id/edit', (req, res) => {
  res.render('edit.ejs', {item: items[req.params.id], id: req.params.id})
})

//Update
app.put('/items/:id', (req, res) => {
  items[req.params.id] = req.body
  res.redirect('/items')
})

//Delete
app.delete('/items/:id', (req, res) => {
  items.splice(req.params.id, 1)
  res.redirect('/items')
})

//Show
app.get('/items/:id', (req, res) => {
  res.render('show.ejs', {item: items[req.params.id], id: req.params.id})
})

//Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
