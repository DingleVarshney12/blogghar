
"use client"
import React, { useEffect } from 'react'
import { Button } from './button';
import ListBlogCard from './ListBlogCard';
import { getData } from '@/hooks/getData';

const RecommendLatestBlog = () => {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            return data;
        }
        fetchData().then((data) => {
            setData(data);
        });
    }, []);
    
  return (
      <aside className="md:w-sm self-start sticky top-24">
          <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold tracking-tight">
                      Recommendations
                  </h2>
                  <Button variant="link">
                      <a href="/explore">View All</a>
                  </Button>
              </div>
              {data.slice(0, 3).map((blog) => (
                  <ListBlogCard key={blog.id} {...blog} />
              ))}
          </div>

          <div>
              <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold tracking-tight">
                      Latest Blogs
                  </h2>
                  <Button variant="link">
                      <a href="/explore">View All</a>
                  </Button>
              </div>
              {data.slice(0, 3).map((blog) => (
                  <ListBlogCard key={blog.id} {...blog} />
              ))}
          </div>

      </aside>
  )
}

export default RecommendLatestBlog