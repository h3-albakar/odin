const convertToCelsius = function(degree) {
  return (5/9) * (degree-32)
};

const convertToFahrenheit = function(degree) {
  return Math.round((degree * (9/5) + 32) *10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
