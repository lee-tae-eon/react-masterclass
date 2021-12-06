import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 5px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState<number>(0);

  const plus = () => {
    setCounter((prev) => prev + 1);
  };

  const minus = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      <div>{counter}</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </Container>
  );
}

export default Circle;
