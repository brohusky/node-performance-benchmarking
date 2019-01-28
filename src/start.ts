import * as Benchmark from 'benchmark'

const intValue: string = '1'

const experiments = [
  {
    suite: 'Parsing int to string',
    cases: {
      '-> String()': () => {
        return String('1')
      },
      '-> .toString()': () => {
        return ('1').toString()
      }
    }
  },
  {
    suite: '\n\n\nParsing string to Int',
    cases: {
      '-> parseInt()': () => {
        return parseInt(intValue, 2)
      },
      '-> ~~1': () => {
        return ~~intValue
      }
    }
  }
]

experiments.map((experiment) => {
  // Parsing Suite
  const suite = new Benchmark.Suite

  console.log(experiment.suite)

  Object.keys(experiment.cases).map((caseKey) => {
    suite.add(caseKey, experiment.cases[caseKey])
  })

  suite
    .on('cycle', function (event) {
      // console.log(String(event.target))
    })
    .on('complete', function () {
      console.log('\tFastest is ' + this.filter('fastest').map('name'))
    })
    // run async
    .run({ 'async': false })
})