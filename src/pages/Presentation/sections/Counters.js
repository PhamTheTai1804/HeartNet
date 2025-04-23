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

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={70}
              suffix="+"
              title="Dự Án Được Thực Hiện"
              description="Xây trường ở vùng cao, hỗ trợ vùng bão lũ, xây nhà cho người nghèo và rất nhiều các dự án ý nghĩa đã được cộng đồng thực hiện thông qua ứng dụng !"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={882353}
              suffix="+"
              title="ADA Đã Được Quyên Góp"
              description="Nguồn vốn khổng lồ được quyên góp và sử dụng một cách công khai, minh bạch, hiệu quả bằng cách sử dụng các công nghệ của nền tảng Cardano"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={1000000}
              suffix="+"
              title="Người"
              description="Tất cả mọi người không phân biệt tôn giáo, tầng lớp, dân tộc đã và đang được giúp đỡ. Số lượng người thụ hưởng đang tiếp tục tăng theo từng ngày"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
