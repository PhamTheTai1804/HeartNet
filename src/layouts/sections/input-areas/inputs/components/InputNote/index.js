import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputNote() {
  return (
    <MKBox component="section">
      <Container>
        <MKInput variant="standard" label="Add a Note" fullWidth />
      </Container>
    </MKBox>
  );
}

export default InputNote;
