import { ExecModule } from './types'
import { exec } from 'child_process'

export const darwin:ExecModule = {
  exec: (command, options) => {
    return exec([
      'open',
      ...options.platformArgs,
      command,
      ...options.args
    ].join(' '))
  }
}

export default darwin
