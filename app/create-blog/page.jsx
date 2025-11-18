'use client';

import CategoriesSelection from '@/components/ui/categoriesSelection';
import Container from '@/components/ui/container';
import TextEditor from '@/components/ui/TextEditor';
import { useRouter } from 'next/navigation';
import React from 'react';
const CreateBlog = () => {
  const router = useRouter();
  const userLoggedIn = true;
  const isFirstBlog = true;
  if (!userLoggedIn) {
    router.push('/');
  }
  return (
    <Container className="mt-28">
      <div className='mb-6'>
        {isFirstBlog ? (
          <>
          <h1 className="text-3xl font-bold mb-4">Create Your First Blog</h1>
          <p className="text-sm text-gray-600">
            Share your thoughts and ideas with the world by creating your first blog post.
            Click the button below to get started!
          </p>
          </>
      ) : (
        <h1 className="text-3xl font-bold mb-4">Create a New Blog Post</h1>
      )}
        </div>
        <div>
          <form className="space-y-6" >
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="title"
              >
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter your blog title"
              />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="content"
            >
              Blog Content
            </label>
            <TextEditor/>
          </div>
          <div>
            <label
            className="block text-sm font-medium mb-1"
            htmlFor="categories"
          >
            Category
            </label>
            <CategoriesSelection/>
          </div>
            {/* Publish Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Publish Blog
              </button>
          </form>
        </div>
    </Container>
  );
};

export default CreateBlog;
