import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = () => {
    let width = hasWindow ? window.innerWidth : null;
    let height = hasWindow ? window.innerHeight : null;
    console.log(width, 'width before')
    console.log(height, 'height before')
    if (width < 767) {
      width = "sm";
    } else if (width < 1023) {
      width = "md";
    } else {
      width = "lg";
    }
    console.log(width, 'width')
    console.log(height, 'height')
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };
  useEffect(() => {
    if (hasWindow) {
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
