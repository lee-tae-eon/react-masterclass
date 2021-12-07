import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
  const [coins, setCoins] = useState<string>("");
  return (
    <div>
      test 중입니다.
      <Title>Coins</Title>
    </div>
  );
}

export default Coins;
