import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// image import
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";
import i3 from "../assets/3.jpg";
const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-top"
            src={i3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={i1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={i2}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
