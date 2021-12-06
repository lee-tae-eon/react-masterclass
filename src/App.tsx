import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
}

const Dummy = ({ text }: DummyProps) => {
  return <H1>{text}</H1>;
};

function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("hello");
  };
  return (
    <div>
      <Container>
        <Dummy text="hello" />
        <form>
          <button type="button" onClick={onClick}>
            click me
          </button>
        </form>
      </Container>
    </div>
  );
}

export default App;
