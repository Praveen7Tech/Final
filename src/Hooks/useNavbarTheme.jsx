import { useEffect } from "react";


const useNavbarTheme = (themeRef) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        themeRef.current.classList.add("nav-dark");
      } else {
        themeRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
};

export default useNavbarTheme;
