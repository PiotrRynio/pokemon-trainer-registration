import { Box } from "@mui/material";

import { TrainerRegistrationForm } from "@/app/_components/TrainerRegistrationForm/TrainerRegistrationForm";
import { getCurrentTimeFromApi } from "@/app/_utils/getCurrentTimeFromApi/getCurrentTimeFromApi";

const Home = async () => {
  const currentTimeFromIp = await getCurrentTimeFromApi();

  return (
    <Box minWidth={544} width={544} padding="32px" margin="auto">
      <TrainerRegistrationForm currentTime={currentTimeFromIp} />
    </Box>
  );
};

export default Home;
