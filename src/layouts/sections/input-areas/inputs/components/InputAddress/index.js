import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputAddress() {
  return (
    <MKBox component="section">
      <Container>
        <MKInput variant="standard" label="Recipient's Address" fullWidth />
      </Container>
    </MKBox>
  );
}
export default InputAddress;
