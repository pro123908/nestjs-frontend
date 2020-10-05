import React, { useEffect, useState } from "react";
import Progress from "./Progress";

const ScrollProgress = () => {
  const [scrollProgressPosition, setScrollProgressPosition] = useState(null);

  useEffect(() => {
    listenToScrollEvent();
  });

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      console.log("scrollded!!!!!!!!");
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    console.log({ scrollTop, winHeight, docHeight });

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);
    console.log("Scroll => ", scrollPosition);

    setScrollProgressPosition(scrollPosition);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  return <Progress scroll={scrollProgressPosition + "%"} />;
};

export default ScrollProgress;
