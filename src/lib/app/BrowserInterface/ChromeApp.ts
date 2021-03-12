import { Base } from './Base'
import exec from '../../utils/exec'

export class ChromeApp extends Base {
  async open (url: string) {
    this.cp = exec({
      default: 'chrome',
      linux: 'google-chrome'
    }, {
      args: [`--app=${url}`],
      platformArgs: {
        default: [],
        darwin: ['-a']
      }
    })
  }
}
