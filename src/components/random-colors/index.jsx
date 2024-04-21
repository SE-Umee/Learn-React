import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColor = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleGenerateRandomHexColor = () => {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }

    setColor(hexColor);
  };
  const handleGenerateRandomRgbColor = () => {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleGenerateRandomRgbColor();
    } else {
      handleGenerateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        background: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? () => handleGenerateRandomHexColor()
            : () => handleGenerateRandomRgbColor()
        }
      >
        generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "50px",
          marginTop: "40px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? " RGB Color  " : "HEX Color  "}</h3>
        <h1> {color}</h1>
      </div>
    </div>
  );
}
