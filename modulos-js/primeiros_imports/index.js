// const opr = require('./operations.js');
// const opr02 = require('./operations02.js');

import opr_es6 from './operations-ES6.js';
import opr2_es6 from './operations02-ES6.js';
import {divisao, resto} from './operations03.js';



// console.log(opr.name);
// console.log(opr.soma(3, 4));
// console.log(opr.subtracao(3, 4));


// console.log(opr02(3, 4));


console.log(opr_es6.name);
console.log(opr_es6.soma(3, 4));
console.log(opr_es6.subtracao(3, 4));


console.log(opr2_es6(3, 4));

console.log(divisao(3, 4));
console.log(resto(3, 4));