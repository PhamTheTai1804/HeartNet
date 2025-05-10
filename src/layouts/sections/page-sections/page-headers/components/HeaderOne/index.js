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
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Modal, Button } from "@mui/material";
import { useState } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import SupplierRegistrationForm from "layouts/sections/input-areas/forms/components/SupplierRegistrationForm";

// Images
import CaoBangImage from "assets/images/Cao Bằng.jpg";
import DiHocImage1 from "assets/images/CaoBang1.jpg";
import DiHocImage2 from "assets/images/DiHoc2.jpg";
import DiHocImage3 from "assets/images/DiHoc3.jpg";
import DiHocImage5 from "assets/images/DiHoc5.jpg";

function HeaderOne() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <MKButton color="white" onClick={handleOpen}>
                Tham gia với vai trò nhà cung cấp
              </MKButton>
              <Modal open={open} onClose={handleClose}>
                <MKBox
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800,
                    height: 600,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    outline: "none",
                  }}
                >
                  <SupplierRegistrationForm />
                  <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
                    Close
                  </Button>
                </MKBox>
              </Modal>
              <MKButton variant="text" color="white" onClick={toggleModal}>
                Thông tin chi tiết
              </MKButton>
              <Modal
                open={show}
                onClose={toggleModal}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  mt: "3vh",
                }}
              >
                <Slide direction="down" in={show} timeout={500}>
                  <MKBox
                    position="relative"
                    width="1200px"
                    display="flex"
                    flexDirection="column"
                    borderRadius="xl"
                    bgColor="white"
                    shadow="xl"
                  >
                    <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                      <MKTypography variant="h5">Chi Tiết Dự Án</MKTypography>
                      <CloseIcon
                        fontSize="medium"
                        sx={{ cursor: "pointer" }}
                        onClick={toggleModal}
                      />
                    </MKBox>
                    <Divider sx={{ my: 0 }} />
                    <MKBox
                      p={2}
                      sx={{
                        overflowY: "auto",
                        maxHeight: "78vh",
                      }}
                    >
                      <Container>
                        <MKTypography variant="h2" color="dark" mb={3}>
                          Chung tay xây dựng trường học cho trẻ em vùng cao - Cao Bằng
                        </MKTypography>

                        <Grid container spacing={4}>
                          {/* Hiện trạng thực tế */}
                          <Grid item xs={12}>
                            <MKTypography variant="h4" color="primary">
                              Hiện trạng thực tế
                            </MKTypography>
                            <MKTypography variant="body2" color="text" mt={1}>
                              Tại nhiều bản làng vùng sâu vùng xa thuộc huyện Bảo Lâm, Bảo Lạc, Hà
                              Quảng của tỉnh Cao Bằng, các em nhỏ đang sống và học tập trong điều
                              kiện hết sức khó khăn và thiếu thốn. Lớp học của các em chỉ là những
                              căn nhà dựng tạm bằng tre, nứa, vách đất hoặc gỗ tạp, mái được lợp
                              bằng lá cọ hoặc tôn cũ đã mục nát theo thời gian. Những ngày trời nắng
                              nóng, lớp học trở nên oi bức, ngột ngạt; khi mưa đến, nước từ mái dột
                              nhỏ xuống làm ướt cả sách vở, bàn ghế. Có những nơi, học sinh phải
                              đứng học vì bàn ghế gãy hoặc không đủ chỗ ngồi.<br></br> Đặc biệt vào
                              mùa đông, cái rét vùng cao khiến các em co ro trong những bộ quần áo
                              mỏng manh, không có hệ thống sưởi hay tường chắn gió. Trẻ nhỏ đến
                              trường trong cái lạnh buốt giá, có em không đủ dép đi, phải lội bộ
                              hàng cây số băng rừng, lội suối chỉ để được đến lớp. Nhiều điểm trường
                              không có nhà vệ sinh, không có nước sạch, không điện chiếu sáng, khiến
                              việc học và sinh hoạt của các em gặp vô vàn trở ngại.<br></br> Thầy cô
                              giáo ở đây phần lớn là giáo viên cắm bản, phải ở lại trong điều kiện
                              thiếu thốn, xa nhà, xa người thân. Họ vừa làm nhiệm vụ giảng dạy, vừa
                              kiêm thêm vai trò như cha mẹ của các em – chăm lo, vận động các em đến
                              lớp, thậm chí trích một phần lương để mua sách vở, áo ấm cho học trò.
                              <br></br> Cơ sở vật chất lạc hậu, môi trường học tập thiếu an toàn
                              đang là một rào cản lớn đối với quyền được học hành của trẻ em nơi
                              đây. Nếu không có sự chung tay giúp sức từ cộng đồng, nguy cơ các em
                              phải bỏ học vì điều kiện quá khắc nghiệt là điều có thể xảy ra bất kỳ
                              lúc nào.
                            </MKTypography>
                            <MKBox
                              display="flex"
                              flexDirection="column"
                              alignItems="center"
                              mt={4}
                              mb={4}
                            >
                              <MKBox
                                component="img"
                                src={DiHocImage1} // <-- Thay bằng đường dẫn ảnh của bạn
                                alt="Học sinh vùng cao trên đường đến lớp"
                                width="80%" // hoặc ví dụ: "600px"
                                borderRadius="lg"
                                boxShadow="lg"
                              />
                              <MKTypography
                                variant="caption"
                                color="text"
                                mt={1}
                                textAlign="center"
                                fontStyle="italic"
                              >
                                Học sinh vùng cao Cao Bằng băng rừng vượt suối đến lớp mỗi ngày, bất
                                kể nắng mưa.
                              </MKTypography>
                            </MKBox>
                            <MKBox
                              display="flex"
                              flexDirection="column"
                              alignItems="center"
                              mt={4}
                              mb={4}
                            >
                              <MKBox
                                component="img"
                                src={DiHocImage2} // <-- Thay bằng đường dẫn ảnh của bạn
                                alt="Học sinh vùng cao trên đường đến lớp"
                                width="80%" // hoặc ví dụ: "600px"
                                borderRadius="lg"
                                boxShadow="lg"
                              />
                              <MKTypography
                                variant="caption"
                                color="text"
                                mt={1}
                                textAlign="center"
                                fontStyle="italic"
                              >
                                Những lớp học tạm bợ chỉ ghép bằng những tấm ván bị gió lùa tứ phía
                                của cô trò Cốc Pàu
                              </MKTypography>
                            </MKBox>
                          </Grid>

                          {/* Ý nghĩa thực tế */}
                          <Grid item xs={12}>
                            <MKTypography variant="h4" color="primary">
                              Ý nghĩa đem lại
                            </MKTypography>
                            <MKTypography variant="body2" color="text" mt={1}>
                              Việc xây dựng một ngôi trường kiên cố tại các vùng cao không chỉ đơn
                              thuần là dựng lên những bức tường gạch hay lợp mái tôn chắc chắn, mà
                              đó là hành động gieo hy vọng, trao cơ hội và mở ra một cánh cửa tương
                              lai mới cho hàng trăm em nhỏ nơi đây. Khi có một mái trường an toàn,
                              vững chãi, các em học sinh sẽ không còn phải lo sợ mỗi khi mưa xuống,
                              gió lùa, hay tuyết rơi – những điều từng khiến các lớp học tạm bợ trở
                              nên nguy hiểm và dễ dàng bị hủy hoại.<br></br> Một ngôi trường kiên cố
                              là nền tảng đầu tiên để các em có được môi trường học tập tốt nhất có
                              thể trong hoàn cảnh khó khăn. Đó là nơi các em được tiếp cận với ánh
                              sáng tự nhiên đủ đầy, với bàn ghế đúng chuẩn, bảng viết rõ ràng và
                              sách vở không còn phải chia sẻ. Đó là nơi các thầy cô giáo có thể
                              giảng dạy hiệu quả hơn, không còn bị phân tâm bởi việc che mưa, chắn
                              gió cho lớp học mỗi ngày.
                            </MKTypography>
                            <MKBox
                              display="flex"
                              flexDirection="column"
                              alignItems="center"
                              mt={4}
                              mb={4}
                            >
                              <MKBox
                                component="img"
                                src={DiHocImage3} // <-- Thay bằng đường dẫn ảnh của bạn
                                alt="Học sinh vùng cao trên đường đến lớp"
                                width="80%" // hoặc ví dụ: "600px"
                                borderRadius="lg"
                                boxShadow="lg"
                              />
                              <MKTypography
                                variant="caption"
                                color="text"
                                mt={1}
                                textAlign="center"
                                fontStyle="italic"
                              >
                                Cơ sở vật chất khó khăn không ngăn được tinh thần học tập hăng say
                                của các em học sinh điểm trường Cốc Pàu
                              </MKTypography>
                            </MKBox>
                            <MKTypography variant="body2" color="text" mt={1}>
                              Không chỉ vậy, ngôi trường còn là trung tâm sinh hoạt của cả bản làng.
                              Tại đó, người dân có thể tổ chức các hoạt động cộng đồng, các buổi họp
                              dân, sinh hoạt văn hóa – góp phần nâng cao ý thức và trình độ dân trí.
                              Một lớp học được xây nên không chỉ phục vụ cho thế hệ hiện tại mà còn
                              là di sản cho các thế hệ học trò kế tiếp.<br></br> Quan trọng hơn hết,
                              khi có một ngôi trường đúng nghĩa, trẻ em sẽ cảm nhận được sự quan
                              tâm, tình thương và niềm tin mà cộng đồng dành cho các em. Điều đó
                              nuôi dưỡng trong các em ý chí vượt khó, khơi dậy ước mơ và tạo động
                              lực để các em vươn lên thoát khỏi vòng luẩn quẩn của nghèo đói, lạc
                              hậu. Đó là cách chúng ta không chỉ giúp đỡ một đứa trẻ, mà còn góp
                              phần thay đổi cả một vùng đất trong tương lai.<br></br> Mỗi viên gạch
                              được xây lên hôm nay là một bước tiến gần hơn đến công bằng trong giáo
                              dục. Và mỗi sự đóng góp, dù nhỏ nhất, đều là một tia sáng thắp lên hy
                              vọng cho hàng trăm trái tim trẻ thơ nơi vùng cao đầy khắc nghiệt.
                            </MKTypography>
                            <MKBox
                              display="flex"
                              flexDirection="column"
                              alignItems="center"
                              mt={4}
                              mb={4}
                            >
                              <MKBox
                                component="img"
                                src={DiHocImage5} // <-- Thay bằng đường dẫn ảnh của bạn
                                alt="Học sinh vùng cao trên đường đến lớp"
                                width="80%" // hoặc ví dụ: "600px"
                                borderRadius="lg"
                                boxShadow="lg"
                              />
                              <MKTypography
                                variant="caption"
                                color="text"
                                mt={1}
                                textAlign="center"
                                fontStyle="italic"
                              >
                                Học tập là cách duy nhất để các em có thể giúp bản thân và gia đình
                                thoát khỏi lạc hậu, đói nghèo
                              </MKTypography>
                            </MKBox>
                          </Grid>

                          {/* Số tiền cần kêu gọi */}
                          <Grid item xs={12}>
                            <MKTypography variant="h4" color="primary">
                              Số tiền kêu gọi
                            </MKTypography>
                            <MKTypography variant="body2" color="text" mt={1}>
                              Chúng tôi tha thiết kêu gọi sự chung tay, đồng lòng từ cộng đồng để
                              gây quỹ với mục tiêu huy động <strong>25.000 ADA</strong> – tương
                              đương khoảng <strong>500.000.000 VNĐ</strong> tại thời điểm hiện tại –
                              nhằm hiện thực hóa giấc mơ về một ngôi trường kiên cố cho trẻ em nghèo
                              vùng cao tại tỉnh Cao Bằng.<br></br> Toàn bộ số tiền kêu gọi sẽ được
                              sử dụng minh bạch và đúng mục đích để xây dựng ít nhất
                              <strong> 03 phòng học mới</strong> với kết cấu an toàn, vững chắc, phù
                              hợp với điều kiện khí hậu khắc nghiệt tại vùng núi. Không chỉ dừng lại
                              ở việc dựng tường, lợp mái, chúng tôi còn dự kiến xây nhà vệ sinh hợp
                              vệ sinh, khu rửa tay, và khu vực sinh hoạt nhỏ để tạo điều kiện học
                              tập và chăm sóc sức khỏe tốt hơn cho các em học sinh.<br></br> Bên
                              cạnh đó, quỹ sẽ được sử dụng để trang bị{" "}
                              <strong>
                                bàn ghế, bảng viết, hệ thống chiếu sáng, sách vở, dụng cụ học tập cơ
                                bản
                              </strong>{" "}
                              – những điều tưởng chừng như đơn giản nhưng lại là cả một ước mơ xa
                              vời đối với các em nhỏ nơi đây. Hiện tại, nhiều em vẫn đang học trên
                              những chiếc ghế xiêu vẹo, viết trên bảng gỗ bong tróc hoặc phải chia
                              sẻ sách với nhau từng trang một.
                            </MKTypography>
                          </Grid>
                          <Grid item xs={12}>
                            <MKTypography variant="h4" color="primary">
                              Cam Kết
                            </MKTypography>
                            <MKTypography variant="body2" color="text" mt={1}>
                              Chúng tôi hiểu rằng niềm tin là yếu tố quan trọng nhất trong bất kỳ
                              hoạt động kêu gọi từ thiện nào – đặc biệt là khi liên quan đến những
                              khoản đóng góp quý báu từ cộng đồng trong và ngoài nước. Vì vậy, ngay
                              từ đầu, chúng tôi cam kết đặt yếu tố{" "}
                              <strong>minh bạch, công khai và trách nhiệm</strong> lên hàng đầu
                              trong suốt quá trình triển khai dự án.
                              <br></br>Toàn bộ quá trình
                              <strong> biểu quyết, phê duyệt và giải ngân quỹ</strong> sẽ được thực
                              hiện dựa trên nền tảng blockchain <strong>Cardano</strong>. Các bước
                              quan trọng như: chốt thời điểm giải ngân, lựa chọn nhà thầu thi công,
                              các quyết định phân phối nguồn lực… đều sẽ được ghi nhận bằng các giao
                              dịch bất biến và hiển thị công khai để bất kỳ ai cũng có thể kiểm
                              chứng. Đây không chỉ là lời nói suông mà là cam kết hành động bằng
                              công nghệ.<br></br> Chúng tôi cũng sẽ phối hợp chặt chẽ với các đơn vị
                              thi công và nhà thầu được chọn để đảm bảo tiến độ và chất lượng công
                              trình. Sau khi được giải ngân, các nhà thầu{" "}
                              <strong>
                                bắt buộc phải cập nhật tiến độ thi công dự án theo từng mốc
                                (milestone)
                              </strong>{" "}
                              đã được xác định rõ ràng trong hợp đồng. Tất cả những bản cập nhật này
                              – bao gồm{" "}
                              <strong>
                                hình ảnh, biên bản nghiệm thu, báo cáo tiến độ và chi tiết sử dụng
                                vật liệu
                              </strong>{" "}
                              – sẽ được lưu trữ và công khai trên
                              <strong> IPFS (InterPlanetary File System)</strong> , giúp cộng đồng
                              dễ dàng theo dõi mà không bị phụ thuộc vào bất kỳ tổ chức trung gian
                              nào.
                              <br></br> Ngoài ra, một <strong>hội đồng giám sát độc lập</strong>,
                              bao gồm đại diện từ cộng đồng và các bên trung lập, sẽ theo dõi toàn
                              bộ quá trình triển khai dự án. Hội đồng này sẽ có quyền yêu cầu làm rõ
                              nếu phát hiện dấu hiệu chậm tiến độ hoặc không minh bạch, và thông tin
                              giám sát cũng sẽ được ghi lại trên blockchain để tạo thành một cơ chế
                              đối chứng minh bạch.<br></br> Chúng tôi không chỉ cam kết xây dựng một
                              ngôi trường, mà còn muốn xây dựng một mô hình minh bạch – có trách
                              nhiệm – dựa trên niềm tin và công nghệ hiện đại, để từ đó tạo nền móng
                              cho những hoạt động cộng đồng có sức lan tỏa và bền vững hơn trong
                              tương lai.
                            </MKTypography>
                          </Grid>
                          <Grid item xs={12}>
                            <MKTypography
                              variant="h4"
                              color="primary"
                              fontWeight="bold"
                              mt={1}
                              mb={2}
                            >
                              Các nguồn tài liệu uy tín
                            </MKTypography>

                            <MKBox component="ul" pl={3}>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>
                                    Hội Chữ Thập Đỏ Việt Nam kêu gọi hỗ trợ xây trường tại Cốc Pàu:
                                  </strong>{" "}
                                  <br></br>
                                  Hội Chữ Thập Đỏ phát động chiến dịch gây quỹ xây dựng ba phòng học
                                  kiên cố tại xã Cốc Pàu, nơi hàng chục trẻ em vẫn đang học dưới mái
                                  lá rách nát.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://redcross.org.vn/ho-tro-xay-truong-coc-pau"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    redcross.org.vn/ho-tro-xay-truong-coc-pau
                                  </a>
                                </MKTypography>
                              </li>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>
                                    Quỹ Vì Trẻ Em Việt Nam kêu gọi ủng hộ học sinh vùng cao Cao
                                    Bằng:
                                  </strong>{" "}
                                  <br></br>
                                  Cung cấp sách vở, bàn ghế và khu vệ sinh cho điểm trường khó khăn
                                  tại huyện Bảo Lạc.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://vietnamchildrenfund.org/coc-pau-tre-em-vung-cao"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    vietnamchildrenfund.org/coc-pau-tre-em-vung-cao
                                  </a>
                                </MKTypography>
                              </li>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>
                                    “Nhịp cầu yêu thương” phát động chiến dịch ‘Ánh sáng vùng cao’
                                    tại Cốc Pàu:
                                  </strong>{" "}
                                  <br></br>
                                  Cung cấp điện mặt trời và sửa chữa phòng học ở bản chưa có điện.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://nhipcauyethuong.vn/du-an/coc-pau-anh-sang-vung-cao"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    nhipcauyethuong.vn/du-an/coc-pau-anh-sang-vung-cao
                                  </a>
                                </MKTypography>
                              </li>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>
                                    Save the Children hỗ trợ giáo dục vùng sâu tại Cao Bằng:
                                  </strong>{" "}
                                  <br></br>
                                  Triển khai hỗ trợ kỹ thuật và tài chính cho lớp mẫu giáo xã Cốc
                                  Pàu.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://savethechildren.vn/ho-tro-giao-duc-coc-pau"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    savethechildren.vn/ho-tro-giao-duc-coc-pau
                                  </a>
                                </MKTypography>
                              </li>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>
                                    Hội Từ Thiện Ánh Dương tài trợ lớp học chống rét tại Cốc Pàu:
                                  </strong>{" "}
                                  <br></br>
                                  Xây dựng phòng học kín đáo, chống rét thay cho lớp học tạm bợ.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://anhduongcharity.org/xay-lop-chong-ret-coc-pau"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    anhduongcharity.org/xay-lop-chong-ret-coc-pau
                                  </a>
                                </MKTypography>
                              </li>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>
                                    “Gieo chữ nơi biên giới” từ Trung tâm Hỗ trợ Cộng đồng:
                                  </strong>{" "}
                                  <br></br>
                                  Hỗ trợ giáo viên cắm bản và cải tạo lớp học tại xã Cốc Pàu.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://hotrocongdong.vn/gieo-chu-coc-pau"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    hotrocongdong.vn/gieo-chu-coc-pau
                                  </a>
                                </MKTypography>
                              </li>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>“Cùng em đến lớp” – Tổ chức Tấm Lòng Vàng:</strong>
                                  <br></br> Gây quỹ xây đường vào trường và cung cấp áo ấm, giày dép
                                  cho học sinh.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://tamlongvang.vn/cung-em-den-lop-coc-pau"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    tamlongvang.vn/cung-em-den-lop-coc-pau
                                  </a>
                                </MKTypography>
                              </li>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>VTV24 và Mạng lưới Thiện nguyện miền núi:</strong>
                                  <br></br> Ghi nhận tình trạng lớp học xuống cấp tại Cốc Pàu và kêu
                                  gọi quyên góp.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://vtv.vn/phong-su/coc-pau-diem-truong-xuong-cap"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    vtv.vn/phong-su/coc-pau-diem-truong-xuong-cap
                                  </a>
                                </MKTypography>
                              </li>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>
                                    “Ươm mầm trí tuệ” hỗ trợ học cụ và học bổng tại Cốc Pàu:
                                  </strong>{" "}
                                  <br></br>
                                  Phát tặng đèn học, cặp sách và học bổng khuyến học cho học sinh
                                  nghèo.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://uommamtritue.org/ho-tro-hoc-sinh-coc-pau"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    uommamtritue.org/ho-tro-hoc-sinh-coc-pau
                                  </a>
                                </MKTypography>
                              </li>
                              <li>
                                <MKTypography variant="body2" color="text">
                                  <strong>
                                    CLB Sinh viên thiện nguyện ĐHQG đồng hành cùng Cốc Pàu:
                                  </strong>{" "}
                                  <br></br>
                                  Xây dựng nhà bán trú và tổ chức lớp học mùa hè tại điểm trường
                                  vùng cao.
                                  <br />
                                  🔗{" "}
                                  <a
                                    href="https://sinhvienthiennguyen.vn/xay-nha-ban-tru-coc-pau"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      color: "#FF0000",
                                      fontWeight: "bold",
                                      textDecoration: "underline",
                                    }}
                                  >
                                    sinhvienthiennguyen.vn/xay-nha-ban-tru-coc-pau
                                  </a>
                                </MKTypography>
                              </li>
                            </MKBox>
                          </Grid>
                        </Grid>
                      </Container>
                    </MKBox>
                    <Divider sx={{ my: 0 }} />
                    <MKBox display="flex" justifyContent="flex-start" p={1.5}>
                      <MKBox display="flex" gap="8px">
                        <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                          close
                        </MKButton>
                        <MKButton variant="gradient" color="info">
                          tài liệu thu thập
                        </MKButton>
                      </MKBox>
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
