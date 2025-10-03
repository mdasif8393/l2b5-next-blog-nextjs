import { NextResponse } from "next/server";

export const blogs = [
  {
    id: 9,
    title: "Exploring Tailwind CSS",
    content:
      "Tailwind CSS enables rapid UI development with utility-first classes. Learn how to design responsive layouts with ease.",
    thumbnail:
      "https://tailwindcss.com/_next/static/media/social-card-large.6e4ddda3.jpg",
    isFeatured: true,
    tags: ["CSS", "Tailwind", "UI"],
    views: 3,
    authorId: 4,
    createdAt: "2025-09-22T04:16:55.078Z",
    updatedAt: "2025-09-22T12:06:51.094Z",
    author: {
      id: 4,
      name: "Asif 4",
      email: "asif4@gmail.com",
      password: "12345678",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-22T03:30:22.336Z",
      updatedAt: "2025-09-22T03:30:22.336Z",
    },
  },
  {
    id: 8,
    title: "Exploring Tailwind CSS",
    content:
      "Tailwind CSS enables rapid UI development with utility-first classes. Learn how to design responsive layouts with ease.",
    thumbnail:
      "https://tailwindcss.com/_next/static/media/social-card-large.6e4ddda3.jpg",
    isFeatured: true,
    tags: ["CSS", "Tailwind", "UI"],
    views: 5,
    authorId: 4,
    createdAt: "2025-09-22T03:34:52.742Z",
    updatedAt: "2025-09-22T12:21:36.671Z",
    author: {
      id: 4,
      name: "Asif 4",
      email: "asif4@gmail.com",
      password: "12345678",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-22T03:30:22.336Z",
      updatedAt: "2025-09-22T03:30:22.336Z",
    },
  },
  {
    id: 7,
    title: "Authentication in Node.js with JWT",
    content:
      "JSON Web Tokens (JWT) provide secure authentication for web apps. Learn how to implement login, signup, and protected routes.",
    thumbnail: "https://jwt.io/img/logo.svg",
    isFeatured: true,
    tags: ["Authentication", "JWT", "Security"],
    views: 2,
    authorId: 4,
    createdAt: "2025-09-22T03:34:23.131Z",
    updatedAt: "2025-09-22T12:06:51.115Z",
    author: {
      id: 4,
      name: "Asif 4",
      email: "asif4@gmail.com",
      password: "12345678",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-22T03:30:22.336Z",
      updatedAt: "2025-09-22T03:30:22.336Z",
    },
  },
  {
    id: 6,
    title: "Working with MongoDB and Mongoose",
    content:
      "MongoDB is a flexible NoSQL database. With Mongoose, you can enforce schemas and write cleaner queries in Node.js applications.",
    thumbnail:
      "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq0-MongoDB_Logo_FullColorBlack_RGB.png",
    isFeatured: false,
    tags: ["MongoDB", "Database", "Node.js"],
    views: 0,
    authorId: 3,
    createdAt: "2025-09-22T03:34:09.046Z",
    updatedAt: "2025-09-22T03:34:09.046Z",
    author: {
      id: 3,
      name: "Tanmoy Parvez",
      email: "tanmoy@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-22T03:29:55.016Z",
      updatedAt: "2025-09-22T03:29:55.016Z",
    },
  },
  {
    id: 5,
    title: "Deploying Apps with Vercel",
    content:
      "Vercel offers seamless deployment for Next.js and React apps. Learn how to deploy, configure domains, and optimize your projects.",
    thumbnail: "https://vercel.com/api/www/avatar/default.png",
    isFeatured: true,
    tags: ["Deployment", "Vercel", "Next.js"],
    views: 0,
    authorId: 3,
    createdAt: "2025-09-22T03:33:56.431Z",
    updatedAt: "2025-09-22T03:33:56.431Z",
    author: {
      id: 3,
      name: "Tanmoy Parvez",
      email: "tanmoy@gmail.com",
      password: "tanmoy1234",
      role: "USER",
      phone: "01234567890",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-22T03:29:55.016Z",
      updatedAt: "2025-09-22T03:29:55.016Z",
    },
  },
  {
    id: 4,
    title: "Understanding TypeScript Generics",
    content:
      "Generics make your TypeScript code reusable and type-safe. Explore how to implement generic functions, classes, and interfaces.",
    thumbnail:
      "https://www.typescriptlang.org/assets/images/branding/logo-256.png",
    isFeatured: false,
    tags: ["TypeScript", "JavaScript", "Generics"],
    views: 0,
    authorId: 2,
    createdAt: "2025-09-22T03:31:50.861Z",
    updatedAt: "2025-09-22T03:31:50.861Z",
    author: {
      id: 2,
      name: "Asif 2",
      email: "asif2@gmail.com",
      password: "12345678",
      role: "USER",
      phone: "01111111111",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-21T16:12:54.642Z",
      updatedAt: "2025-09-21T16:12:54.642Z",
    },
  },
  {
    id: 3,
    title: "Building REST APIs with Express.js",
    content:
      "Express.js is a minimal Node.js framework for creating powerful APIs. Learn routing, middleware, and best practices for scalable applications.",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:800/1*o5FmjKTPdJ3r7wF6E4n7Yw.png",
    isFeatured: false,
    tags: ["Node.js", "Express", "API"],
    views: 0,
    authorId: 2,
    createdAt: "2025-09-22T03:31:37.807Z",
    updatedAt: "2025-09-22T03:31:37.807Z",
    author: {
      id: 2,
      name: "Asif 2",
      email: "asif2@gmail.com",
      password: "12345678",
      role: "USER",
      phone: "01111111111",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-21T16:12:54.642Z",
      updatedAt: "2025-09-21T16:12:54.642Z",
    },
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    content:
      "Hooks simplify state and lifecycle management in React. Discover how useState, useEffect, and custom hooks can improve your code.",
    thumbnail: "https://reactjs.org/logo-og.png",
    isFeatured: true,
    tags: ["React", "Hooks", "JavaScript"],
    views: 0,
    authorId: 1,
    createdAt: "2025-09-22T03:31:20.143Z",
    updatedAt: "2025-09-22T03:31:20.143Z",
    author: {
      id: 1,
      name: "Asif 1",
      email: "asif1@gmail.com",
      password: "12345678",
      role: "USER",
      phone: "01111111111",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-21T16:12:32.398Z",
      updatedAt: "2025-09-21T16:12:32.398Z",
    },
  },
  {
    id: 1,
    title: "Getting Started with Next.js",
    content:
      "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    views: 1,
    authorId: 1,
    createdAt: "2025-09-22T03:30:57.727Z",
    updatedAt: "2025-09-22T10:09:38.503Z",
    author: {
      id: 1,
      name: "Asif 1",
      email: "asif1@gmail.com",
      password: "12345678",
      role: "USER",
      phone: "01111111111",
      picture: null,
      status: "ACTIVE",
      isVerified: false,
      createdAt: "2025-09-21T16:12:32.398Z",
      updatedAt: "2025-09-21T16:12:32.398Z",
    },
  },
];

export const GET = async () => {
  return Response.json(blogs);
};

export const POST = async (request: Request) => {
  const blog = await request.json();

  const newBlog = {
    ...blog,
    id: blogs.length + 1,
  };

  blogs.push(newBlog);

  return new NextResponse(JSON.stringify(newBlog), {
    status: 201,
    headers: {
      "Content-type": "application/json",
    },
  });
};
