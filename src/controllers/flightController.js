const flightService = require('../services/flightService');

const fetchFlights = async (req, res) => {
  try {
    const flights = await flightService.fetchFlights();
    res.render('index', { flights });
  } catch (error) {
    res.status(500).send('Error fetching flights');
  }
};

const getAddFlight = (req, res) => {
  res.render('add-flight');
};

const postAddFlight = async (req, res) => {
  try {
    await flightService.addFlight(req.body);
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error adding flight');
  }
};

const getEditFlight = async (req, res) => {
  try {
    const flight = await flightService.getFlightById(req.params.id);
    res.render('edit-flight', { flight });
  } catch (error) {
    res.status(500).send('Error fetching flight');
  }
};

const postEditFlight = async (req, res) => {
  try {
    await flightService.updateFlight(req.params.id, req.body);
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error updating flight');
  }
};

const postDeleteFlight = async (req, res) => {
  try {
    await flightService.deleteFlight(req.params.id);
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error deleting flight');
  }
};

module.exports = {
  fetchFlights,
  getAddFlight,
  postAddFlight,
  getEditFlight,
  postEditFlight,
  postDeleteFlight
};
