import { defaultConfig } from '../defaults/config'
import { Config } from '../types/Config'

export class App {
  protected config: Config

  constructor (config?: Config) {
    this.config = { ...defaultConfig, ...config }
  }
}

export default App
