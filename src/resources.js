import React from "react";
import openAPI from "./openAPI.json";

export function Resources() {
  const resourceElements = Object.keys(openAPI.paths).map(function (
    item,
    index
  ) {
    return (
      <div>
        {" "}
        <h4> {item} </h4>{" "}
      </div>
    );
  });

  console.log(Object.keys(openAPI.paths));
  return (
    <div>
      <div>{resourceElements}</div>
    </div>
  );
}
