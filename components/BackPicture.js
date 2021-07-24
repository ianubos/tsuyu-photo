import React, { useEffect, useState } from "react";
import { sitename, topphoto } from '../data/sitedata'

function BackPicture() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed w-full h-full bg-black" style={{ zIndex: -10 }}>
      <img
        className="w-full transition duration-1000 ease-in"
        style={{
          minHeight: "600px",
          objectFit: "cover",
          overflow: "hidden",
          objectPosition: "50% 50%",
          filter:
            scrollY > 400
              ? "blur(4px) brightness(0.5)"
              : "blur(0px) brightness(1)",
        }}
        alt="tsuyu fuji mountain"
        src={topphoto}
        loading="eager"
      />
      <div
        style={{ transform: "translate(-50%, 5rem)" }}
        className="absolute top-36 sm:top-1/4 left-1/2"
      >
        <div
          className="text-3xl sm:text-5xl text-white"
          style={{ fontFamily: "Gayathri" }}
        >
          {sitename}
        </div>
      </div>
    </div>
  );
}
export default BackPicture;
