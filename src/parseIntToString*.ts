import * as Benchmark from 'benchmark'
import Timestamping from './timestamping'


const timestamping = new Timestamping()
// Parsing Suite
const suite = new Benchmark.Suite

console.log('Parsing int to string')

suite
  .add('-> String()', timestamping.record('string', () => {
    String('1')
  }))
  .add('-> .toString()', timestamping.record('to-string', () => {
    ('1').toString()
  }))

  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
    timestamping.recordsToJsonFile('parse-int-to-string')
  })
  // run async
  .run({ 'async': false, initCount: 1 })