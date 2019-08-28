const express = require('express');

// database access using knex
const db = require('../data/car-dealer.db3');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({
            err: err,
            message: 'There was an error retrieving the cars'
        })
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    db('cars').where('id', id)
    .then(car => {
        if (car) {
            res.status(200).json(car)
        } else {
            res.status(404).json({
                message: 'invalid ID'
            })
        }     
    })
    .catch(err => {
        res.status(500).json({
            err: err,
            message: 'There was an error retrieving that car info'
        })
    })
});

router.post('/', (req, res) => {
    const carData = req.body

    db('cars').insert(carData)
    .then(ids => {
        res.status(201).json({ newId: ids[0]})
    })
    .catch(err => {
        res.status(500).json({
            err: err,
            message: 'There was an error creating the car info'
        })
    })
});


module.exports = router;