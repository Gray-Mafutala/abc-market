import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

type SlidingBannerAdsProps = {
  sliders: { imgPath: string; alt: string; link: string; id: string }[];
};

const SlidingBannerAds = ({ sliders }: SlidingBannerAdsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + 1 < sliders.length ? prevSlide + 1 : 0
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : sliders.length - 1
    );
  };

  const goToSpecificSlide = (numSlide: number) => setCurrentSlide(numSlide);

  useEffect(() => {
    if (autoPlay === false) return;
    const clear = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide + 1 < sliders.length ? prevSlide + 1 : 0
      );
    }, 2500);

    return () => clearInterval(clear);
  }, [autoPlay, sliders]);

  return (
    <div
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      className="relative w-full"
    >
      {/* left button */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2
        p-2 rounded-full bg-blue-light text-slate-500 
        hover:text-primary-blue duration-300 ease-out
        active:scale-95 z-10"
      >
        <IoIosArrowBack className="text-[1.5rem] mobileM:text-[2rem]" />
      </button>

      {/* right button */}
      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2
        p-2 rounded-full bg-blue-light text-slate-500 
        hover:text-primary-blue duration-300 ease-out
        active:scale-95 z-10"
      >
        <IoIosArrowForward className="text-[1.5rem] mobileM:text-[2rem]" />
      </button>

      {/* dots navigation */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 
        flex items-center gap-x-[6px] z-10"
      >
        {sliders.map(({ id }, index) => (
          <span
            key={id}
            onClick={() => goToSpecificSlide(index)}
            className={
              index === currentSlide
                ? "h-2 w-5 rounded-md cursor-pointer bg-sky-500"
                : `h-2 w-2 rounded-full cursor-pointer bg-white
                    hover:bg-sky-200 duration-200`
            }
          ></span>
        ))}
      </div>

      {/* slides */}
      <div
        className="relative flex h-80 overflow-x-hidden rounded-2xl
        overflow-hidden"
      >
        {sliders.map(({ imgPath, alt, link, id }, index) => (
          <Link key={id} to={link}>
            <img
              src={imgPath}
              alt={alt}
              className={
                index === currentSlide
                  ? `absolute w-full h-full left-0 top-0 object-cover 
                    transition-all duration-500 ease-out hover:scale-110`
                  : index > currentSlide
                  ? `absolute w-full h-full left-0 top-0 object-cover 
                    translate-x-[100%] transition-transform duration-500
                    ease-in-out`
                  : `absolute w-full h-full left-0 top-0 object-cover 
                    -translate-x-[100%] transition-transform duration-500
                    ease-in-out`
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SlidingBannerAds;
