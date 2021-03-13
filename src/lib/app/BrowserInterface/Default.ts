import { Config, Mode, Type } from '../../types/Browser'
import exec from '../../utils/exec'
import { BrowserInterface } from './Base'

export class Default extends BrowserInterface {
  constructor (options: Config) {
    super({ ...options, type: Type.DEFAULT })
  }

  async args (url: string) {
    const args = await super.args(url)

    switch (this.mode) {
      case Mode.DEFAULT:
        args.push(url)
        break
      default:
        throw new Error(`Mode ${this.mode} not Implemented on ${Default.name}`)
    }

    return args
  }

  async open (url: string) {
    super.open(url)
    const args = await this.args(url)

    this.cp = exec({
      default: '',
      darwin: 'open',
      linux: 'xdg-open',
      win32: 'start'
    }, { args })
  }
}
