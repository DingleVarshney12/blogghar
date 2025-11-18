import React from 'react'
import { Item, ItemActions, ItemContent, ItemMedia } from './item';
import Image from 'next/image';
import { Button } from './button';
import Link from 'next/link';

const ListBlogCard = (blog) => {
  return (
    <Item variant="outline" className="mb-1">

      <ItemContent>
        <h3 className="font-semibold">{blog.title.slice(0, 20)}...</h3>
        <p className='text-xs'>{blog.title.slice(0, 60)}...</p>
      </ItemContent>
      <ItemActions >
        <Link href={`/blog/${blog.id}`}>
          <Button variant={"link"}>Read More</Button>
        </Link>
      </ItemActions>
    </Item >
  );
}

export default ListBlogCard