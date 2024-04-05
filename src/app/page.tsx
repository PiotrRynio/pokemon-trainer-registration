"use client";

// import styled from "@emotion/styled";
// import { Button as MaterialButton, Container } from "@mui/material";
// import { styled } from "@mui/system";
// import Image from "next/image";
import { styled } from "@mui/material";
import localFont from "next/font/local";

import { BaseButton } from "@/components/Buttons/BaseButton";
import { BaseChip } from "@/components/Chips/BaseChip";
import { BaseTextInput } from "@/components/Inputs/TextInput/BaseTextInput";
import imbVga from "@/fonts/Web437_IBM_VGA_9x16.woff";

// Font files can be colocated inside of `app`

const StyledWrapper = styled("main")`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <StyledWrapper>
      <BaseTextInput labelName="Trainer's name" />
      <BaseButton>Click me</BaseButton>

      <BaseChip>Some Test</BaseChip>
      <BaseTextInput labelName="Trainer's name" />

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
    </StyledWrapper>
  );
}
