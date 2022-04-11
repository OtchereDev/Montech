import Image from "next/image";
import React from "react";
import AddNFTImage from "../assets/images/AddNFT.svg";

const AddNFT = () => {
  return (
    <div className="flex flex-col md:flex-row md:mt-14 px-10 lg:px-20  justify-center  gap- lg:gap-16 text-white">
      <div className=" lg:w-4/12 mt-5 md:mt-5 w-10/12 md:w-4/12">
        <h2 className="text-2xl md:text-xl lg:text-3xl text-center md:text-left font-semibold font-tertiary mb-5">
          Create and add NFt&apos;s Collections, Artists...
        </h2>
        <div className="mt-3 w-10/12 mx-auto md:mx-0">
          <h4 className="text-md text-center md:text-left md:text-base  lg:text-xl font-medium mb-2">
            Easy Updates and Creation
          </h4>

          <h5 className="text-xs text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            vitae aliquam cursus sit amet, cum molestie viverra
          </h5>
        </div>
        <div className=" mt-3 w-10/12 mx-auto md:mx-0">
          <h4 className="text-md text-center md:text-left  md:text-base font-medium mb-2">
            Edit, Delete or Duplicate
          </h4>

          <h5 className="text-xs text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            vitae aliquam cursus sit amet, cum molestie viverra
          </h5>
        </div>
      </div>
      <div className="lg:w-5/12 md:w-6/12 mt-10 md:mt-0">
        <div className="relative flex justify-center items-center">
          <Image src={AddNFTImage} alt={"nft images"} />
        </div>
      </div>
    </div>
  );
};

export default AddNFT;
