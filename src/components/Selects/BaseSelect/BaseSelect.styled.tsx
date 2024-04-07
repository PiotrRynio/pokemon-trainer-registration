import { ExpandMore } from "@mui/icons-material";
import { CircularProgress, styled } from "@mui/material";

import { colors } from "@/styles/common/colors";

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: colors.grey100,
  marginRight: 2,
  width: theme.palette.disabledBackground.main,
}));

export const StyledExpandMore = styled(ExpandMore)(({}) => ({
  color: colors.grey100,
}));
