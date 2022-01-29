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
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
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
        whileHover={{ scale: 1.5, rotateZ: 90 }}
        whileTap={{ scale: 1, borderRadius: "100px" }}
      />
      {/* <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} /> */}
    </Wrapper>
  );
}

export default App;
