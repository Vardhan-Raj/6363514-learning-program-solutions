import React from "react";

const blogs = [
  {
    id: 1,
    title: "React Learning",
    author: "Stephen Biz",
    content: "Welcome to learning React!",
  },
  {
    id: 2,
    title: "Installation",
    author: "Schewzdenier",
    content: "You can install React from npm.",
  },
];

const BlogDetails = () => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
