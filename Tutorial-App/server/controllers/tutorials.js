const router = require('express').Router()
const db = require('../models')

//Home
router.get('/', (req, res) => {
    db.Tutorial.find()
    .then(tutorials => {
        console.log(tutorials)
        res.send(tutorials)
    }) 
    

})

//Tutorial Index Page
router.get('/:id', (req, res) => {
    console.log("/tutorials get")
})

//Post New Tutorial
router.post('/tutorials', (req, res) => {
    console.log("/tutorials get")
})

//Form Page for New Tutorial
router.get('/new', (req, res) => {
    res.render('tutorials/new')
})

//View Specific Tutorial
router.get('/tutorials/:id', (req, res) => {

})

//Update Specific Tutorial
router.put('/tutorials/:id', (req, res) => {

})

//Edit Tutorial Form
router.get('/tutorials/:id/edit', (req, res) => {

})

//Delete Tutorial
router.delete('/tutorials/:id', (req, res) => {

})

//Create Comment on Tutorial
router.post('/tutorials/:id/comment', (req, res) => {

})

//Delete Comment on Tutorial
router.delete('/tutorials/:id/comment/:commentId')

module.exports = router