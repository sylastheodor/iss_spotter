const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  return request(`https://freegeoip.app/json/${JSON.parse(body).ip}`);
}

const fetchISSFlyOverTimes = (body) => {
  const latitude = JSON.parse(body).latitude;
  const longitude = JSON.parse(body).longitude;
  return request(`http://api.open-notify.org/iss/v1/?lat=${latitude}&lon=${longitude}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(data => {
    const { response } = JSON.parse(data);
    return response
  });
};

module.exports = { nextISSTimesForMyLocation }