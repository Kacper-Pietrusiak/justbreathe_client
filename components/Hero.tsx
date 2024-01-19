import React from "react";
import { Button } from "@/components/custom";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen flex items-center background-main">
      <div className="wrapper">
        <div className="w-1/2">
          <h1 className="hero-text text-white">
            Oddychaj lepiej, {<br />} żyj lepiej
          </h1>
          <p className="hero-sub text-subtext">
            Dowiedz się, jak poprawić swoje zdrowie i samopoczucie dzięki
            prawidłowemu oddychaniu.
          </p>
          <Link href="#twot">
            <Button text="Więcej" className="bg-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
