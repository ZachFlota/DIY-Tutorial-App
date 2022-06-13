let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

//const { useReducer } = require('react');
//const router = require('express').Router();
let db = require('../models/tutorials');

//Create(POST) new tutorial
router.route('/create').post((req, res, next) => {
    db.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})

//Finds(GET) all tutorials in the DB
router.route('/').get((req, res) => {
    db.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//GET tutorial by id edit page
router.route('/edit/:id').get((req, res) => {
    db.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Edit(PUT) tutorial by id
router.route('/update/:id').put((req, res, next) => {
    db.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Tutorial updated succesfully!')
        }
    })
})

//DELETE tutorial by id
router.route('/delete/:id').delete((req, res, next) => {
    db.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

//Finds all tutorials in the DB
router.get('/', (req, res) => {
    db.Tutorial.find()
    .then(tutorials => {
        console.log(tutorials)
        res.send(tutorials)
    }) 
    

})



module.exports = router