import React from "react";

const Info = (props) => {
  console.log(props);
  return (
    <>
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
    </>
  );
};

export default Info;