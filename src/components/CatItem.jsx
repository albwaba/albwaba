import React from "react";

export default function CatItem({
  children,
  handeleChangeFilter,
  handeleGetFilterPosts,
  name,
  value,
  filters,
}) {
  return (
    <div className="relative flex items-start  ml-2">
      <input
        id={value}
        type="checkbox"
        defaultChecked={filters[name].includes(value)}
        className="hidden peer"
        name={name}
        value={value}
        onChange={handeleChangeFilter}
      ></input>
      <label
        htmlFor={value}
        // onClick={() => handeleGetFilterPosts(filters)}
        className="inline-flex items-center justify-between w-auto p-2 font-medium tracking-tight border rounded-lg cursor-pointer  text-text border-border peer-checked:bg-secondary   peer-checked:font-semibold peer-checked:decoration-brand-dark"
      >
        <div className="flex items-center justify-center w-full">
          <div className="text-sm text-brand-black whitespace-nowrap">
            {children}
          </div>
        </div>
      </label>
    </div>
  );
}
