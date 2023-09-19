import Image from "next/image";

const Card = ({ cardImage }) => {
  return (
    <>
      <div className="max-w-[384px] grid grid-cols-1 pt-4">
        <div className="row-span-1 mb-4">
          <Image
            src={cardImage}
            className="rounded-lg w-96 h-72 object-cover"
          />
        </div>
        <div className="row-span-2">
          <div className="col-span-1 justify-start">
            <div className="w-full h-[2px] bg-[#212121] my-1" />
            <h1 className="text-neutral-800 text-xl font-bold font-['DIN Pro'] leading-normal pt-2">
              Lorem ipsum
            </h1>
            <p className="text-zinc-600 text-sm font-normal font-['DIN Pro'] leading-[18px] pt-2">
              Quisque vel dictum magna.
            </p>

            <button className="text-blue-700 text-sm font-bold font-['DIN Pro'] underline underline-offset-4 leading-tight py-4">
              Call to action
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
