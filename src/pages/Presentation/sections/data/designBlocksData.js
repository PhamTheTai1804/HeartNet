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

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Một số dự án đang được thực hiện",
    description: "Các dự án đang thực hiện sẽ được hiển thị ở đây",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Dự án 1",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Dự án 2",
        count: 14,
        route: "/sections/page-sections/features",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Dự án 3",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "Dự án 4",
        count: 1,
        pro: true,
      },
      {
        image: `${imagesPrefix}/blogs.jpg`,
        name: "Dự án 5",
        count: 11,
        pro: true,
      },
      {
        image: `${imagesPrefix}/testimonials.jpg`,
        name: "Dự án 6",
        count: 11,
        pro: true,
      },
      {
        image: `${imagesPrefix}/content-sections.jpg`,
        name: "Dự án 7",
        count: 8,
        pro: true,
      },
    ],
  },
];
