const flights = [];

const fetchFlights = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(flights);
    }, 2000);
  });
};

const addFlight = async (flightData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      flights.push({ id: flights.length + 1, ...flightData });
      resolve();
    }, 1500);
  });
};

const getFlightById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const flight = flights.find(f => f.id == id);
      flight ? resolve(flight) : reject('Flight not found');
    }, 500);
  });
};

const updateFlight = async (id, flightData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = flights.findIndex(f => f.id == id);
      if (index !== -1) {
        flights[index] = { ...flights[index], ...flightData };
        resolve();
      } else {
        reject('Flight not found');
      }
    }, 1500);
  });
};

const deleteFlight = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = flights.findIndex(f => f.id == id);
      if (index !== -1) {
        flights.splice(index, 1);
        resolve();
      } else {
        reject('Flight not found');
      }
    }, 1500);
  });
};

module.exports = {
  fetchFlights,
  addFlight,
  getFlightById,
  updateFlight,
  deleteFlight
};
