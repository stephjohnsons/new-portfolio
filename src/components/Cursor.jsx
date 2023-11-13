import AnimatedCursor from "react-animated-cursor"

const Cursor = () => (
  <AnimatedCursor
    color="255, 255, 255"
    innerSize={10}
    outerSize={35}
    innerScale={1}
    outerScale={1.7}
    outerAlpha={5}
    outerStyle={{
      mixBlendMode: 'exclusion'
    }}
    trailingSpeed={5}
  />
);

export default Cursor;
