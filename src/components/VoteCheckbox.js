import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

const VoteCheckbox = styled(Checkbox)(() => ({
  color: "#2152ff",
  "&.Mui-checked": {
    color: "#21d4fd",
  },
}));

export default VoteCheckbox;
