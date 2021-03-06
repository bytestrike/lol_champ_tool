import { Config, Mode, Type } from '../../types/Browser'
import exec from '../../utils/exec'
import { BrowserInterface } from './Base'

export class Chrome extends BrowserInterface {
  constructor (options: Config) {
    super({ ...options, type: Type.CHROME })

    if (!this.path) {
      throw new Error('path is required')
    }
  }

  async args (url: string) {
    const args = await super.args(url)

    switch (this.mode) {
      case Mode.APP:
        args.push(`--app=${url}`)
        break
      case Mode.KIOSK:
        args.push('--kiosk')
        args.push(url)
        break
      case Mode.DEFAULT:
        args.push(url)
        break
      default:
        throw new Error(`Mode ${this.mode} not Implemented on ${Chrome.name}`)
    }

    return args
  }

  async open (url: string) {
    super.open(url)
    const args = await this.args(url)

    this.cp = exec({ default: this.path }, { args })
  }
}
