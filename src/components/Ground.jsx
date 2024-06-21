import tile from "../../public/assets/ground.png";

const Ground = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "60px",
        backgroundImage: `url(${tile})`,
        backgroundRepeat: "repeat",
        borderTop: "1px solid #8B4513",
      }}
    ></div>
  );
};

export default Ground;
