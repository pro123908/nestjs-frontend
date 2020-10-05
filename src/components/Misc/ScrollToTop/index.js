import React from "react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      ScrollToTop
    </div>
  );
};

export default ScrollToTop;
