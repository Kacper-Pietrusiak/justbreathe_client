import { blogSectionImages } from "@/constants/blogSectionImages";
import React from "react";
import Image from "next/image";
import { Button } from "./custom";
import Link from "next/link";
import { apiUrl } from "@/constants/apiUrl";
import { homePageUrl } from "@/constants/homePageUrl";

const BlogSection = () => {
  return (
    <div className="wrapper flex h-screen">
      <div className="w-1/2 flex-center">
        <div className="grid grid-cols-2 gap-2">
          {blogSectionImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="blog image"
              className="w-[300px]"
            />
          ))}
        </div>
      </div>
      <div className="w-1/2 flex-center flex-col">
        <h2 className="hero-sub text-black">Wejdź na bloga</h2>
        <p className="base-medium text-gray-700 px-10 text-center">
          Szukasz więcej informacji? Chcesz dowiedzieć się więcej o poprawnym
          oddychaniu, technikach oraz korzyściach płynących z niego? Jeśli tak
          to odwiedź mojego bloga. Znajduje się tam sporo użytecznej wiedzy.{" "}
          <br />
          #JUST_BREATH
        </p>
        <Link href={`${homePageUrl}/blog`}>
          <Button text="Zobacz" className="bg-black text-white" />
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
