import { useRef } from "react";
import View from "layouts/sections/components/View";
import LayoutDonate from "layouts/sections/components/LayoutDonate";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

import InputAddress from "layouts/sections/input-areas/inputs/components/InputAddress";
import InputNote from "layouts/sections/input-areas/inputs/components/InputNote";
import InputDynamic from "layouts/sections/input-areas/inputs/components/InputDynamic";
import { initLucid } from "utils/lucid";

const scriptAddress =
  "addr_test1qzysl84tx3u8wch87k2vmvl4crhcy09vqu4vzymdk4nupw6vq0355t50fxnr3efxesm5cf74vpk9ndeseqa3ekjl9vfqekxxpk"; // ← Thay bằng địa chỉ thật

function Inputs() {
  const inputRef = useRef();

  const handleDonate = async () => {
    try {
      const ada = inputRef.current.value;
      if (!ada || isNaN(ada)) {
        alert("Vui lòng nhập số ADA hợp lệ!");
        return;
      }

      const lucid = await initLucid();
      const address = await lucid.wallet.address();
      console.log("📌 Địa chỉ ví Lace đang dùng:", address);
      const tx = await lucid
        .newTx()
        .payToAddress(scriptAddress, { lovelace: BigInt(ada) * 1_000_000n }) // chuyển sang lovelace
        .complete();

      const signedTx = await tx.sign().complete();
      const txHash = await signedTx.submit();

      alert("Giao dịch đã được gửi! TxHash: " + txHash);
    } catch (err) {
      console.error(err);
      alert("Đã xảy ra lỗi khi gửi giao dịch: " + err.message);
    }
  };

  return (
    <LayoutDonate
      title="Enter donation information"
      breadcrumb={[
        { label: "Presentation", route: "/sections/input-areas/inputs" },
        { label: "Donation" },
      ]}
    >
      <View title="">
        <InputDynamic inputRef={inputRef} />
      </View>

      <View title="">
        <InputAddress />
      </View>
      <View title="">
        <InputNote />
      </View>

      <MKBox display="flex" justifyContent="center" mt={2}>
        <MKButton
          variant="gradient"
          color="info"
          size="large"
          onClick={handleDonate}
          sx={{ mb: 2 }}
        >
          Donate Now
        </MKButton>
      </MKBox>
    </LayoutDonate>
  );
}

export default Inputs;
