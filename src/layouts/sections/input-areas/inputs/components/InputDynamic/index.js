import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import PropTypes from "prop-types";
function InputDynamic({ inputRef }) {
  return (
    <MKBox component="section">
      <Container>
        <MKInput
          inputRef={inputRef}
          type="number"
          variant="standard"
          label="Số lượng ADA"
          fullWidth
        />
      </Container>
    </MKBox>
  );
}
InputDynamic.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
export default InputDynamic;
