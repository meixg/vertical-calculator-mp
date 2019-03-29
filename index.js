const {VerticalCalculator} = require('./dist/index');

const cal = new VerticalCalculator();

console.log(JSON.stringify(cal.generate(100, '*', 0).nodes));
