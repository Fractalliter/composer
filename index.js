var composer = require('./composer');

const add = (...parms) => parms.reduce((a,b) => a+b);
const mul = (...parms) => parms.reduce((a,b) => a*b); 

composer(mul, add(1,3), 4);

module.exports= {
    add,
    mul
}