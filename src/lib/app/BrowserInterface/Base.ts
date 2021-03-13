import { ChildProcess } from 'child_process'
import { Type, Mode as BrowserMode, Config } from '../../types/Browser'

export abstract class BrowserInterface {
  protected _cp: ChildProcess
  protected type: Type
  protected mode: BrowserMode
  protected path: string

  constructor (options?: Config) {
    this.type = options?.type || Type.DEFAULT
    this.mode = options?.mode || BrowserMode.DEFAULT
    this.path = options?.path
  }

  set cp (value: ChildProcess) {
    value.on('exit', code => {
      console.log(`${this.cp.spawnfile}: exited with code ${code}`)
    })
    this._cp = value
  }

  get cp () {
    return this._cp
  }

  async init () { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async args (url: string) {
    return [] as string[]
  }

  async open (url: string) {
    console.log('opening', url, 'in', this.type, `(mode: ${this.mode})`)
  }

  async stop () {
    return await new Promise<void>(resolve => {
      this.cp?.on('close', (code, signal) => {
        console.log(
          this.cp.spawnfile, 'closed with', 'code:', code, 'signal:', signal
        )
        resolve()
      })
      this.cp?.kill()
    })
  }
}
