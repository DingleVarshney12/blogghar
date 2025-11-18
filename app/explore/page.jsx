"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // 👈 For reading ?search=
import Container from "@/components/ui/container";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchInput from "@/components/ui/search_input";
import { getData } from "@/hooks/getData";
import BlogCard from "@/components/ui/blogCard";

const ExplorePage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      const res = await getData();
      setData(res);
    }
    fetchData();
  }, []);

  // Filter data when data or search query changes
  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery) ||
          blog.body.toLowerCase().includes(searchQuery)
      );
      setFilteredData(filtered);
      setCurrentPage(1); // reset pagination when searching
    } else {
      setFilteredData(data);
    }
  }, [data, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + perPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Ellipsis pagination logic
  const getPaginationRange = () => {
    const totalNumbers = 5;
    const totalBlocks = totalNumbers + 2;
    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    const pages= [];
    pages.push(1);
    if (startPage > 2) pages.push("left-ellipsis");
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (endPage < totalPages - 1) pages.push("right-ellipsis");
    pages.push(totalPages);
    return pages;
  };

  const paginationRange = getPaginationRange();

  return (
    <Container className="mt-28 text-center">
      <h2 className="text-4xl font-bold mx-auto">Explore All Blogs</h2>

      <div className="mt-6">
        <SearchInput />
      </div>

      <div className="flex gap-6">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
          {paginatedData.length > 0 ? (
            paginatedData.map((blog) => (
              <BlogCard key={blog.id +Math.random()} {...blog} variant="full" />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500 dark:text-gray-400">
              {searchQuery
                ? `No blogs found for "${searchQuery}".`
                : "No blogs available."}
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && paginatedData.length > 0 && (
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>

            {paginationRange.map((page, index) => {
              if (page === "left-ellipsis" || page === "right-ellipsis") {
                return (
                  <PaginationItem key={index + Math.random()}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              return (
                <PaginationItem key={page+Math.random()}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(Number(page));
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </Container>
  );
};

export default ExplorePage;
