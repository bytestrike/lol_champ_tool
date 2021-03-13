import { spawn } from 'child_process'
import path from 'path'
import { currentPlatform } from './currentPlatform'
import { Input } from './Input'
import { forPlatform } from './PlatformMap'

export type CommandInput = Input<string>
export type ArgsInput = Input<string[]>

export interface Options {
  args?: ArgsInput
  platformCommand?: CommandInput
  platformArgs?: ArgsInput
}

export interface CompletedOptions {
  args: string[]
  platformArgs: string[]
  platformCommand?: string
}

export function exec (command: CommandInput, options: Options) {
  const platform = currentPlatform()
  const _command = forPlatform(command, platform)
  const _args = forPlatform(options.args, platform) || []
  const _platformArgs = forPlatform(options.platformArgs, platform) || []
  const _platformCommand = forPlatform(options.platformCommand, platform)

  const { dir, base } = path.parse(_command)

  const segments = [_platformCommand, ..._platformArgs, base, ..._args]
    .filter(_ => typeof _ !== 'undefined')

  const [cmd, ...args] = segments

  console.log(dir)

  return spawn(cmd, args, {
    cwd: dir,
    stdio: ['pipe', 'pipe', 'pipe']
  })
}
