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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Cộng đồng với</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ người đã tham gia đóng góp
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Hàng triệu người đã tham gia chia sẻ giúp đỡ các đối tượng yếu thế trong xã hội.Hướng
            tới xây dựng một cộng đồng vị tha, phát triển và bền vững.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nguyễn Thị Tâm"
              date="1 day ago"
              review="Ứng dụng thiện nguyện này thực sự rất hữu ích, giúp kết nối cộng đồng, tạo ra những thay đổi tích cực. Mình rất vui khi được đóng góp và hỗ trợ những người cần giúp đỡ."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Trần Quyết Tiến"
              date="1 week ago"
              review="Mình rất ấn tượng với cách ứng dụng này vận hành. Giao diện đơn giản, dễ sử dụng, và đặc biệt là mục tiêu giúp đỡ cộng đồng thật đáng trân trọng. Đây là một công cụ tuyệt vời."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Phạm Chiến Thắng"
              date="3 weeks ago"
              review="Ứng dụng này không chỉ giúp kết nối những tấm lòng nhân ái mà còn giúp mọi người có thể đóng góp một cách dễ dàng và nhanh chóng. Đây là một sáng kiến tuyệt vời để hỗ trợ xã hội."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
