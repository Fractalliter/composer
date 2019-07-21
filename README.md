# Composer


Install with `npm i --save composer` or `yarn add composer`

## Example:

```
const composer = require('composer');

const add = (...parms) => parms.reduce((a,b) => a+b);
const mul = (...parms) => parms.reduce((a,b) => a*b);

composer(add, mul(1,add(2,3), 4));

```