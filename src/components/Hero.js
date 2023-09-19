"use client";

import Image from "next/image";
import { useState } from "react";
import Background from "../../public/assets/Image1.jpg";
import ArrowOpen from "../../public/assets/arrow-blue-top-right.svg";
import ArrowClose from "../../public/assets/arrow-blue-bottom-left.svg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Mobile */}
      <section className="w-full h-full pt-[70px] lg:hidden">
        <Image src={Background} alt=""/>
        <div className="px-4 py-8">
          <h2 className="text-xs text-neutral-400 font-bold uppercase tracking-[3px]">
            Lorem Ipsum
          </h2>
          <h1 className="font-bold text-[32px] mt-5 max-w-[500px] leading-tight">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="w-[120px] h-px bg-aeronex mt-4" />
          <p className="text-base text-zinc-600 leading-snug max-w-[500px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna.
          </p>
          <button className="w-full h-12 rounded-sm text-white bg-aeronex hover:text-aeronex border border-aeronex hover:bg-white focus:ring-4 font-bold text-sm px-5 py-2.5 text-center mt-6">
            Call to action
          </button>
        </div>
      </section>

      {/*Desktop*/}
      <section className="hidden lg:block w-full h-screen pt-[89px] bg-hero-background bg-cover">
        <div
          className={`bg-white bottom-0 left-0 absolute py-10 pr-10 pl-[120px] flex rounded-tr ${
            isOpen ? "slide-down active" : "slide-up"
          }`}
        >
          <div>
            <h2 className="text-xs text-neutral-400 font-bold uppercase tracking-[3px] ">
              Lorem Ipsum
            </h2>
            <h1 className="font-bold max-w-[500px] text-[40px] leading-normal">
              Lorem ipsum dolor sit amet, consectetur
            </h1>
            {isOpen && (
              <>
                <div className="w-[120px] h-px bg-aeronex mt-4" />
                <p className="text-base text-zinc-600 leading-snug max-w-[500px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna.
                </p>
                <button className="w-36 h-12 rounded-sm text-white bg-aeronex hover:text-aeronex border border-aeronex hover:bg-white focus:ring-4 font-bold text-sm px-5 py-2.5 text-center mt-6">
                  Call to action
                </button>
              </>
            )}
          </div>
          <button onClick={toggleMenu} className="self-start hidden lg:block">
            <Image
              src={isOpen ? ArrowClose : ArrowOpen}
              width={24}
              height={24}
              alt=""
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
