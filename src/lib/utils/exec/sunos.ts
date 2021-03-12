import { ExecModule } from './types'

export const sunos:ExecModule = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  exec: (command, options) => {
    throw new Error('sunos not implemented')
  }
}

export default sunos
