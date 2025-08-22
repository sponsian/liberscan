import { ReactComponent as LiberlandIcon } from "../../../components/icons/liberland.svg";

const liberlandColor = {
  color: "#FFD700",
  colorSecondary: "rgba(255, 215, 0, 0.1)",
  buttonColor: "#FFD700",
};

const liberland = {
  name: "Liberland",
  icon: <LiberlandIcon />,
  identity: "liberland",
  sub: "liberland",
  value: "liberland",
  chain: "liberland",
  symbol: "LLD",
  decimals: 12,
  ...liberlandColor,
  modules: {
    identity: true,
    multisig: true,
    vestings: true,
    proxy: true,
  },
  nodes: [
    { name: "Liberland Mainnet", url: "wss://mainnet.liberland.org" },
  ],
  useOnChainBlockData: true,
};

export default liberland;