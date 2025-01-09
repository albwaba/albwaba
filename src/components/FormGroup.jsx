import { useState } from "react";

export default function FormGroup({ errors }) {
  const [realEstate, setRealEstate] = useState("");

  const realEstateName =
    realEstate == "apartment" ? "شقة" : realEstate == "house" ? "منزل" : " ارض";
  const onchange = (e) => {
    setRealEstate(e.target.value);
  };
  return (
    <>
      <div className="md:col-span-5">
        <h3 className="text-text font-medium text-base md:text-lg tracking-wide">
          حدد نوع العقار اللذي تود إعلانه
        </h3>
        <ul className="grid w-full gap-6 grid-cols-3 mt-1">
          <li>
            <input
              type="radio"
              id="apartment"
              name="realEstate"
              className=" text-text hidden peer"
              value="apartment"
              onChange={onchange}
            />
            <label
              htmlFor="apartment"
              className="text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
            >
              شقة
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="house"
              name="realEstate"
              value="house"
              className=" text-text hidden peer"
              onChange={onchange}
            />
            <label
              htmlFor="house"
              className="text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-[#aaa] rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
            >
              منزل
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="land"
              name="realEstate"
              className=" text-text hidden peer"
              value="land"
              onChange={onchange}
            />
            <label
              htmlFor="land"
              className="text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-[#aaa] rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
            >
              قطعة ارض
            </label>
          </li>
        </ul>
        {errors?.realEstate && (
          <p className="text-red-400">{errors.realEstate.message}</p>
        )}{" "}
      </div>
      {realEstate && (
        <>
          <div className="md:col-span-5">
            <h3 className="text-text font-medium text-base md:text-lg tracking-wide">
              حدد الفئة المناسبة للإعلانك
            </h3>
            <ul className="grid w-full gap-6 grid-cols-2 md:grid-cols-4  mt-1">
              <li>
                <input
                  type="radio"
                  id="rent"
                  name="realEstateFor"
                  value="rent"
                  className="hidden peer"
                />
                <label
                  htmlFor="rent"
                  className="text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border-border border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                >
                  {realEstateName} للإيجار
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="sale"
                  name="realEstateFor"
                  value="sale"
                  className="hidden peer"
                />
                <label
                  htmlFor="sale"
                  className="text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border-border border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                >
                  {realEstateName} للبيع
                </label>
              </li>
            </ul>
          </div>
          <div className="md:col-span-5">
            <label
              className="text-text font-medium text-base md:text-lg"
              htmlFor="realStateArea"
            >
              {realEstate === "land" ? "مساحة الارض" : "مساحة البناء"} (م²)
            </label>
            <input
              type="number"
              name="realStateArea"
              id="realStateArea"
              className="h-10 text-text border mt-1 rounded px-4 w-full bg-background border-border outline-0 focus-within:border-accent"
            />
            {errors?.realStateArea && (
              <p className="text-red-400">{errors.realStateArea.message}</p>
            )}{" "}
          </div>
          {realEstate !== "land" && (
            <>
              <div className="md:col-span-5">
                <h3 className="text-text font-medium text-base md:text-lg tracking-wide">
                  الواجهة
                </h3>
                <ul className="grid w-full gap-6 grid-cols-2 md:grid-cols-4  mt-1">
                  <li>
                    <input
                      type="radio"
                      id="southern"
                      name="facade"
                      value="southern"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="southern"
                      className="text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      جنوبية
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="western"
                      name="facade"
                      value="western"
                      className="hidden peer"
                    />
                    <label
                      htmlFor=" "
                      className="text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      غربية
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="northern"
                      name="facade"
                      value="northern"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="northern"
                      className="text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      شمالية
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="eastern"
                      name="facade"
                      value="eastern"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="eastern"
                      className="text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      شرقية
                    </label>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-text font-medium text-base md:text-lg tracking-wide">
                  عدد الغرف
                </h3>
                <ul className="grid w-full gap-6 grid-cols-4 md:grid-cols-6 mt-1">
                  <li>
                    <input
                      type="radio"
                      id="one"
                      name="numOfRooms"
                      value={1}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="one"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      1
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="two"
                      name="numOfRooms"
                      value={2}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="two"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      2
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="three"
                      name="numOfRooms"
                      value={3}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="three"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      3
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="four"
                      name="numOfRooms"
                      value={4}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="four"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      4
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="five"
                      name="numOfRooms"
                      value={5}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="five"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      5
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="six"
                      name="numOfRooms"
                      value={6}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="six"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5 text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      6
                    </label>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-text font-medium text-base md:text-lg tracking-wide">
                  عدد الحمامات
                </h3>
                <ul className="grid w-full gap-6 grid-cols-4 md:grid-cols-6 mt-1">
                  <li>
                    <input
                      type="radio"
                      id="oneBathroom"
                      name="numOfBathrooms"
                      value={1}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="oneBathroom"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      1
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="twoBathrooms"
                      name="numOfBathrooms"
                      value={2}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="twoBathrooms"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      2
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="threeBathrooms"
                      name="numOfBathrooms"
                      value={3}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="threeBathrooms"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      3
                    </label>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-text font-medium text-base md:text-lg tracking-wide">
                  الحالة
                </h3>
                <ul className="grid w-full gap-6 grid-cols-2 mt-1">
                  <li>
                    <input
                      type="radio"
                      id="furnished"
                      name="furnished"
                      value="furnished"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="furnished"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      مفروشة
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="unFurnished"
                      name="furnished"
                      value="unFurnished"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="unFurnished"
                      className="text-center text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                    >
                      غير مفروشة
                    </label>
                  </li>
                </ul>
              </div>
            </>
          )}
        </>
      )}{" "}
    </>
  );
}
