import { useCallback, useState } from "react";
import "../../index.css";
import GoToHome from "../../Components/GoToHome";

const SelectableGrid = ({ rows = 10, cols = 10 }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const handleMouseDown = boxNumber => {
    setIsMouseDown(true);
    setSelectedBoxes([boxNumber]);
  };

  const handleMouseEnter = useCallback(
    boxNumber => {
      if (isMouseDown) {
        const startBox = selectedBoxes[0];
        const endBox = boxNumber;

        const startRow = Math.floor((startBox - 1) / cols);
        const startCol = (startBox - 1) % cols;
        const endRow = Math.floor((endBox - 1) / cols);
        const endCol = (endBox - 1) % cols;

        const minRow = Math.min(startRow, endRow);
        const maxRow = Math.max(startRow, endRow);
        const minCol = Math.min(startCol, endCol);
        const maxCol = Math.max(startCol, endCol);

        const selected = [];
        for (let row = minRow; row <= maxRow; row++) {
          for (let col = minCol; col <= maxCol; col++) {
            selected.push(row * cols + col + 1);
          }
        }

        setSelectedBoxes(selected);
      }
    },
    [isMouseDown]
  );

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div>
      <p className="text-center mt-10 text-gray-500">02. Selectable grid</p>
      <div
        className="grid grid-cols-[repeat(var(--cols,10),35px)] grid-rows-[repeat(var(--rows,10),35px)] gap-2 select-none mx-[35rem] my-4"
        style={{ "--rows": rows, "--cols": cols }}
       
      >
        {[...Array(rows * cols).keys()].map(i =>
          <div
            key={i}
            className={`box w-[35px] h-[35px] border border-black flex justify-center items-center ${selectedBoxes.includes(
              i + 1
            )
              ? "bg-lightblue"
              : "bg-gray-100"}`}
              onMouseUp={handleMouseUp}
            onMouseDown={() => handleMouseDown(i + 1)}
            onMouseEnter={() => handleMouseEnter(i + 1)}
          >
            {i + 1}
          </div>
        )}
        <GoToHome />
      </div>
    </div>
  );
};

export default SelectableGrid;
