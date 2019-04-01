const {VerticalCalculator} = require('./dist/index');

const cal = new VerticalCalculator();

console.log(JSON.stringify(cal.generate(1222.99, '-', 999).nodes));
