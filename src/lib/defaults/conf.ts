import { Type, Mode as BrowserMode } from '../types/Browser'
import { Config } from '../types/Config'

export const defaultConfig: Config = {
  browser: {
    mode: BrowserMode.DEFAULT,
    type: Type.DEFAULT
  }
}
