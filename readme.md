## RealToNumber

Convert your real(pt-BR) string to float number ou other types.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

Use:
```
$ npm install realtonumber
```


## Features
- realToFloat - Convert real to float
- realToInt - Convert real to int


## Examples
1. Convert string to float.
```
const {realToFloat} = require('realtonumber');

let number = realToFloat('R$ 12.345,67');
// > 12345.67

let number = realToFloat('R$ 12.345,6789', {
    decimal: 3
});
// > 12345.678

```
Options:
- decimal: number > Number of decimal cases in this number.


2. Convert string to int.
```
const {realToInt} = require('realtonumber');

let number = realToInt('R$ 12.345,67');
// > 12346

let number = realToInt('R$ 12.345,6789', {
    useDecimal: true
});
// > 1234568

```
Options:
- useDecimal: boolean > When you active this option, your number remove ',' and use 2 number after.


## License

  [MIT](LICENSE)