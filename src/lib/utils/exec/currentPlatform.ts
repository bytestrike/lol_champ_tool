import os from 'node:os'
import { Platform } from './Platform'

export function currentPlatform (): Platform {
  const platformString = os.platform()
  return Platform[platformString]
}
