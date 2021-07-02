const request = require("request");

const fetchMyIP = function (callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      return callback("Error: " + error, null);
    } else {
      return callback(null, JSON.parse(body.ip));
    }
  });
};

module.exports = { fetchMyIP }
