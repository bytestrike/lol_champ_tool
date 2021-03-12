import { Base } from './Base'
import exec from '../../utils/exec'

export class Chrome extends Base {
  async open (url: string) {
    this.cp = exec({
      default: 'chrome',
      linux: 'google-chrome'
    }, {
      args: [url],
      platformArgs: {
        default: [],
        darwin: ['-a']
      }
    })
  }
}
