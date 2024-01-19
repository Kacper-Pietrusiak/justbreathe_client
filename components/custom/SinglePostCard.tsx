import React from "react";
import { truncateText } from "@/utils/truncateText";
import { Button } from "@/components/custom";
import Link from "next/link";
import { homePageUrl } from "@/constants/homePageUrl";

interface SinglePostInterface {
  id: string;
  title: string;
  text: string;
  isPublishe: boolean;
  createdAt: string;
  createdBy: string;
}

type PostType = SinglePostInterface | null;

const SinglePostCard = ({ ...post }: PostType) => {
  const { id, title, text, createdBy, createdAt } = post;
  return (
    <div className="blog-card">
      <span className="subtle-regular">
        Created by {createdBy}, at {createdAt}
      </span>
      <h2 className="base-medium">{title}</h2>
      <p className="paragraph-medium mb-3">{truncateText(text)}</p>
      <Link href={`${homePageUrl}/blog/${id}`}>
        <Button text="Pokaż..." className="border-[2px] border-black" />
      </Link>
    </div>
  );
};

export default SinglePostCard;
