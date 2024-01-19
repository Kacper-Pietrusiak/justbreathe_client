"use client";

import React, { useState, useEffect } from "react";
import { useFetch } from "@/utils/useFetch";
import { apiUrl } from "@/constants/apiUrl";
import { SinglePostCard } from "@/components/custom";

const page = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = async () => {
    const data = await useFetch(`${apiUrl}/post`);
    const publishedPosts = data.filter(
      (el: { isPublished: boolean }) => el.isPublished === true
    );
    const sortedPosts = publishedPosts.sort(
      (a: { createdAt: string }, b: { createdAt: string }) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    await setPosts(sortedPosts);
  };

  useEffect(() => {
    fetch();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pt-[80px] flex items-center justify-center min-h-screen">
      <div className="wrapper grid grid-cols-3 gap-12 ">
        {posts.map((post) => (
          <SinglePostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default page;
