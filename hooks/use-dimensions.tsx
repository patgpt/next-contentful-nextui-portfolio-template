import { useState, useCallback, useLayoutEffect } from "react";

interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = (
  ref: React.RefObject<HTMLElement>,
): Dimensions | null => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  const measure = useCallback(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref]);

  useLayoutEffect(() => {
    if (!ref.current) return;

    measure();

    const resizeObserver = new ResizeObserver(() => measure());

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, measure]);

  return dimensions;
};
