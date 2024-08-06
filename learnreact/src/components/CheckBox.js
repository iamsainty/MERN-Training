import React, { useState } from "react";

function CheckBox() {
  const [sport, setSport] = useState(null);
  const handleclick = (e) => {
    setSport(e.target.id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        fontSize: '20px'
      }}
    >
      <div className="games">
        <input type="radio" name="Cricket" id="Cricket" onClick={handleclick} />{" "}
        Cricket
        <input
          type="radio"
          name="Hockey"
          id="Hockey"
          onClick={handleclick}
        />{" "}
        Hockey
        <input
          type="radio"
          name="BasketBall"
          id="BasketBall"
          onClick={handleclick}
        />{" "}
        BasketBall
        <input
          type="radio"
          name="Kabaddi"
          id="Kabaddi"
          onClick={handleclick}
        />{" "}
        Kabaddi
      </div>
      <p>Player will play {sport}</p>
    </div>
  );
}

export default CheckBox;
