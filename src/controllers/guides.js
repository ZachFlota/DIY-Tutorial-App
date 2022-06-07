const router = require('express').Router
const db = require('../models')

//Home
router.get('/', (req, res) => {

})

//Tutorial Index Page
router.get('/tutorials', (req, res) => {

})

//Post New Tutorial
router.post('/tutorials', (req, res) => {

})

//Form Page for New Tutorial
router.get('tutorials/new', (req, res) => {

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