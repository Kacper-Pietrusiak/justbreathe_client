"use client";
import React from "react";
import { links } from "@/constants/links";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useSession } from "@clerk/nextjs";
import { checkUserRole } from "../utils/userUtils";
import { homePageUrl } from "@/constants/homePageUrl";
import { logo } from "@/assets/images";
import Image from "next/image";

const Navbar = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);

  return (
    <div className=" w-full absolute top-0 bg-glass">
      <div className="wrapper flex-between items-center relative h-[80px]">
        <div>
          <Link href={homePageUrl}>
            <Image src={logo} alt="logo" className="h-[70px] w-auto" />
          </Link>
        </div>

        <nav className="flex">
          {links.map((link) =>
            (link.role === "admin" && userRole === "org:admin") ||
            !link.role ? (
              <Link key={link.title} href={link.url}>
                {/* Use a div instead of an anchor tag */}
                <div className="mr-5 cursor-pointer hover:text-gray-900">
                  <h3 className="h2-bold px-4">{link.title}</h3>
                </div>
              </Link>
            ) : null
          )}
        </nav>

        <div>
          <SignedOut>
            <a href="/sign-in">
              <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4">
                Login
              </button>
            </a>
            <a href="/sign-up">
              <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base">
                Sign Up
              </button>
            </a>
          </SignedOut>

          <SignedIn>
            <div className="ml-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
