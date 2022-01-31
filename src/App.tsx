import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  max-width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const BiggerBox = styled.div`
//   width: 400px;
//   height: 400px;
//   background-color: rgba(255, 255, 255, 0.4);
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;

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

// const boxVariants = {
//   hover: {
//     scale: 1.2,
//     rotateZ: 90,
//   },
//   click: { scale: 1, borderRadius: "100px" },
//   drag: {
//     backgroundColor: "rgba(46,100,230, 0.2)",
//     transition: { duration: 0.5 },
//   },
// };

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
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(73, 132, 198), rgb(36, 39, 206))",

      "linear-gradient(135deg, rgb(108, 217, 83), rgb(177, 175, 60))",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
      {/* <BiggerBox ref={biggerBoxElement}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxElement}
          variants={boxVariants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        />
      </BiggerBox> */}
      {/* <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} /> */}
    </Wrapper>
  );
}

export default App;
