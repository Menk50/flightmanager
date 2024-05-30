const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get('/', flightController.fetchFlights);
router.get('/add-flight', flightController.getAddFlight);
router.post('/add-flight', flightController.postAddFlight);
router.get('/edit/:id', flightController.getEditFlight);
router.post('/edit/:id', flightController.postEditFlight);
router.post('/delete/:id', flightController.postDeleteFlight);

module.exports = router;
