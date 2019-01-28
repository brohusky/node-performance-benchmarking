import * as Benchmark from 'benchmark'

const intValueAsString: string = '1'
const doubleValueLowPrecision: number = 10.20
const doubleValueHighPrecision: number = 10.20234234234234234234234
const loopData10Items: string[] = '1'.repeat(10).split('')
const loopData100Items: string[] = '1'.repeat(100).split('')
const loopData1000Items: string[] = '1'.repeat(1000).split('')
const loopData10000Items: string[] = '1'.repeat(10000).split('')
const loopData100000Items: string[] = '1'.repeat(100000).split('')
const loopData1000000Items: string[] = '1'.repeat(1000000).split('')

const experiments = [
  // Casting/Parsing
  {
    suite: 'int to string',
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
    suite: 'string to Int',
    cases: {
      '-> parseInt()': () => {
        return parseInt(intValueAsString, 2)
      },
      '-> ~~1': () => {
        return ~~intValueAsString
      },
      '-> +1': () => {
        return +intValueAsString
      }
    }
  },
  {
    suite: 'double(low precision) to Int',
    cases: {
      '-> ~~1': () => {
        return ~~doubleValueLowPrecision
      },
      '-> +1': () => {
        return +doubleValueLowPrecision
      }
    }
  },
  {
    suite: 'double(high precision) to Int',
    cases: {
      '-> ~~1': () => {
        return ~~doubleValueHighPrecision
      },
      '-> +1': () => {
        return +doubleValueHighPrecision
      }
    }
  },
  {
    suite: 'int to boolean',
    cases: {
      '-> !!IntValue': () => {
        return !!intValueAsString
      },
      '-> Boolean()': () => {
        return Boolean(intValueAsString)
      }
    }
  },
  // Loop
  {
    suite: 'loop on simple array 1,000 items',
    cases: {
      '-> map': () => {
        loopData1000Items.map((data) => {
          dummyPrint(data)
        })
      },
      '-> foreach of': () => {
        for (const x of loopData1000Items) {
          const data = loopData1000Items[x]
          dummyPrint(data)
        }
      },
      '-> for': () => {
        for (let x = 0; x < loopData1000Items.length; x++) {
          const data = loopData1000Items[x]
          dummyPrint(data)
        }
      }
    }
  },
  {
    suite: 'loop on simple array 10 items',
    cases: {
      '-> map': () => {
        loopData10Items.map((data) => {
          dummyPrint(data)
        })
      },
      '-> foreach of': () => {
        for (const x of loopData10Items) {
          const data = loopData10Items[x]
          dummyPrint(data)
        }
      },
      '-> for': () => {
        for (let x = 0; x < loopData10Items.length; x++) {
          const data = loopData10Items[x]
          dummyPrint(data)
        }
      }
    }
  },
  {
    suite: 'loop on simple array 100 items',
    cases: {
      '-> map': () => {
        loopData100Items.map((data) => {
          dummyPrint(data)
        })
      },
      '-> foreach of': () => {
        for (const x of loopData100Items) {
          const data = loopData100Items[x]
          dummyPrint(data)
        }
      },
      '-> for': () => {
        for (let x = 0; x < loopData100Items.length; x++) {
          const data = loopData100Items[x]
          dummyPrint(data)
        }
      }
    }
  },
  {
    suite: 'loop on simple array 1000 items',
    cases: {
      '-> map': () => {
        loopData1000Items.map((data) => {
          dummyPrint(data)
        })
      },
      '-> foreach of': () => {
        for (const x of loopData1000Items) {
          const data = loopData1000Items[x]
          dummyPrint(data)
        }
      },
      '-> for': () => {
        for (let x = 0; x < loopData1000Items.length; x++) {
          const data = loopData1000Items[x]
          dummyPrint(data)
        }
      }
    }
  },
  {
    suite: 'loop on simple array 10,000 items',
    cases: {
      '-> map': () => {
        loopData10000Items.map((data) => {
          dummyPrint(data)
        })
      },
      '-> foreach of': () => {
        for (const x of loopData10000Items) {
          const data = loopData10000Items[x]
          dummyPrint(data)
        }
      },
      '-> for': () => {
        for (let x = 0; x < loopData10000Items.length; x++) {
          const data = loopData10000Items[x]
          dummyPrint(data)
        }
      }
    }
  },
  {
    suite: 'loop on simple array 100,000 items',
    cases: {
      '-> map': () => {
        loopData100000Items.map((data) => {
          dummyPrint(data)
        })
      },
      '-> foreach of': () => {
        for (const x of loopData100000Items) {
          const data = loopData100000Items[x]
          dummyPrint(data)
        }
      },
      '-> for': () => {
        for (let x = 0; x < loopData100000Items.length; x++) {
          const data = loopData100000Items[x]
          dummyPrint(data)
        }
      }
    }
  },
  {
    suite: 'loop on simple array 1,000,000 items',
    cases: {
      '-> map': () => {
        loopData1000000Items.map((data) => {
          dummyPrint(data)
        })
      },
      '-> foreach of': () => {
        for (const x of loopData1000000Items) {
          const data = loopData1000000Items[x]
          dummyPrint(data)
        }
      },
      '-> for': () => {
        for (let x = 0; x < loopData1000000Items.length; x++) {
          const data = loopData1000000Items[x]
          dummyPrint(data)
        }
      }
    }
  }
]

console.log('Node ', process.version)

experiments.map((experiment) => {
  // Parsing Suite
  const suite = new Benchmark.Suite

  console.log('\n\n\n', experiment.suite)

  Object.keys(experiment.cases).map((caseKey) => {
    suite.add(caseKey, experiment.cases[caseKey])
  })

  suite
    .on('complete', function () {
      console.log('\tFastest is ' + this.filter('fastest').map('name'))
    })
    // run async
    .run({ 'async': false, initCount: 10000 })
})

function dummyPrint(data: any) {
  console.warn = () => undefined
  console.warn(data)
  // do nothing
}