import os from 'os'
import { Platform } from './Platform'

export function currentPlatform (): Platform {
  const platformString = os.platform()
  return platformString as Platform
}
