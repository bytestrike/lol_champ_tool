import { existsSync } from 'fs'
import path from 'path'
import { Config, Mode, Type } from '../../types/Browser'
import exec from '../../utils/exec'
import { currentPlatform } from '../../utils/exec/currentPlatform'
import { Platform } from '../../utils/exec/Platform'
import { BrowserInterface } from './Base'

export class Edge extends BrowserInterface {
  constructor (options: Config) {
    super({ ...options, type: Type.EDGE })

    if (currentPlatform() !== Platform.DARWIN) {
      throw new Error('Seriously, what is wrong with you???')
    } else {
      this.path = path.join(
        process.env['ProgramFiles(x86)'],
        './Internet Explorer/iexplore.exe'
      )
      if (!existsSync(this.path)) {
        throw new Error('Thank Gaben, Edge is gone.')
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
        throw new Error(`Mode ${this.mode} not Implemented on ${Edge.name}`)
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
