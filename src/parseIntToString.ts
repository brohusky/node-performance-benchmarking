import * as Benchmark from 'benchmark'

// Parsing Suite
const suite = new Benchmark.Suite

console.log('Parsing int to string')

suite
  .add('-> String()', () => {
    String('1')
  })
  .add('-> .toString()', () => {
    ('1').toString()
  })

  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ 'async': false, initCount: 10000 })