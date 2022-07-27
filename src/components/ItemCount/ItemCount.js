import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const addToCounter = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const substractFromCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemCountComponent">
      <div className="minusNumberPlus">
        <div className="buttonDiv">
          <button
            type="button"
            className="btn btn-dark itemButton"
            {...(count === 0 ? { disabled: "disabled" } : {})}
            onClick={substractFromCounter}
          >
            -
          </button>
        </div>
        <div className="itemCountNumber noSelect">{count}</div>

        <div className="buttonDiv">
          <button
            type="button"
            className="btn btn-dark itemButton"
            {...(count === stock ? { disabled: "disabled" } : {})}
            onClick={addToCounter}
          >
            +
          </button>
        </div>
      </div>
      <div className="buttonDivAdd">
        <button
          {...(count === 0 ? { disabled: "disabled" } : {})}
          className="btn btn-primary addButton"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
