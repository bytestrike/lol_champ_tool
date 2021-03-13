import { ChildProcess } from 'child_process'
import { CompletedOptions } from './main'

interface ExecFunction {
  (command: string, options?: CompletedOptions): ChildProcess
}

export interface ExecModule {
  exec: ExecFunction
}
