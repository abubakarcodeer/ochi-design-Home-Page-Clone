import { useEffect } from "react";

const useForceReloadOnResize = () => {
  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
};

export default useForceReloadOnResize;
