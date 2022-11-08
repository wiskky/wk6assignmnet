const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)

router.post('/addFlight', controller.addFlight)

router.get('/getFlight/:id', controller.getFlight)

router.get('/allFlight', controller.allFlight)

router.put('/update', controller.update)

router.delete('/delete', controller.delete)

module.exports = router;

