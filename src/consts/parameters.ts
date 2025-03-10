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
  chainId: 131402, // Monad Testnet chain ID
  rpc: ["https://rpc.testnet.monad.xyz/"],
  nativeCurrency: {
    name: "Monad",
    symbol: "MONAD",
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
      url: "https://explorer.testnet.monad.xyz/",
    },
  ],
};

// It is IMPORTANT to provide your own API key to use the thirdweb SDK and infrastructure.
// Please ensure that you define the correct domain for your API key from the API settings page.
// You can get one for free at https://thirdweb.com/create-api-key
// Learn more here: https://blog.thirdweb.com/changelog/api-keys-to-access-thirdweb-infra
export const clientIdConst = import.meta.env.VITE_TEMPLATE_CLIENT_ID || "";

// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "blue";

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
