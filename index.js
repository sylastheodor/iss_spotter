const { fetchMyIP } = require('./iss');

fetchMyIP((err, IP) => {
  if(err) {
    console.log(err)
  } else {
    console.log(IP.ip)
  }
});