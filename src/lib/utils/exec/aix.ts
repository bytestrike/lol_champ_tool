import { ExecModule } from './types'

export const aix:ExecModule = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  exec: (command, options) => {
    throw new Error('aix not implemented')
  }
}

export default aix
