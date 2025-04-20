
const walletList = [
  "0xB89ed000D348227D2Bab3D3088114bD71405173e",
  "0x030B1f0CFB2A3cbD2eC0Ffc7A4BD20C806883C64",
  "bc1qxe2xpku8yjae46u5epyq79hcdfnpt0v8h24kgq"
];

function rotateWallet() {
  const index = Math.floor(Math.random() * walletList.length);
  return walletList[index];
}

module.exports = rotateWallet;
