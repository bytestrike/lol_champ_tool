export enum Type {
  ELECTRON = 'electron',
  CHROME = 'chrome',
  FIREFOX = 'firefox',
  OPERA = 'opera',
  EDGE = 'edge',
  SAFARI = 'safari',
  DEFAULT = 'default',
  CUSTOM = 'custom',
  INTERNET_EXPLORER = 'ie',
  MICROSOFT_EDGE = 'edge'
}

export enum Mode {
  DEFAULT = 'default',
  APP = 'app',
  KIOSK = 'kiosk'
}

export type BrowserMap<T> = {
  [U in Type]?: T
}

export interface Config {
  type: Type,
  mode: Mode,
  path?: string
}
