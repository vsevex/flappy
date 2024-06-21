import PropTypes from "prop-types";

const Pipe = ({ topHeight, bottomHeight, left }) => {
  const pipeWidth = 60;

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: `${left}px`,
          width: `${pipeWidth}px`,
          height: `${topHeight}px`,
          backgroundColor: "green",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: `${left}px`,
          width: `${pipeWidth}px`,
          height: `${bottomHeight}px`,
          backgroundColor: "green",
        }}
      ></div>
    </>
  );
};

Pipe.propTypes = {
  topHeight: PropTypes.number.isRequired,
  bottomHeight: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
};

export default Pipe;
