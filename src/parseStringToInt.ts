import * as Benchmark from 'benchmark'

// Parsing Suite
const suite = new Benchmark.Suite

console.log('Parsing string to Int')
const value: string = '1'

suite
  .add('-> parseInt()', (): number => {
    return parseInt(value, 2)
  })
  .add('-> ~~1', (): number => {
    return ~~value
  })

  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ 'async': false, initCount: 10000 })