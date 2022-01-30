import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// const Circle = styled(motion.div)`
//   background-color: white;
//   height: 70px;
//   width: 70px;
//   place-self: center;
//   border-radius: 50%;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

const boxVariants = {
  hover: {
    scale: 1.2,
    rotateZ: 90,
  },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "rgba(46,100,230, 0.2)",
    transition: { duration: 0.5 },
  },
};

// const circleVariants = {
//   start: {
//     opacity: 0,
//     y: 10,
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//   },
// };

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileHover="hover"
        whileDrag="drag"
        whileTap="click"
      />
      {/* <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} /> */}
    </Wrapper>
  );
}

export default App;
