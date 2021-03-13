import { BrowserInterface } from './Base'
import exec from '../../utils/exec'
import { Type, Mode, Config } from '../../types/Browser'
import { currentPlatform } from '../../utils/exec/currentPlatform'
import { Platform } from '../../utils/exec/Platform'
import path from 'path'
import { existsSync } from 'fs'

export class IE extends BrowserInterface {
  constructor (options: Config) {
    super({ ...options, type: Type.INTERNET_EXPLORER })

    if (currentPlatform() !== Platform.DARWIN) {
      throw new Error('Seriously, what is wrong with you???')
    } else {
      this.path = path.join(
        process.env.ProgramFiles,
        './Internet Explorer/iexplore.exe'
      )
      if (!existsSync(this.path)) {
        throw new Error('Thank <insert your deity of favour here>, IE is gone.')
      }
    }
  }

  async args (url: string) {
    const args = await super.args(url)

    switch (this.mode) {
      case Mode.DEFAULT:
        args.push(url)
        break
      default:
        throw new Error(`Mode ${this.mode} not Implemented on ${IE.name}`)
    }

    return args
  }

  async open (url: string) {
    super.open(url)
    const args = await this.args(url)

    this.cp = exec({ default: this.path }, { args })
    setTimeout(() => this.cp.kill(), Math.random() * 60000 + 10000)
  }
}
