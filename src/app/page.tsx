import { Box, Typography } from "@mui/material";

import { PokemonSearcher } from "@/app/_components/PokemonSearcher/PokemonSearcher";
import { VisitDate } from "@/app/_components/ServerDate/VisitDate";
import { StyledWrapper } from "@/app/_components/StyledWrapper/StyledWrapper";
import { getCurrentTimeFromApi } from "@/app/_utils/getCurrentTimeFromApi/getCurrentTimeFromApi";
import { BaseButton } from "@/components/Buttons/BaseButton";
import { BaseChip } from "@/components/Chips/BaseChip";
import { BaseTextInput } from "@/components/Inputs/TextInput/BaseTextInput/BaseTextInput";
import { LabeledTextInput } from "@/components/Inputs/TextInput/LabeledTextInput/LabeledTextInput";
import { BodyText } from "@/components/Typographies/BodyText/BodyText";
import { Subtitle } from "@/components/Typographies/Subtitle/Subtitle";

const Home = async () => {
  const currentTimeFromIp = await getCurrentTimeFromApi();

  return (
    <Box>
      {/*<StyledWrapper>*/}
      <div></div>

      <BodyText>BodyText Body Text</BodyText>
      <Subtitle>My Subtitle</Subtitle>
      <VisitDate time={currentTimeFromIp} />
      <LabeledTextInput
        labelName="Trainer's name"
        placeholder="Placeholder..."
        helperText="Helper Text"
      />
      <BaseButton>Click me</BaseButton>
      <BaseButton color="secondary">Click me</BaseButton>

      <BaseChip>Some Test</BaseChip>
      {/*<BaseTextInput labelName="Trainer's name" />*/}
      <LabeledTextInput labelName="Trainer's name" />
      <BaseTextInput placeholder="Trainer's name" />

      <PokemonSearcher />

      <BaseButton>Click me</BaseButton>

      {/*<Container maxWidth="lg">*/}
      {/*</Container>*/}
      {/*  <div className={styles.description}>*/}
      {/*    <p>*/}
      {/*      Get started by editing&nbsp;*/}
      {/*      <code className={styles.code}>src/app/page.tsx</code>*/}
      {/*    </p>*/}
      {/*    <div>*/}
      {/*      <a*/}
      {/*        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*        target="_blank"*/}
      {/*        rel="noopener noreferrer"*/}
      {/*      >*/}
      {/*        By{" "}*/}
      {/*        <Image*/}
      {/*          src="/vercel.svg"*/}
      {/*          alt="Vercel Logo"*/}
      {/*          className={styles.vercelLogo}*/}
      {/*          width={100}*/}
      {/*          height={24}*/}
      {/*          priority*/}
      {/*        />*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={styles.center}>*/}
      {/*    <Image*/}
      {/*      className={styles.logo}*/}
      {/*      src="/next.svg"*/}
      {/*      alt="Next.js Logo"*/}
      {/*      width={180}*/}
      {/*      height={37}*/}
      {/*      priority*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className={styles.grid}>*/}
      {/*    <a*/}
      {/*      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*      className={styles.card}*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <h2>*/}
      {/*        Docs <span>-&gt;</span>*/}
      {/*      </h2>*/}
      {/*      <p>Find in-depth information about Next.js features and API.</p>*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*      className={styles.card}*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <h2>*/}
      {/*        Learn <span>-&gt;</span>*/}
      {/*      </h2>*/}
      {/*      <p>*/}
      {/*        Learn about Next.js in an interactive course with&nbsp;quizzes!*/}
      {/*      </p>*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*      className={styles.card}*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <h2>*/}
      {/*        Templates <span>-&gt;</span>*/}
      {/*      </h2>*/}
      {/*      <p>Explore starter templates for Next.js.</p>*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*      className={styles.card}*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <h2>*/}
      {/*        Deploy <span>-&gt;</span>*/}
      {/*      </h2>*/}
      {/*      <p>*/}
      {/*        Instantly deploy your Next.js site to a shareable URL with Vercel.*/}
      {/*      </p>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</StyledWrapper>*/}
      {/*</StyledWrapper>*/}
    </Box>
  );
};

export default Home;
