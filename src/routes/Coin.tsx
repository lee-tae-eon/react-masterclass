import { useParams } from "react-router";

interface ParamsProps {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<ParamsProps>();
  return <div>Coin: {coinId}</div>;
}

export default Coin;
