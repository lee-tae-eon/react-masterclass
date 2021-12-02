import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: tomato;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 50% {
    transform: rotate(360deg);
    border-radius: 100px;
  } 100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 2s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>hello</Title>
      {/* <Father>
        <Input />
        <Box>
          <Emoji as="p">✅</Emoji>
        </Box>
      </Father> */}
    </Wrapper>
  );
}

export default App;
