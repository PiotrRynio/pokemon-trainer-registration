import { ExpandMore } from "@mui/icons-material";
import { CircularProgress, styled } from "@mui/material";

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.base.colors.grey100,
  marginRight: 2,
}));

export const StyledExpandMore = styled(ExpandMore)(({ theme }) => ({
  color: theme.base.colors.grey100,
}));
