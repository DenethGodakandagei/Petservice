import { useEffect } from "react";

const MainScripts = () => {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal , .revealx , .revealr ");

      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

   
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", reveal);
    }

   
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", reveal);
      }
    };
  }, []); 

  return <div></div>;
};

export default MainScripts;
