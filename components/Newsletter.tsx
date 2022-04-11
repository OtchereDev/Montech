import Image from "next/image";
import React from "react";
import NewsLetterImage from "../assets/images/newsletter.svg";

const Newsletter = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col px-5 py-6  md:flex-row items-center justify-center gap-5 text-white my-4 bg-white bg-opacity-10 rounded-2xl md:w-10/12 lg:w-8/12 mx-auto">
        <div className="lg:w-6/12 mt-5 md:mt-5 w-10/12 md:w-4/12">
          <div className="relative flex justify-center items-center lg:w-10/12">
            <Image src={NewsLetterImage} />
          </div>
        </div>
        <div className="lg:w-6/12 md:w-7/12">
          <h2 className=" text-xl text-center lg:text-4xl lg:w-10/12 font-bold lg:text-left">
            Join our newsletter
          </h2>
          <p className="text-sm text-center md:w-10/12 lg:text-left lg:w-8/12 my-5">
            No spam. Only latest Oneof news worth your attention.
          </p>
          <div className="overflow-hidden rounded-2xl w-11/12 mx-auto lg:mx-0">
            <input
              className="bg-lightBlue py-3 w-8/12 px-3 outline-none"
              type="email"
              name="email"
              id="email"
            />
            <button className="px-3 bg-primaryGreen inline-block w-4/12 text-white py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
