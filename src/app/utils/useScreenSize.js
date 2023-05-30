import React from "react";
const ScreenSizeEnum = {
  Mobile: "Mobile",
  Laptop: "Laptop",
};

const useScreenSize = () => {
  const getCurrentScreenSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      return ScreenSizeEnum.Mobile;
    } else {
      return ScreenSizeEnum.Laptop;
    }
  };
  const [screenSize, setScreenSize] = React.useState(getCurrentScreenSize());

  React.useEffect(() => {
    const handleResize = () => {
      const newSize = getCurrentScreenSize();
      setScreenSize(newSize);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
