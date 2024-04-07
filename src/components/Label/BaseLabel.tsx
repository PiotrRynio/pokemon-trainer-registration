"use client";

import { ReactNode } from "react";

import { VerticalGapBox } from "@/components/Boxes/VerticalGapBox/VerticalGapBox";
import { Subtitle } from "@/components/Typographies/Subtitle/Subtitle";

type BaseLabelProps = {
  labelText: string;
  children?: ReactNode;
};

export const BaseLabel = ({ labelText, children }: BaseLabelProps) => {
  return (
    <VerticalGapBox gap="2px">
      <Subtitle>{labelText}</Subtitle>
      {children}
    </VerticalGapBox>
  );
};
