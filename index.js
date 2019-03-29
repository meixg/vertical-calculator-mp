const {VerticalCalculator} = require('./dist/index');

const cal = new VerticalCalculator();

console.log(JSON.stringify(cal.generate(1000.123, '-', 199.456456456).nodes));
