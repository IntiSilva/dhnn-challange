import Carousel from "react-multi-carousel";
import Card from "./Card";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import arrowGray from "../../public/assets/arrowGray.svg";
import arrowBlue from "../../public/assets/arrowBlue.svg";
import Image2 from "../../public/assets/Image2.jpg";
import Image3 from "../../public/assets/Image3.jpg";
import Image4 from "../../public/assets/Image4.jpg";

const CustomButtonGroup = ({ next, previous, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="custom-button-group">
      <div className="pr-8 flex">
        <span className="text-neutral-800">0{currentSlide}</span>
        <span className="text-aeronex pl-1">/ </span>
        <span className="text-neutral-400 pl-1">0{totalItems}</span>
      </div>
      <button onClick={() => previous()}>
        <Image src={arrowBlue} />
      </button>
      <button onClick={() => next()} className="pl-6">
        <Image src={arrowGray} />
      </button>
    </div>
  );
};

export default () => (
  <div className="max-w-[912px] w-[100%] mx-auto relative flex flex-col">
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="item-carousel"
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<CustomButtonGroup />}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 2,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay={false}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <Card cardImage={Image2} />
      <Card cardImage={Image3} />
      <Card cardImage={Image4} />
    </Carousel>
  </div>
);
