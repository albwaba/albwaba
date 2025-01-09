import React from "react";

export default function PostDetails({ realEstate }) {
  const { numOfBathrooms, facade, numOfRooms, area, furnished } = realEstate;
  return (
    <div className=" col-span-1 pt-3 text-text ">
      <h1 className="font-bold text-xl md:text-2xl mb-2">المعلومات</h1>
      <ul className="p-2  border border-border rounded-md ">
        {numOfBathrooms && (
          <li className="flex justify-between p-2 odd:bg-accentHover odd:text-[#120a07]">
            <p>عدد الحمامات </p>
            <p className="font-bold">{numOfBathrooms} حمامات</p>
          </li>
        )}
        {facade && (
          <li className="flex justify-between p-2 odd:bg-accentHover odd:text-[#120a07]">
            <p>الواجهة </p>
            <p className="font-bold">{facade}</p>
          </li>
        )}
        {numOfRooms && (
          <li className="flex justify-between p-2 odd:bg-accentHover odd:text-[#120a07]">
            <p>عدد الغرف </p>
            <p className="font-bold">{numOfRooms}</p>
          </li>
        )}
        {area && (
          <li className="flex justify-between p-2 odd:bg-accentHover odd:text-[#120a07]">
            <p>المساحة </p>
            <p className="font-bold">{area} متر مربع</p>
          </li>
        )}
        {furnished && (
          <li className="flex justify-between p-2 odd:bg-accentHover odd:text-[#120a07]">
            <p>مفروشة؟</p>
            <p className="font-bold">
              {furnished === "furnished" ? "مفروشة" : "غير مفروشة"}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
