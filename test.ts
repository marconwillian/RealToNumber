import {realToInt} from './src/index';

let number = ' R$ 12.345,6789 ';
let changeNumber = realToInt(number, {
    useDecimal: true
});

console.log(`---------- Original: '${number}'`)
console.log(`--------------- <${typeof(changeNumber)}> `, changeNumber);