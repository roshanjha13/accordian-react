//single selection

import { useState } from "react";
import data from "./data";
import "./style.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  function handleSingleSelection(getCurrentid) {
    setSelected(getCurrentid === selected ? null : getCurrentid);
  }

  function handleMultiSelection(getCurrentid) {
    let cpyMutiple = [...multiSelect];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentid);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentid);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);
    setMultiSelect(cpyMutiple);
  }

  console.log(selected, multiSelect);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable MultiSelection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiSelect.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data Found!</div>
        )}
      </div>
    </div>
  );
}
