"use client";

import { apiUrl } from "@/constants/apiUrl";
import { useFetch } from "@/utils/useFetch";
import { renderParagraphs } from "@/utils/renderParagraphs";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { homePageUrl } from "@/constants/homePageUrl";

const page = ({ params }: { params: { slug: string } }) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const id = decodeURI(params.slug);

  const fetchData = async () => {
    const data = await useFetch(`${apiUrl}/post/${id}`);
    await setPost(data[0]);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  if (!post) {
    return <p>Loading</p>;
  }

  return (
    <div className="wrapper mt-[80px] body-screen post-min">
      <Link href={`${homePageUrl}/blog`}>
        <button className="px-3 py-4 rounded-full text-black border-2 border-black ml-[40px]">
          <ArrowBackIcon /> COFNIJ
        </button>
      </Link>
      <div className="pl-[40px] border-l-2 mt-5">
        <span className="subtle-regular">
          Created by {post.createdBy}, at {post.createdAt}
        </span>
        <h2 className="hero-text">{post.title}</h2>
        <div className="mb-3">{renderParagraphs(post.text)}</div>
      </div>
    </div>
  );
};

export default page;
