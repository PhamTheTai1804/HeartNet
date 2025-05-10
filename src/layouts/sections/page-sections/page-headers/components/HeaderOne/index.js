/*
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
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useState } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
// Images
import CaoBangImage from "assets/images/Cao Bằng.jpg";

function HeaderOne() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return (
    <MKBox component="header" position="relative" height="100%">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <MKTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
            >
              Ảnh chụp tại Cao Bằng
            </MKTypography>
            <MKButton
              variant="outlined"
              color="white"
              sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
            >
              <MKBox component="i" color="white" className="fas fa-bars" />
            </MKButton>
            <MKBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              my={0}
              mx="auto"
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Home
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  color="white"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </MKTypography>
              </MKBox>
            </MKBox>
            <MKBox
              component="ul"
              display={{ xs: "none", lg: "flex" }}
              p={0}
              m={0}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-twitter" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-facebook" />
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  component={Link}
                  href="#"
                  variant="button"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  <MKBox component="i" color="white" className="fab fa-instagram" />
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url("${CaoBangImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Góp Gạch Xây Trường
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              Mỗi khoản đóng góp bạn trao đi chung tay đóng góp cho cơ hội tới trường, chắp cánh cơ
              hội đổi đời cho các trẻ em vùng cao
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton color="white">Get Started</MKButton>
              <MKButton variant="text" color="white" onClick={toggleModal}>
                Read more
              </MKButton>
              <Modal
                open={show}
                onClose={toggleModal}
                sx={{ display: "grid", placeItems: "center" }}
              >
                <Slide direction="down" in={show} timeout={500}>
                  <MKBox
                    position="relative"
                    width="500px"
                    display="flex"
                    flexDirection="column"
                    borderRadius="xl"
                    bgColor="white"
                    shadow="xl"
                  >
                    <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                      <MKTypography variant="h5">Your modal title</MKTypography>
                      <CloseIcon
                        fontSize="medium"
                        sx={{ cursor: "pointer" }}
                        onClick={toggleModal}
                      />
                    </MKBox>
                    <Divider sx={{ my: 0 }} />
                    <MKBox p={2}>
                      <MKTypography variant="body1" color="secondary" fontWeight="regular">
                        Society has put up so many boundaries, so many limitations on what&apos;s
                        right and wrong that it&apos;s almost impossible to get a pure thought out.
                        <br />
                        <br />
                        It&apos;s like a little kid, a little boy, looking at colors, and no one
                        told him what colors are good, before somebody tells you you shouldn&apos;t
                        like pink because that&apos;s for girls, or you&apos;d instantly become a
                        gay two-year-old.
                      </MKTypography>
                      <MKTypography variant="body2" color="secondary" fontWeight="regular">
                        Society has put up so many boundaries, so many limitations on what&apos;s
                        right and wrong that it&apos;s almost impossible to get a pure thought out.
                        <br />
                        <br />
                        It&apos;s like a little kid, a little boy, looking at colors, and no one
                        told him what colors are good, before somebody tells you you shouldn&apos;t
                        like pink because that&apos;s for girls, or you&apos;d instantly become a
                        gay two-year-old.
                      </MKTypography>
                    </MKBox>
                    <Divider sx={{ my: 0 }} />
                    <MKBox display="flex" justifyContent="space-between" p={1.5}>
                      <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                        close
                      </MKButton>
                      <MKButton variant="gradient" color="info">
                        save changes
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </Slide>
              </Modal>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default HeaderOne;
