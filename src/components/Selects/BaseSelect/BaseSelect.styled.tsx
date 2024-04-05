import { ExpandMore } from "@mui/icons-material";
import { CircularProgress, styled } from "@mui/material";

import { colors } from "@/styles/common/colors";

export const StyledCircularProgress = styled(CircularProgress)(({}) => ({
  color: colors.grey100,
  marginRight: 2,
}));

export const StyledExpandMore = styled(ExpandMore)(({}) => ({
  color: colors.grey100,
}));
