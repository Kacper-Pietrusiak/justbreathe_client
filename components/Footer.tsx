import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-700 py-4 text-center text-white ">
      {" "}
      © {new Date().getFullYear()} Kacper Pietrusiak. Wszelkie prawa zatrzeżone.
    </div>
  );
};

export default Footer;
