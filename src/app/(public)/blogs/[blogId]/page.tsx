/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import React from "react";

const BlogDetailsPage = async ({ params }: any) => {
  const { blogId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blog = await res.json();

  console.log(blog?.id);

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h1>Blog Details page</h1>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
