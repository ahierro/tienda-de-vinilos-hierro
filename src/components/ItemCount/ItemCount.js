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
      <div>
        <button
          type="button"
          class="btn btn-dark itemButton"
          {... (count === 0)? {disabled:'disabled'}:{}}
          onClick={substractFromCounter}
        >
          -
        </button>
      </div>
      <div className="itemCountNumber">{count}</div>
      
      <div>
        <button
          type="button"
          class="btn btn-dark itemButton"
          {... (count === stock)? {disabled:'disabled'}:{}}
          onClick={addToCounter}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
