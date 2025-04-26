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
import CaoBanglImage from "assets/images/Cao Bằng.jpg";
import DenTruonglImage from "assets/images/DenTruong.png";
import NguoiGialImage from "assets/images/NguoiGia.jpg";
import XayCaulImage from "assets/images/XayCau.png";
import HoTrolImage from "assets/images/HoTro.jpg";
import BuaAnlImage from "assets/images/BuaAn.jpg";

export default [
  {
    title: "Một số dự án đang được thực hiện",
    description: "Mỗi dự án đều được lên kế hoạch với các mức kêu gọi khác nhau !",
    items: [
      {
        image: CaoBanglImage,
        name: "Chương trình xây trường tại Cao Bằng",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: DenTruonglImage,
        name: "Chương trình cùng em tới trường",
        count: 14,
        route: "/sections/page-sections/features",
      },
      {
        image: XayCaulImage,
        name: "Chương trình xây cầu tại An Giang",
        count: 8,
      },
      {
        image: BuaAnlImage,
        name: "Chương trình cải thiện bữa ăn cho các em học sinh miền núi tỉnh Lào Cai",
        count: 6,
      },
      {
        image: HoTrolImage,
        name: "Chương trình hỗ trợ bệnh nhân hiểm nghèo TP.HCM",
        count: 11,
      },
      {
        image: NguoiGialImage,
        name: "Chương trình hỗ trợ người già neo đơn tại Hà Nội",
        count: 11,
      },
    ],
  },
];
