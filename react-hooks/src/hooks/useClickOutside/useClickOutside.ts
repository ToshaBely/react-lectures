import { RefObject, useCallback, useEffect } from 'react';

interface Event extends MouseEvent {
  target: Element;
}

export function useClickOutside(
  ref: RefObject<HTMLElement | undefined>,
  callback: (event: MouseEvent) => void,
) {
  let onClick = useCallback((event: MouseEvent) => {
    // console.log('[processed click] target:', (event as Event).target, ', element:', ref.current);

    if (ref.current && !ref.current.contains((event as Event).target)) {
      callback(event);
    }
  }, [ref, callback]);

  useEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [onClick]);
}
