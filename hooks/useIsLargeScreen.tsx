import { useState, useEffect } from "react";

export default function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const addListener = () => {
    if (window) {
      window
        .matchMedia("(min-width: 1024px)")
        .addEventListener("change", (e) => setIsLargeScreen(e.matches));
    } else {
      setTimeout(addListener, 100);
    }
  };

  useEffect(() => {
    addListener();
  }, []);

  return {
    isLargeScreen,
  };
}
