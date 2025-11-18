import React from "react";
import { Item, ItemContent, ItemFooter, ItemMedia } from "@/components/ui/item";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({id,title,author ="dingle varshney", postBlog = "12-11-2006" ,body,variant}) => {
  return (
    <Item variant="outline" className="text-left">
      <ItemMedia variant="image" className={`w-full ${variant === "compact" ? "md:w-[256px]" : ""} h-auto`}>
        <Image
          alt="blog image"
          src="/download.jpg"
          width={1920}
          height={1080}
          className="w-full aspect-video"
        />
      </ItemMedia>
      <ItemContent>
        <div className="text-xs font-bold">
          <span className="mr-1">
            {author} •
          </span>
          {postBlog}
        </div>
        <h3 className="font-bold capitalize text-lg">{title}</h3>
        <p className="text-sm">{body}</p>
      </ItemContent>
      <ItemFooter>
        <Link href={`/blog/${id}`}>
        <Button>Read More</Button>
        </Link>
      </ItemFooter>
    </Item>
  );
};

export default BlogCard;
