const { ethers } = require("hardhat");

async function main() {
  // Compile the contract
  const BLockDrive = await ethers.getContractFactory("BLockDrive");
  console.log("Compiling BLockDrive contract...");

  // Deploy the contract
  console.log("Deploying BLockDrive contract...");
  const bLockDrive = await BLockDrive.deploy();
  await bLockDrive.waitForDeployment();
  const contractAddress = await bLockDrive.getAddress();
  
  // Print the contract address
  console.log("BLockDrive contract deployed at:", contractAddress);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
