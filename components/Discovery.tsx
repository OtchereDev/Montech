import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import DiscoveryImage from "../assets/images/discovery.svg"

const Discovery = () => {
  return (
    <div className="flex flex-col px-5 md:px-10 lg:px-20 md:flex-row items-center justify-center gap-5 text-white my-4">
      <div className="lg:w-5/12 md:w-6/12">
        <h2 className="font-tertiary text-xl text-center lg:text-3xl font-bold md:text-left">
          Discover and buy extraordinary NFTs from Marketplace built on BSC, FTM
          and Polygon
        </h2>
        <button className="py-2 px-4 lg:py-3 lg:px-5 border border-white mt-3 block mx-auto md:mx-0">
          <span>Learn More</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
        </button>
      </div>
      <div className="lg:w-4/12 mt-5 md:mt-5 w-10/12 md:w-4/12">
          <div className="relative flex justify-center items-center">
              <Image src={DiscoveryImage}  />
          </div>
      </div>
    </div>
  );
};

export default Discovery;
