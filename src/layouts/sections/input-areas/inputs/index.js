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

// Sections components
import View from "layouts/sections/components/View";
import MKBox from "components/MKBox";
import LayoutDonate from "layouts/sections/components/LayoutDonate";
// Inputs page components
import InputDynamic from "layouts/sections/input-areas/inputs/components/InputDynamic";
import InputAddress from "layouts/sections/input-areas/inputs/components/InputAddress";
import InputNote from "layouts/sections/input-areas/inputs/components/InputNote";
import MKButton from "components/MKButton";

function Inputs() {
  return (
    <LayoutDonate
      title="Enter donation information"
      breadcrumb={[
        { label: "Presentation", route: "/sections/input-areas/inputs" },
        { label: "Donation" },
      ]}
    >
      <View title="">
        <InputDynamic />
      </View>
      <View title="">
        <InputAddress />
      </View>
      <View title="">
        <InputNote />
      </View>
      <MKBox display="flex" justifyContent="center" mt={2}>
        <MKButton variant="gradient" color="info" size="large" component="a" href="" sx={{ mb: 2 }}>
          Donate Now
        </MKButton>
      </MKBox>
    </LayoutDonate>
  );
}

export default Inputs;
