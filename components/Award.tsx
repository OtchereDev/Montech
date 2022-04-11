import Image from "next/image";
import React from "react";
import AwardImage from "../assets/images/Awards.svg";

const Award = () => {
  return (
    <div className="flex flex-col md:flex-row px-10 lg:px-20 items-center mt-10 justify-center gap-5 text-white my-4">
      <div className="lg:w-5/12 md:w-6/12">
        <p className="text-primaryGreen text-sm">Built On Tezos</p>
        <h2 className=" text-xl text-center lg:text-3xl font-medium md:text-left">
          The Green NFT platform that connects artists and fans.
        </h2>
        <p className="text-sm mt-4 md::w-10/12">
          OneOf is built on the Tezos blockchain, an energy efficient
          proof-of-stake network. OneOf chose Tezos because of its energy
          efficient design as well as its unique ability to self-amend, allowing
          it to undergo regular upgrades that keep it at the cutting edge of
          innovation.
        </p>
      </div>

      <div className="lg:w-4/12 mt-5 md:mt-5 w-10/12 md:w-4/12">
        <div className="relative flex justify-center items-center lg:w-9/12">
          <Image src={AwardImage} alt={"award"} />
        </div>
      </div>
    </div>
  );
};

export default Award;
