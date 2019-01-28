"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Benchmark = require("benchmark");
// Parsing Suite
const suite = new Benchmark.Suite;
console.log('Parsing string to Int');
const value = '1';
suite
    .add('-> parseInt()', () => {
    return parseInt(value, 2);
})
    .add('-> ~~1', () => {
    return ~~value;
})
    .on('cycle', function (event) {
    // console.log(String(event.target))
})
    .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
    // run async
    .run({ 'async': false });
//# sourceMappingURL=parseStringToInt.js.map