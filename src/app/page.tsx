"use server";
import { Box } from "@mui/material";
import { Suspense } from "react";

import { TrainerRegistrationForm } from "@/app/_components/TrainerRegistrationForm/TrainerRegistrationForm";
import { getCurrentTimeFromApi } from "@/app/_utils/getCurrentTimeFromApi/getCurrentTimeFromApi";
import Blog from "@/app/blog/page";
import BlogStatic from "@/app/blog-static/page";

const Home = async () => {
  const currentTimeFromIp = await getCurrentTimeFromApi();

  console.log("SERVER currentTimeFromIp", currentTimeFromIp);

  await new Promise((resolve) => setTimeout(resolve, 1536));

  const currentTimeFromIp2 = await getCurrentTimeFromApi();

  console.log("SERVER currentTimeFromIp2", currentTimeFromIp2);

  return (
    <Box minWidth={544} width={544} padding="32px" margin="auto">
      <TrainerRegistrationForm currentTime={currentTimeFromIp} />
      <Suspense fallback={<div>Loading...</div>}>
        <Blog />
      </Suspense>
      <BlogStatic />
    </Box>
  );
};

export default Home;
