"use server";

import Link from "next/link";

import { DynamicTime } from "@/app/blog/dynamic-time";

const Blog = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("---------- BLOG ----------");

  return (
    <div>
      <div>Tresc Bloga - {String(new Date())}</div>
      <DynamicTime />
      <div>Tresc Bloga - {String(new Date())}</div>
      <Link href="/blog-static"> Blog Static</Link>
      <Link href="/"> Home</Link>
    </div>
  );
};

export default Blog;
