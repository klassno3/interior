import React, { useState, useEffect } from "react";
import Image from "next/image";
import Quote from "../../public/quotes.svg";
import LogoOne from "../../public/testimonialLogo.svg";
import ProfileOne from "../../public/testimonialImage.jpg";
import ProfileTwo from "../../public/testimonialImage2.jpg";
import ProfileThree from "../../public/testimonialImage3.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      content: {
        name: "Alemayehu Hailu",
        logo: LogoOne,
        profile: ProfileOne,
        testimonial:
          "Our customers' needs and satisfaction are above all else. This means not only meeting your expectations but going the extra mile to understand your unique preferences.",
      },
    },
    {
      content: {
        name: "Eyobel Hailu",
        logo: LogoOne,
        profile: ProfileTwo,
        testimonial:
          "I couldn't be happier with the results of my project with Alex Designs. His expertise and style choices exceeded my expectations. Highly recommend!",
      },
    },
    {
      content: {
        name: "Hailu Girma",
        logo: LogoOne,
        profile: ProfileThree,
        testimonial:
          "I can't thank Ethan Design Studio enough for their dedication to my project. The result is beyond what I had imagined. Their talent is unmatched!",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 50000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      id="testimonial"
      className="flex max-w-[1440px] mx-auto  gap-3 items-center md:gap-10 font-montserrat px-5 lg:px-14 pb-10 md::pb-20 lg:w-9/12 mx-auto text-foreground"
    >
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
      >
        <IoIosArrowBack className="text-3xl lg:text-5xl" />
      </button>
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image src={Quote} alt="quote img" className="w-24 md:w-32 " />
        <div className="uppercase font-light text-center text-sm md:text-base">
          here from the clients themselves
        </div>
        <p className="text-center lg:w-[80%] text-base lg:text-lg">
          {" "}
          {slides[currentSlide].content.testimonial}
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src={slides[currentSlide].content.profile}
            alt="logo"
            className="md:w-20 md:h-20 w-16 h-16 object-cover rounded-full"
          />
          <span className="uppercase text-sm md:text-base">
            {slides[currentSlide].content.name}
          </span>
          <Image
            src={slides[currentSlide].content.logo}
            alt="logo"
            className="w-3/5 md:w-full"
          />
        </div>
      </div>
      <button onClick={nextSlide}>
        <IoIosArrowForward className="text-3xl md:text-5xl" />
      </button>
    </div>
  );
};

export default Testimonial;
