import { useRef, useState, useEffect } from "react";
import LayoutDonate from "layouts/sections/components/LayoutDonate";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import VoteCheckbox from "components/VoteCheckbox"; // replacement for MKCheckbox
import InputAddress from "layouts/sections/input-areas/inputs/components/InputAddress";
import InputNote from "layouts/sections/input-areas/inputs/components/InputNote";
import InputDynamic from "layouts/sections/input-areas/inputs/components/InputDynamic";
import MKProgress from "components/MKProgress"; // this one exists in Material Kit
import { initLucid } from "utils/lucid";

function Inputs() {
  const inputRef = useRef();
  const [hasDonated, setHasDonated] = useState(false);
  const [selectedVotes, setSelectedVotes] = useState([]);
  const [retailers, setRetailers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/retailers")
      .then((res) => res.json())
      .then((data) => setRetailers(data));
  }, []);

  const scriptAddress =
    "addr_test1qzysl84tx3u8wch87k2vmvl4crhcy09vqu4vzymdk4nupw6vq0355t50fxnr3efxesm5cf74vpk9ndeseqa3ekjl9vfqekxxpk";

  //let currentAda;
  const handleDonate = async () => {
    try {
      const ada = inputRef.current.value;
      if (!ada || isNaN(ada)) {
        alert("Vui lòng nhập số ADA hợp lệ!");
        return;
      }

      const lucid = await initLucid();
      const tx = await lucid
        .newTx()
        .payToAddress(scriptAddress, { lovelace: BigInt(ada) * 1_000_000n })
        .complete();

      const signedTx = await tx.sign().complete();
      const txHash = await signedTx.submit();

      //currentAda = ada;
      alert("Giao dịch đã được gửi! TxHash: " + txHash);
      setHasDonated(true);
    } catch (err) {
      console.error(err);
      alert("Đã xảy ra lỗi khi gửi giao dịch: " + err.message);
    }
  };

  const handleVote = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ votes: selectedVotes }), // Array of names
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert("Vote sent successfully!");
      } else {
        alert("Vote failed: " + data.error);
      }
      setHasDonated(false);
    } catch (err) {
      console.error("Error voting:", err);
      alert("Vote failed");
    }
  };
  const handleVoteChange = (index) => {
    setSelectedVotes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <LayoutDonate
      title="Enter donation information"
      breadcrumb={[
        { label: "Presentation", route: "/sections/input-areas/inputs" },
        { label: "Donation" },
      ]}
    >
      <InputDynamic inputRef={inputRef} />
      <InputAddress />
      <InputNote />

      {!hasDonated && (
        <MKBox display="flex" justifyContent="center" mt={2}>
          <MKButton variant="gradient" color="info" size="large" onClick={handleDonate}>
            Donate
          </MKButton>
        </MKBox>
      )}

      <MKBox mt={4}>
        <h4 style={{ marginBottom: "1rem" }}>🗳️ Vote for your favorite retailers:</h4>
        {retailers.map((retailer, index) => (
          <MKBox
            key={index}
            display="flex"
            alignItems="center"
            mb={2}
            p={2}
            border="1px solid #eee"
            borderRadius="lg"
            boxShadow="xs"
          >
            <img
              src={retailer.logo}
              alt={retailer.name}
              style={{ width: 40, height: 40, marginRight: 16, borderRadius: 8 }}
            />
            <MKBox flex={1}>
              <strong>{retailer.name}</strong>
              <MKProgress
                variant="gradient"
                color="info"
                value={Math.min(retailer.numberOfVotes / 50, 100)} // scale as needed
              />
              <small>{retailer.numberOfVotes} votes</small>
            </MKBox>
            {hasDonated && (
              <VoteCheckbox
                checked={selectedVotes.includes(index)}
                onChange={() => handleVoteChange(index)}
              />
            )}
          </MKBox>
        ))}
        {hasDonated && (
          <MKBox display="flex" justifyContent="center" mt={2}>
            <MKButton variant="gradient" color="info" size="large" onClick={handleVote}>
              Vote
            </MKButton>
          </MKBox>
        )}
      </MKBox>
    </LayoutDonate>
  );
}

export default Inputs;
