import React from "react";
import { wave_bg, wave_bg2 } from "@/assets/images/index";
import Image from "next/image";
import { benefits } from "@/constants/benefits";
import { BenefitCard } from "./custom";

const Benefits = () => {
  return (
    <div>
      <Image src={wave_bg} alt="background" className="w-screen" />
      <div className="bg-blue-700 flex-center flex-col pb-5">
        <h2 className="hero-sub">Korzyści</h2>
        <div className="grid grid-cols-3 gap-16">
          {benefits.map((item) => (
            <BenefitCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <Image src={wave_bg2} alt="background" className="w-screen" />
    </div>
  );
};

export default Benefits;
