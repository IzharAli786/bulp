// src/components/BlogPostTeasers.js
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title 1",
    summary: "Summary of the blog post...",
    imageUrl: "blog-image-1.jpg",
    link: "blog-post-1.html",
  },
  // Add more blog posts here
];

const BlogPosts = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 m-4">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="w-72 shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm">{post.summary}</p>
            <a
              href={post.link}
              className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
