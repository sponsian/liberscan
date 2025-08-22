import { ReactComponent as LiberlandIcon } from "../../../components/icons/liberland.svg";

const liberlandTestnetColor = {
  color: "#FFA500",
  colorSecondary: "rgba(255, 165, 0, 0.1)",
  buttonColor: "#FFA500",
};

const liberlandTestnet = {
  name: "Liberland Testnet",
  icon: <LiberlandIcon />,
  identity: "liberland-testnet",
  sub: "liberland-testnet",
  value: "liberland-testnet",
  chain: "liberland-testnet",
  symbol: "LLD",
  decimals: 12,
  ...liberlandTestnetColor,
  modules: {
    identity: true,
    multisig: true,
    vestings: true,
    proxy: true,
  },
  nodes: [
    { name: "Liberland Testnet", url: "wss://testchain.liberland.org" },
  ],
  useOnChainBlockData: true,
};

export default liberlandTestnet;