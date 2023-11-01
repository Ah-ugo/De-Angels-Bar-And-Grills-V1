import React from "react";

export default function StepsUi({ title, content, isActive }) {
  return (
    <div className="">
      <div className="">
        <a
          rel="noopener noreferrer"
          href="#"
          className={`px-5 py-1 border-b-2 ${
            isActive ? "border-violet-400 text-violet-400" : ""
          }`}>
          {title}
        </a>
      </div>
      <div>{isActive ? <div>{content}</div> : null}</div>
    </div>
  );
}
