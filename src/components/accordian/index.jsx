import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelection = (id) => {
    if (id === selected) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  const handleMultipleSelection = (id) => {
    let copyMultipleSelected = [...multipleSelected];
    const findIndexOfCurrentId = copyMultipleSelected.indexOf(id);
    if (findIndexOfCurrentId === -1) {
      copyMultipleSelected.push(id);
    } else {
      copyMultipleSelected.splice(findIndexOfCurrentId, 1);
    }
    setMultipleSelected(copyMultipleSelected);

    console.log(copyMultipleSelected, multipleSelected);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        {enableMultipleSelection ? (
          <div> Disable Multiple Selection</div>
        ) : (
          <div> Enable Multiple Selection</div>
        )}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3> {item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ||
              multipleSelected.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
