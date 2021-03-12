import { ExecModule } from './types'
import { exec } from 'child_process'

export const win32:ExecModule = {
  exec: (command, options) => {
    return exec([
      'start',
      ...options.platformArgs,
      command,
      ...options.args
    ].join(' '))
  }
}

export default win32
