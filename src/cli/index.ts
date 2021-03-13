import fs from 'fs'
import yargs from 'yargs'
import path from 'path'
import { defaultConfig } from '../lib/defaults/config'
import App from '../lib/app/App'
import { league } from './commands/league'

enum OptionKeys {
  CONFIG = 'config'
}

export interface RawOptions {
  [OptionKeys.CONFIG]?: string
}

export interface RefinedOptions {
  app: App
}

export async function refineOptions (raw: RawOptions) {
  const refined:Partial<RefinedOptions> = {}

  console.log(raw)

  const { config } = raw
  if (config && fs.existsSync(path.resolve(config))) {
    refined.app = new App({
      ...defaultConfig,
      ...require(path.resolve(config))
    })
  } else {
    refined.app = new App(defaultConfig)
  }

  return refined as RefinedOptions
}

export function run () {
  return yargs.option(OptionKeys.CONFIG, {
    type: 'string',
    alias: 'c'
  }).command(league).argv
}

run()
