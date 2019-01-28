import * as FS from 'fs'
import * as Path from 'path'

declare type FN = () => any

export default class Timestamping {
  private data: {[key: string]: number[]} = {}

  public recordsToJsonFile(filename) {
    return FS.writeFileSync(
      Path.resolve(process.cwd(), 'results', `${filename}.json`), 
      JSON.stringify(this.data)
    )
  }
  
  public record(key: string, fn: FN): FN {
    return () => {
      const hrstart = process.hrtime()
      fn()
  
      this.keep(key, process.hrtime(hrstart))
    }
  }
  
  private keep(key, [seconds, nanoseconds]) {
    if (!this.data[key]) {
      this.data[key] = [nanoseconds]
      return
    }
  
    this.data[key].push(nanoseconds)
  }  
}
