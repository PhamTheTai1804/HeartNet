/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import FileUpload from "layouts/sections/input-areas/forms/components/FileUpload";

function SupplierRegistrationForm() {
  const handleFileSelect = (file) => {
    console.log("Selected file:", file);
    // you can upload to IPFS or server here
  };
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Tên công ty" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Chữ ký điện tử" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Địa chỉ công khai" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FileUpload onFileSelect={handleFileSelect} />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                  Nộp yêu cầu
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SupplierRegistrationForm;
