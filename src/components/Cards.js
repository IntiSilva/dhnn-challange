"use client";

import Carousel from "./Carousel";

const Cards = () => {
  return (
    <>
      <section className="w-full flex flex-col xl:flex-row mb-0 mt-20 lg:my-20 items-center">
        {/* Mobile */}
        <div className="px-4 py-8 lg:hidden">
          <h2 className="text-xs text-neutral-400 font-bold uppercase tracking-[3px]">
            Lorem Ipsum
          </h2>
          <h1 className="font-bold text-[40px] mt-5 max-w-[500px]">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="w-[120px] h-px bg-aeronex mt-4" />
          <p className="text-base text-zinc-600 leading-snug max-w-[500px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna.
          </p>
          <button className="w-full h-12 rounded-sm text-aeronex bg-white hover:text-white border border-aeronex hover:bg-aeronex focus:ring-4 font-bold text-sm px-5 py-2.5 text-center mt-6">
            Call to action
          </button>
        </div>
        {/*Desktop*/}
        <div className="hidden lg:flex flex-col justify-start ml-8">
          <h2 className="text-xs text-neutral-400 font-bold uppercase tracking-[3px] pt-12">
            Lorem Ipsum
          </h2>
          <h1 className="font-bold text-[54px] mt-4">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="w-[120px] h-px bg-aeronex mt-4"></div>
          <p className="text-base text-zinc-600 leading-snug mt-4">
            Lorem ipsum dolor sit amet, consectetur. Aenean sed metus vel diam
            consequat mollis. Praesent metus
          </p>
          <button className="w-36 h-12 rounded-sm text-aeronex hover:text-white border border-aeronex hover:bg-aeronex focus:ring-4 font-bold text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">
            Call to action
          </button>
        </div>
        <Carousel />
      </section>
    </>
  );
};

export default Cards;
