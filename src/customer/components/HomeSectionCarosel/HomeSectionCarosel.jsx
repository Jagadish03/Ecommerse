import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../Home_card/HomeSectionCard";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5 },
  };
  const items = [1, 1, 1, 1, 1].map((items) => <HomeSectionCard />);
  return (
    <div className="relative px-4 lg:px-8 ">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          infinite
          responsive={responsive}
        />
        <button variant="contained" className="z-50 bg-blue-600" sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateY(-50%)"  }}  aria-label="next">
            <ArrowBackIosIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
