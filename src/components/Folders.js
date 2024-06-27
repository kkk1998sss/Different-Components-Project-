import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Folders({ explorer }) {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div className="m-8 text-white bg-slate-100">
        <span
          onClick={() => setExpand(!expand)}
          className="flex items-center bg-lime-600 rounded p-2 cursor-pointer"
        >
          <IoIosArrowForward
            className={`transition-transform ${expand ? "rotate-90" : ""}`}
          />
          <span className="ml-2">{explorer.name}</span>
          <br />
        </span>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "1rem" }}
        >
          {explorer.items.map((exp) => {
            return <Folders key={exp.name} explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="m-8">
        <span className="bg-lime-600 rounded p-2 cursor-pointer">
          {explorer.name} <br />
        </span>
      </div>
    );
  }
}
