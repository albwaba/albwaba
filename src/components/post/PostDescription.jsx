import React from "react";

export default function PostDescription({ description }) {
  return (
    <div className=" col-span-1 pt-3 text-text md:row-start-2 md:col-start-2">
      <h1 className="font-bold text-xl md:text-2xl mb-2">الوصف</h1>
      <div className=" space-y-1">
        {description.split("\n").map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </div>
  );
}
