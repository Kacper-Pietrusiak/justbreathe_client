// "use client";

import { useSession } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { checkUserRole } from "@/utils/userUtils";
import { useRouter } from "next/navigation";
import { homePageUrl } from "@/constants/homePageUrl";
import AddForm from "@/components/AddForm";
import Sidebar from "@/components/Sidebar";
import PostTable from "@/components/PostTable";
import { useFetch } from "@/utils/useFetch";
import { apiUrl } from "@/constants/apiUrl";

const page = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const router = useRouter();

  const fetch = async () => {
    const data = await useFetch(`${apiUrl}/post`);
    await setPosts(data);
  };

  useEffect(() => {
    if (userRole === "org:admin") {
      fetch();
      setIsLoading(false);
    } else {
      router.push(homePageUrl);
      alert("unauthorized access denied");
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" h-screen flex items-center justify-center pt-[80px]">
      <Sidebar />
      <PostTable posts={posts} />
      <AddForm />
    </div>
  );
};

export default page;
