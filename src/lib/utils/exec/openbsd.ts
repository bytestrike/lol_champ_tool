import { ExecModule } from './types'

export const openbsd:ExecModule = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  exec: (command, options) => {
    throw new Error('openbsd not implemented')
  }
}

export default openbsd
