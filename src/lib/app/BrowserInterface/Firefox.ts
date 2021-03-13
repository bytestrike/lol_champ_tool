import { Config, Mode, Type } from '../../types/Browser'
import exec from '../../utils/exec'
import { BrowserInterface } from './Base'

export class Firefox extends BrowserInterface {
  constructor (options: Config) {
    super({ ...options, type: Type.FIREFOX })

    if (!this.path) {
      throw new Error('path is required')
    }
  }

  async args (url: string) {
    const args = await super.args(url)

    switch (this.mode) {
      case Mode.KIOSK:
        args.push('--kiosk')
        args.push(url)
        break
      case Mode.DEFAULT:
        args.push(url)
        break
      default:
        throw new Error(`Mode ${this.mode} not Implemented on ${Firefox.name}`)
    }

    return args
  }

  async open (url: string) {
    super.open(url)
    const args = await this.args(url)

    this.cp = exec({ default: this.path }, { args })
  }
}
