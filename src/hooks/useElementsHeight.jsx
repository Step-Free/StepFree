import { useLayoutEffect, useRef, useState } from "react";


export function useElementHeight(onHeightChange) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const newHeight = ref.current.offsetHeight;
        setHeight(newHeight);
        onHeightChange?.(newHeight); 
      }
    };

    updateHeight();

    
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
