import React from "react";
import "./style.css";

export default function ItemList(props) {
  const { items, selectItem } = props;
  const generateCardFromData = (item, index) => {
    const { title, like } = item;
    return (
      <div key={index} class="card-container">
        <h2>{title}</h2>
        <p>like : {like}</p>
        <button
          onClick={function () {
            selectItem(index);
          }}
        >
          see detail
        </button>
      </div>
    );
  };
  return <div className="container">{items.map(generateCardFromData)}</div>;
}
