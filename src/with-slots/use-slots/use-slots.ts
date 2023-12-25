import { ReactNode, useMemo } from 'react';

export function useSlots<S extends Record<string, React.FC>>(children: ReactNode | undefined, registeredSlots: S) {
  const slots = useMemo(() => {
    const slots: Record<keyof S, ReactNode> = {} as unknown as any;
    if (Array.isArray(children)) {
      children.forEach((child) => {
        Object.keys(registeredSlots).map((slotKey: keyof S) => {
          if (child.type === registeredSlots[slotKey]) {
            slots[slotKey] = child;
          }
        });
      });
    } else if (children && typeof children === 'object' && 'type' in children) {
      Object.keys(registeredSlots).map((slotKey: keyof S) => {
        if (children.type === registeredSlots[slotKey]) {
          slots[slotKey] = children;
        }
      });
    }

    return slots;
  }, [children, registeredSlots]);

  return slots;
}
