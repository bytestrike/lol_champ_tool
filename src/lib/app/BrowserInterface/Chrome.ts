import { Base } from './Base'
import { ChildProcess, spawn } from 'node:child_process'

export class Chrome extends Base {
  protected cp: ChildProcess

  async open (url: string) {
  }
}
