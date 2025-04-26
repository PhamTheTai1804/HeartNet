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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Nền tảng quyên
                    <br />
                    góp từ thiện
                  </>
                }
                description="Hoạt động trên nền tảng Cardano."
              />
              <RotatingCardBack
                image={bgBack}
                title="Khám phá nhiều hơn"
                description="Để biết nhiều hơn về nền tảng Cardano cũng như chi tiết ứng dụng."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Truy cập trang thông tin",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Thao tác thuận tiện"
                  description="UX/UI thân thiện với mọi người."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Tự động hóa quy trình"
                  description="Sử dụng công nghệ nâng cao hiệu suất, tăng tính tự động hóa trong quá trình từ thiện."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Minh bạch trong giải ngân"
                  description="Sử dụng công nghệ BlockChain và nền tảng Cardano để hoàn toàn công khai, minh bạch trong quá trình giải ngân quỹ."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Xây dựng cộng đồng"
                  description="Kêu gọi, xây dựng cộng đồng lành mạnh và phát triển. Đưa mọi người tiếp cận gần hơn với đồng ADA và Cardano"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
