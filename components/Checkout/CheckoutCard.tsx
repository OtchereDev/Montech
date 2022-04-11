import Image, { StaticImageData } from "next/image";
import React from "react";
import Vogue from "../../assets/images/vogue.png";

interface IProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const CheckoutCard: React.FC<IProps> = ({ title, description, image }) => {
  return (
    <div className="w-6/12 md:w-4/12 lg:w-3/12 rounded-xl bg-white bg-opacity-10 overflow-hidden mx-3">
      <div className="relative w-full flex justify-center">
        <div className=" h-32 md:h-40">
          <Image src={image} layout={"fill"} />
        </div>
        <div className=" w-10 h-10 md:w-14 md:h-14 border-4 md:border-8 flex overflow-hidden border-opacity-60 justify-center items-center bottom-0 transform mx-auto translate-y-1/2 border-white rounded-full absolute">
          <Image src={image} layout={"fill"} />
        </div>
      </div>
      <div className=" pt-10 pb-5 px-3">
        <h2 className="font-semibold text-sm md:text-xl text-center">
          {title}
        </h2>
        <p className="text-xs md:text-sm text-center w-11/12 md:w-10/12 mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CheckoutCard;
