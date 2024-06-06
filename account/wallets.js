const ethers = require("ethers");

async function main() {
  const arrayNames = [
    "## L1 Deployment Address",
    "##L1 Trusted sequencer",
    "##L1 Trusted aggregator",
    "##L1 Trusted committer",
    "##L2 Trusted indexer",
    "##L2 Trusted validator",
    "##L2 Trusted fund",
    "##L2 Trusted market",
    "##L2 Trusted team",
    "##L2 Trusted investor",
  ];
  for (let i = 0; i < arrayNames.length; i++) {
    const wallet = ethers.Wallet.createRandom();
    console.log(arrayNames[i]);
    console.log(`Address: ${wallet.address}`);
    console.log(`PrvKey: ${wallet.privateKey}`);
    console.log(`mnemonic: "${wallet.mnemonic.phrase}"`);

    const keystoreJson = await wallet.encrypt("password");
    console.log(`keystore: ${keystoreJson}`);
    console.log("\n\n");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

