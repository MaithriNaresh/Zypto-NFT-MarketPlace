import { useEffect } from "react";

const useThemeToggle = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById("darkMode");
    const body = document.body;

    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const otherTheme = savedTheme === "theme-light" ? "theme-dark" : "theme-light";
      body.classList.remove(otherTheme);
      body.classList.add(savedTheme);
    } else {
      body.classList.add("theme-dark");
    }

    const handleToggle = () => {
      if (body.classList.contains("theme-light")) {
        body.classList.replace("theme-light", "theme-dark");
        localStorage.setItem("theme", "theme-dark");
      } else {
        body.classList.replace("theme-dark", "theme-light");
        localStorage.setItem("theme", "theme-light");
      }
    };

    toggleBtn?.addEventListener("click", handleToggle);

    // Cleanup
    return () => {
      toggleBtn?.removeEventListener("click", handleToggle);
    };
  }, []);
};

export default useThemeToggle;
