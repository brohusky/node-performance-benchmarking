"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Benchmark = require("benchmark");
const timestamping_1 = require("./timestamping");
const timestamping = new timestamping_1.default();
// Parsing Suite
const suite = new Benchmark.Suite;
console.log('Parsing int to string');
suite
    .add('-> String()', timestamping.record('string', () => {
    String('1');
}))
    .add('-> .toString()', timestamping.record('to-string', () => {
    ('1').toString();
}))
    .on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    timestamping.recordsToJsonFile('parse-int-to-string');
})
    // run async
    .run({ 'async': false, initCount: 1 });
//# sourceMappingURL=parseIntToString*.js.map