import { ChildProcess } from 'node:child_process'

export abstract class Base {
  protected cp: ChildProcess

  async init () { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async open (url: string) { }
}
