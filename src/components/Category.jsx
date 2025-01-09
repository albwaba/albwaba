import React from "react";
import CatItem from "./CatItem";
import { usePosts } from "../contexts/PostsContext";

export default function Category() {
  const { filters, handeleGetFilterPosts, handeleChangeFilter } = usePosts();

  return (
    // <div className="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
    //   {/* <div className="w-full max-w-sm px-10 py-8 mx-auto bg-white rounded-lg shadow-xl"> */}
    <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:w-1  [&::-webkit-scrollbar]:h-1  [&::-webkit-scrollbar-track]:bg-transparent  [&::-webkit-scrollbar-thumb]:bg-secondary py-2 mb-2">
      <CatItem
        handeleChangeFilter={handeleChangeFilter}
        name={"furnished"}
        value={"furnished"}
        filters={filters}
        handeleGetFilterPosts={handeleGetFilterPosts}
      >
        مفروشة
      </CatItem>
      <CatItem
        handeleChangeFilter={handeleChangeFilter}
        name={"furnished"}
        value={"unfurnished"}
        filters={filters}
        handeleGetFilterPosts={handeleGetFilterPosts}
      >
        غير مفروشة
      </CatItem>
      <CatItem
        handeleChangeFilter={handeleChangeFilter}
        name={"facade"}
        value={"eastern"}
        filters={filters}
        handeleGetFilterPosts={handeleGetFilterPosts}
      >
        واجهة شرقيه
      </CatItem>
      <CatItem
        handeleChangeFilter={handeleChangeFilter}
        name={"facade"}
        filters={filters}
        value={"northern"}
        handeleGetFilterPosts={handeleGetFilterPosts}
      >
        واجهة شمالة
      </CatItem>
      <CatItem
        handeleChangeFilter={handeleChangeFilter}
        name={"facade"}
        value={"southern"}
        filters={filters}
        handeleGetFilterPosts={handeleGetFilterPosts}
      >
        واجهة جنوبية
      </CatItem>
      <CatItem
        handeleChangeFilter={handeleChangeFilter}
        name={"facade"}
        value={"western"}
        filters={filters}
        handeleGetFilterPosts={handeleGetFilterPosts}
      >
        واجهة غربية
      </CatItem>
      <CatItem
        handeleChangeFilter={handeleChangeFilter}
        name={"realEstateType"}
        value={"residential"}
        filters={filters}
        handeleGetFilterPosts={handeleGetFilterPosts}
      >
        سكني
      </CatItem>
      <CatItem
        handeleChangeFilter={handeleChangeFilter}
        name={"realEstateType"}
        value={"commercial"}
        filters={filters}
      >
        تجاري
      </CatItem>
    </div>
    //   </div>
    // </div>
  );
}
