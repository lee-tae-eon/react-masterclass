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
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
