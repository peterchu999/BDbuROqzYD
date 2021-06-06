import React from "react";

export default function ItemDetail(props) {
  const { item } = props;
  return (
    <div className="container-rest">
      <h1>{item ? item.title : "title will be place here"}</h1>
      <h3>likes : {item ? item.like : "placeholder"}</h3>
      <p>{item ? item.detail : "detail"}</p>
    </div>
  );
}
