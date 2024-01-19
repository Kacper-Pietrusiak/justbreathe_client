import React from "react";
import Image from "next/image";
import { lungs } from "@/assets/images";
import { Button } from "./custom";
import Link from "next/link";
import { apiUrl } from "@/constants/apiUrl";
import { homePageUrl } from "@/constants/homePageUrl";

type Props = {};

const TestSection = (props: Props) => {
  return (
    <section id="twot" className="relativew-screen h-screen">
      <div className="absolute w-screen h-screen flex justify-center items-center z-[-1]">
        <p className="bg-sign ">TWOT</p>
      </div>
      <div className="wrapper flex items-center h-screen z-10">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={lungs} alt="lungs" className="w-full" />
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col">
          <h2 className="h1-bold text-black">Sprawdź swój TWOT</h2>
          <p className="base-medium text-center">
            TWOT to badanie wykorzystywane w medycynie, oceniające zdolność
            organizmu do przyswajania tlenu. Polega na pomiarze poziomu tlenu we
            krwi przed i po wysiłku fizycznym, aby ocenić efektywność przepływu
            tlenu do tkanek podczas aktywności.{" "}
          </p>
          <Link href="test">
            <Button text="Sprawdź" className="bg-black text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestSection;
