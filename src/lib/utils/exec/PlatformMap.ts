import { currentPlatform } from './currentPlatform'
import { Input } from './Input'
import { Platform } from './Platform'

export type OptionalPlatformMap<T> = {
  [U in Platform]?: T;
};

export const _default = 'default'

export type PlatformMapWithDefault<T> = {
  [_default]: T;
} & OptionalPlatformMap<T>;

export function forPlatform<T> (input: Input<T>, platform?: Platform) {
  if (!platform) {
    platform = currentPlatform()
  }

  if (typeof input === 'object') {
    if (_default in input) {
      // input is PlatformMapWithDefault
      const defaultValue = (input as PlatformMapWithDefault<T>)[_default]
      const platformValue = (input as PlatformMapWithDefault<T>)[platform]

      if (Array.isArray(defaultValue) && Array.isArray(platformValue)) {
        return [...defaultValue, ...platformValue] as T extends [] ? T : never
      }

      if (typeof defaultValue === 'object') {
        return { ...defaultValue, ...platformValue } as T
      }

      return platformValue || defaultValue as T
    }

    return input as T
  }

  return input as T
}
