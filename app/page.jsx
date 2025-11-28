"use client";
import Image from "next/image";
import Loading from "./loading";
import { useTheme } from "next-themes";
import { Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import BlogCard from "@/components/ui/blogCard";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import RecommendLatestBlog from "@/components/ui/Recommend&LatestBlog";

export default function Home() {
  const { theme } = useTheme();
  const [data, setData] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);


  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => { setLoading(false); return res.json(); })
      .then((data) => setData(data));
  }, []);


  if (!mounted) return null;

  return (
    <>
      <div className="relative w-screen h-screen bg-blue-500 flex items-center justify-center">
        <Image
          src={
            theme === "light"
              ? "./wavesOpacity_light.svg"
              : "./wavesOpacity_dark.svg"
          }
          alt="waves"
          width={1920}
          height={1080}
          className="w-full h-[90px] absolute bottom-0 rotate-180 left-0"
          priority
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Stories, thoughts, ideas & more
          </h1>
          <p className="max-w-2xl text-center mx-auto mt-4 px-4">
            <span className="text-white text-lg leading-0.5">
              Welcome to Blogghar — your go-to platform for sharing stories,
              thoughts, and ideas. Dive into a world of engaging content and
              connect with a community of passionate writers and readers.
            </span>
          </p>
          <div className="mt-4 space-x-4">
            <Button variant="outline">
              <Search />
              <a href="/explore">Explore Blogs</a>
            </Button>
            <Button>
              <Plus />
              <a href="/create-blog">Create Blog</a>
            </Button>
          </div>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <Container className="grid md:grid-cols-[1fr_auto] grid-cols-1 gap-8 my-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Top Blogs</h1>
            <div className="flex flex-wrap gap-4 mt-10">
              {data.slice(0, 3).map((blog) => (
                <BlogCard key={blog.id} {...blog} variant="compact" />
              ))}
            </div>
          </div>
          <RecommendLatestBlog />

        </Container>
      )}
    </>
  );
}