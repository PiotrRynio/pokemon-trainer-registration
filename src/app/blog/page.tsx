"use server";

const Blog = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("---------- BLOG ----------");

  return <div>Tresc Bloga</div>;
};

export default Blog;
