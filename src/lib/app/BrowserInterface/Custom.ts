import { Config, Mode, Type } from '../../types/Browser'
import exec from '../../utils/exec'
import { BrowserInterface } from './Base'

interface CustomArgsFunction {
  (parameters: {
    args: string[],
    mode: Mode,
    url: string
  }): string[]
}

export interface CustomOptions extends Config {
  args?: CustomArgsFunction
}

export class Custom extends BrowserInterface {
  protected argsFun: CustomArgsFunction

  constructor (options: CustomOptions) {
    super({ ...options, type: Type.CUSTOM })

    this.argsFun = options.args

    if (!this.path) {
      throw new Error('path is required')
    }
  }

  async args (url: string) {
    const args = await super.args(url)

    if (typeof this.argsFun === 'function') {
      return this.argsFun({
        args,
        mode: this.mode,
        url
      })
    } else {
      args.push(url)
    }

    return args
  }

  async open (url: string) {
    super.open(url)
    const args = await this.args(url)

    this.cp = exec({ default: this.path }, { args })
  }
}
