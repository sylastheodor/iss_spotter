const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((err, IP) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(IP);
//   }
// });

// fetchCoordsByIP('154.20.198.133', (err, location) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(location);
//   }
// })

// const coords = {longitude: -123.3047, latitude: 48.42};

// fetchISSFlyOverTimes(coords, (err, times) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(times);
//   }
// });

nextISSTimesForMyLocation(fetchMyIP((err, IP) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(IP);
    fetchCoordsByIP(IP, (err, location) => {
        if (err) {
          console.log(err);
          return
        } else {
          console.log(location);
          fetchISSFlyOverTimes(location, (err, times) => {
            if (err) {
              console.log(err);
            } else {
              console.log(times);
              return times;
            }
          });
        }
      })
  }
}));