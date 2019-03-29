const {VerticalCalculator} = require('./dist/index');

const cal = new VerticalCalculator();

console.log(JSON.stringify(cal.generate(13, '+', 11.3).nodes));
