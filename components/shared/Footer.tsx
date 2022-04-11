import React from "react";

const Footer = () => {
  return (
    <div className=" bg-lightBlue px-5 md:px-10 lg:px-20 py-10 text-white">
      <div>
        <h1 className="font-primary font-bold md:text-lg text-center  ">ONE-OF-BUSINESS</h1>
        <p className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto text-xs mb-8 mt-3 md:font-medium ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio odio
          aliquet vulputate ac ipsum, duis. Et cursus lorem dui sit velit. Non,
          fames mauris egestas adipiscing. Molestie nibh turpis porttitor
          iaculis.
        </p>
      </div>
      <hr className=" opacity-20" />
      <div className="flex flex-col md:flex-row items-center justify-between mt-5 text-xs font-thin">
        <div className="order-2 md:order-1 text-center md:text-left">
          <p>© 2022 by Freedom. All rights reserved</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:w-5/12 lg:w-3/12 justify-between order-1 md:order-2">
          <p className="cursor-pointer mb-3 md:mb-0">Terms of Service</p>
          <p className="cursor-pointer mb-3 md:mb-0">Privacy policy</p>
          <p className="cursor-pointer mb-3 md:mb-0">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
