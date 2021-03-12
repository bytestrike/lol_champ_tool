import aix from './aix'
import { currentPlatform } from './currentPlatform'
import darwin from './darwin'
import freebsd from './freebsd'
import { Input } from './Input'
import linux from './linux'
import openbsd from './openbsd'
import { Platform } from './Platform'
import { forPlatform } from './PlatformMap'
import sunos from './sunos'
import win32 from './win32'

export type CommandInput = Input<string>
export type ArgsInput = Input<string[]>

export interface Options {
  args?: ArgsInput
  platformArgs?: ArgsInput
}

export interface CompletedOptions {
  args: string[]
  platformArgs: string[]
}

export function exec (command: CommandInput, options: Options) {
  const platform = currentPlatform()
  const _command = forPlatform(command, platform)
  const _args = forPlatform(options.args, platform) || []
  const _platformArgs = forPlatform(options.platformArgs, platform) || []
  const _options:CompletedOptions = {
    args: _args,
    platformArgs: _platformArgs
  }

  switch (platform) {
    case Platform.AIX:
      return aix.exec(_command, _options)
    case Platform.DARWIN:
      return darwin.exec(_command, _options)
    case Platform.FREEBSD:
      return freebsd.exec(_command, _options)
    case Platform.LINUX:
      return linux.exec(_command, _options)
    case Platform.OPENBSD:
      return openbsd.exec(_command, _options)
    case Platform.SUNOS:
      return sunos.exec(_command, _options)
    case Platform.WIN32:
      return win32.exec(_command, _options)
    default:
      throw new Error(`platform ${platform} not implemented.`)
  }
}
