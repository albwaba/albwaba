import { useState } from "react";

import SelectMenu from "../components/SelectMenu";
import { Form, useNavigate } from "react-router-dom";

export default function Search() {
  const [realEstate, setRealEstate] = useState("");
  const navigate = useNavigate();
  const handeleChange = (e) => {
    setRealEstate(e.target.value);
  };
  const handeleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = Object.fromEntries(formData);
    navigate({
      pathname: "/search_result",
      search: `?${new URLSearchParams(query).toString()}`,
    });
  };
  return (
    <Form onSubmit={handeleSubmit}>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SelectMenu
          onchange={handeleChange}
          name="realEstate"
          label="نوع العقار"
          defultValue="house"
        >
          <option value="land">قطعة ارض</option>
          <option value="house">منزل</option>
          <option value="apartment">شقة</option>
        </SelectMenu>
        <SelectMenu name="realEstateFor" label="عقار لـ" defultValue="sale">
          <option value="rent">للإيجار</option>
          <option value="sale">للبيع</option>
        </SelectMenu>
        <SelectMenu
          name="realEstateType"
          label="مخصصة لـ"
          defultValue="residential"
        >
          <option value="residential">سكنية</option>
          <option value="commercial">تجارية</option>
        </SelectMenu>
        <SelectMenu name="realStateArea" label="المساحة" defultValue="100">
          <option value="100">اكثر من 100 م²</option>
          <option value="200">اكثر من 200 م²</option>
          <option value="300">اكثر من 300 م²</option>
          <option value="400">اكثر من 400 م²</option>
        </SelectMenu>
        <SelectMenu
          onchange={(e) => console.log(e.target.value)}
          name="priceFrom"
          label="السعر من"
          defultValue="50000"
        >
          <option value="10000">10,000 د.ل</option>
          <option value="50000">50,000 د.ل</option>
          <option value="100000">100,000 د.ل</option>
          <option value="150000">150,000 د.ل</option>
          <option value="200000">200,000 د.ل</option>
          <option value="250000">250,000 د.ل</option>
          <option value="300000">300,000 د.ل</option>
          <option value="400000">400,000 د.ل</option>
        </SelectMenu>
        <SelectMenu
          onchange={(e) => console.log(e.target.value)}
          name="priceTo"
          label="الى"
          defultValue="250000"
        >
          <option value="10000">10,000 د.ل</option>
          <option value="50000">50,000 د.ل</option>
          <option value="100000">100,000 د.ل</option>
          <option value="150000">150,000 د.ل</option>
          <option value="200000">200,000 د.ل</option>
          <option value="250000">250,000 د.ل</option>
          <option value="300000">300,000 د.ل</option>
          <option value="400000">400,000 د.ل</option>
        </SelectMenu>

        {realEstate === "land" ? (
          <></>
        ) : (
          <>
            <SelectMenu
              name="furnished"
              label="مفروشة؟"
              defultValue="furnished"
            >
              <option value="furnished">نعم</option>
              <option value="unFurnished">لا</option>
            </SelectMenu>
            <SelectMenu name="numOfRooms" label="عدد الغرف" defultValue={3}>
              <option value={1}>اكثر من 1</option>
              <option value={2}>اكثر من 2</option>
              <option value={3}>اكثر من 3</option>
              <option value={4}>اكثر من 4</option>
              <option value={5}>اكثر من 5</option>
              <option value={6}>اكثر من 6</option>
            </SelectMenu>
            <SelectMenu
              name="numOfBathrooms"
              label="عدد الحمامات"
              defultValue={1}
            >
              <option value={1}>اكثر من 1</option>
              <option value={2}>اكثر من 2</option>
              <option value={3}>اكثر من 3</option>
              <option value={4}>اكثر من 4</option>
            </SelectMenu>
            <SelectMenu name="facade" label="الواجهة" defultValue="northern">
              <option value="southern">جنوبية</option>
              <option value="western">غربية</option>
              <option value="northern">شمالية</option>
              <option value="eastern">شرقية</option>
            </SelectMenu>
          </>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary hover:bg-secondary text-white text-lg font-bold py-2 px-4 rounded mt-2 text-center w-full tracking-wide "
      >
        عرض النتائج
      </button>
    </Form>
  );
}
