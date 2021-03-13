import { defaultConfig } from '../defaults/config'
import { BrowserMap, Config as BrowserConfig } from '../types/Browser'
import { Config } from '../types/Config'
import * as BI from './BrowserInterface'

const browserInterfaceMap:BrowserMap<
  (options: BrowserConfig) => BI.BrowserInterface
> = {
  chrome: options => new BI.Chrome(options),
  custom: options => new BI.Custom(options),
  default: options => new BI.Default(options),
  edge: options => new BI.Edge(options),
  electron: () => { throw new Error('Not Implemented') },
  firefox: options => new BI.Firefox(options),
  ie: options => new BI.IE(options),
  opera: options => new BI.Opera(options),
  safari: options => new BI.Safari(options)
}

export class App {
  protected _config: Config
  protected _browserInterface: BI.BrowserInterface

  constructor (config?: Config) {
    this._config = { ...defaultConfig, ...config }

    this._browserInterface = browserInterfaceMap[this._config.browser.type](
      this._config.browser
    )
  }

  get config () {
    return this._config
  }

  get browserInterface () {
    return this._browserInterface
  }
}

export default App
