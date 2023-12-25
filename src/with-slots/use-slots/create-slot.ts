import { PropsWithChildren } from 'react';

export function createSlot() {
  return ({ children }: PropsWithChildren) => {
    return children;
  };
}
