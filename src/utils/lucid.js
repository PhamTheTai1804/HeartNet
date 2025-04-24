import { Lucid, Blockfrost } from "lucid-cardano";

let lucid;

export async function initLucid() {
  if (!window.cardano || !window.cardano.lace) {
    throw new Error("Lace wallet not found. Please install and enable it.");
  }

  const api = await window.cardano.lace.enable();

  // 🔑 Thay YOUR_BLOCKFROST_API_KEY bằng API key bạn lấy ở https://blockfrost.io
  const provider = new Blockfrost(
    "https://cardano-preprod.blockfrost.io/api/v0",
    "preprod0LutHtObexCYaqjNCb7HOiF9tPg0ql97"
  );

  lucid = await Lucid.new(provider, "Preprod");
  lucid.selectWallet(api);
  return lucid;
}

export function getLucid() {
  if (!lucid) throw new Error("Lucid has not been initialized.");
  return lucid;
}
