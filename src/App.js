import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
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

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 2s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
  }
`;

function App() {
  return (
    <Father>
      <Input />
      <Box>
        <span>✅</span>
      </Box>
    </Father>
  );
}

export default App;
