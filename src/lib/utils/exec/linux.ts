import { ExecModule } from './types'
import { exec } from 'child_process'

export const linux:ExecModule = {
  exec: (command, options) => {
    return exec([
      command,
      ...options.args
    ].join(' '))
  }
}

export default linux
