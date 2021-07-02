const request = require("request");

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      callback("Error: " + error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP.  Response: ${body}.`;
      callback(Error(msg), null);
      return;
    } else {
      callback(null, JSON.parse(body).ip);
      return;
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback("Error while fetching coordinates: " + error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates.  Response: ${body}.`;
      callback(msg, null);
    } else {
      const { longitude, latitude } = JSON.parse(body);
      callback(null, { longitude, latitude });
    }
  });
};

const fetchISSFlyOverTimes = (obj, callback) => {
  request(`http://api.open-notify.org/iss/v1/?lat=${obj['latitude']}&lon=${obj['longitude']}`, (error, response, body) => {
    if (error) {
      callback("Error fetching fly-by times: " + error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when looking for fly by times. Response ${body}`;
      callback(msg, null);
      return;
    } else {
      callback(null, JSON.parse(body).response);
    }
  });
};

const nextISSTimesForMyLocation = (callback) => {
  callback
  }



module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };
