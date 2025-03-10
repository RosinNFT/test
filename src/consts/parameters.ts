/** Change these values to configure the application for your own use. **/

// Your smart contract address (available on the thirdweb dashboard)
// For existing collections: import your existing contracts on the dashboard: https://thirdweb.com/dashboard
export const contractConst = "0x0f2F2Da004aCC38F05858F9dBc0320db64C1b6C9";

// The name of the chain your contract is deployed to.
// Refer to README.md on how to specify the chain name.
// You can import some standard chains if needed
import { Mumbai, Polygon, Sepolia, Base } from '@thirdweb-dev/chains';

// You can console.log them to see their properties in development
console.log("Available chains:", { Mumbai, Polygon, Sepolia, Base });

// Define Monad Testnet as a custom chain
export const chainConst = {
    chainId: 10143, // Monad Testnet chain ID
    rpc: ["https://testnet-rpc.monad.xyz/"],
  nativeCurrency: {
      name: "Monad Testnet",
    symbol: "MON",
    decimals: 18,
  },
  shortName: "monad-testnet",
  chain: "Monad",
  name: "Monad Testnet",
  slug: "monad-testnet",
  testnet: true,
  explorers: [
    {
      name: "Monad Explorer",
          url: "https://testnet.monadexplorer.com/",
    },
  ],
};

// Instead of using environment variables
export const clientIdConst = "bfe31aa9bb0330a2a8eac344eb119164";

// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "#8B0000"; // Dark blood red color

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
