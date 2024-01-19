import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface BenefitCardInterface {
  icon: StaticImageData;
  name: string;
}

const BenefitCard = ({ icon, name }: BenefitCardInterface) => {
  return (
    <div className="flex items-start ">
      <div className="w-[180px] flex-col flex-1 text-white">
        <div className="flex-center mb-3">
          <Image
            src={icon}
            alt={`${name} icon`}
            className="text-white w-[80px]"
          />
        </div>
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
