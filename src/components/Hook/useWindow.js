import { useState, useEffect } from "react";

const useWindow = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLarge;
};

export default useWindow;
