import React from "react";
import CheckoutCard from "./Checkout/CheckoutCard";
import Masked from "../assets/images/masked.png";
import Music from "../assets/images/music.png";
import Armed from "../assets/images/armed.png";
import Vogue from "../assets/images/vogue.png";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const Checkout = () => {
  const cards = [
    {
      image: Vogue,
      description:
        "Artist creating #JOYWORLD to make you feel JOYful and creative!",
      title: "Rihanna's Collection",
    },

    {
      image: Masked,
      description: "A Non-Fungible access token project by Gary Vee.",
      title: "Artist Bang Collection",
    },
    {
      image: Music,
      description:
        "Official 4/20 drop between Nyan Cat and the one and only Snoop Dogg!",
      title: "Big Dawg Collection",
    },
    {
      image: Armed,
      description: "Generative Art Stored on the Blockchain",
      title: "Trap Boys Collection",
    },
  ];

  return (
    <div className="my-5 text-white">
      <div className="text-center">
        <h3 className="text-2xl md:text-4xl font-medium">
          Checkout Our NFT Collections
        </h3>
        <p className="text-xs md:text-sm">
          Here are some of the top projects we've launched.
        </p>
      </div>

      <div className="flex mt-2 md:mt-6 items-stretch overflow-y-scroll">
        <ScrollingCarousel>
          {cards.map((card, index) => (
            <CheckoutCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </ScrollingCarousel>
      </div>
    </div>
  );
};

export default Checkout;
