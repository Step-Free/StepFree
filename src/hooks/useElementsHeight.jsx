import { useLayoutEffect, useRef, useState } from "react";

/**
 * Custom hook to measure the height of an element.
 * Returns a ref to attach and the current height.
 */
export function useElementHeight(onHeightChange) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const newHeight = ref.current.offsetHeight;
        setHeight(newHeight);
        onHeightChange?.(newHeight); // optional callback
      }
    };

    updateHeight();

    // Use ResizeObserver for more accurate measurements
    const resizeObserver = new ResizeObserver(updateHeight);
    if (ref.current) resizeObserver.observe(ref.current);

    window.addEventListener("resize", updateHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [onHeightChange]);

  return { ref, height };
}
