import { TWOTsteps } from "@/constants/TWOTsteps";
import React, { useState } from "react";

const page = () => {
  return (
    <div className="mt-[80px] wrapper pt-5 flex-center flex-col">
      <h1 className="hero-text">Test wysycenia organizmu tlenem (TWOT)</h1>
      <p className="base-medium">
        Twot to niezwykle użyteczne i dokładne narzędzie, za pomocą którego
        ocenisz swoją względną głębokość oddychania. Jest to bezpieczny i prosty
        sprawdzian, nie wymaga żadnego specjalistycznego sprzętu i moze być
        przeprowadzony o każdej porze. Tym, co odróżnia go od innych testów,
        jest fakt, iż określa on czas wstrzymania oddechu do pojawienia się
        pierwszej poważnej chęci do zaczerpnięcia powietrza.
      </p>
      <p className="base-medium">
        Jednym z pojęć, które musisz znać, jeśli interesują cię możliwości
        fizyczne twojego organizmu, jest maksymalny pobór tlenu, znany też pod
        postacią wzoru VO2max. Określa ono maksymalną zdolność organizmu do
        transportu i wykorzystania tlenu w czasie jednej minuty naprawdę
        wyczerpującego wysiłku. VO2max to jeden z czynników decydujących o tym
        jak długo dany zawodnik może utrzymać określoną intensywność wysiłku.
        Jest uważany za najlepszy wskaźnik wytrzymałości układu
        oddechowo-krążeniowego oraz tlenowej wydolności ludzkiego ciałą.
      </p>
      <h2 className="hero-sub text-black"> Jak wykonać test TWOT?</h2>
      <div className="text-left">
        {TWOTsteps.map((step) => {
          return (
            <p key={step.id} className="paragraph-medium">
              {step.id}| {step.text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default page;
