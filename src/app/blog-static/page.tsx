"use server";

import Link from "next/link";

const BlogStatic = async () => {
  console.log("---------- BlogStatic ----------");

  return (
    <div>
      <div>Tresc BlogStatic - {String(new Date())}</div>
      <Link href="/blog"> Blog</Link>
      <Link href="/"> Home</Link>
    </div>
  );
};

export default BlogStatic;
