import { FC } from 'react';

export function attachSlots<T extends FC, S extends Record<string, FC>>(Component: T, slots: S) {
  Object.assign(Component, slots)

  return Component as T & S
}
