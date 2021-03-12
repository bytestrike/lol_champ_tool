import { ExecModule } from './types'

export const freebsd:ExecModule = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  exec: (command, options) => {
    throw new Error('freebsd not implemented')
  }
}

export default freebsd
