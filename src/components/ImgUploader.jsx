import React, { useState } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { RiCloseCircleFill } from "react-icons/ri";

export default function ImgUploader() {
  const [images, setImages] = useState([]);
  const base64s = images.map((el) => el.base64);

  const handleDeleteSelectedImg = (id) => {
    setImages((imgs) => imgs.filter((img) => img.id !== id));
  };

  const handleChange = async (e) => {
    const files = [...e.target.files];
    const base64s = [];
    for (const file in files) {
      const base64 = await convert2base64(files[file]);
      base64s.push({ base64, id: new Date() });
    }
    setImages(base64s);
  };

  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = () => {
        reject(reader.result);
      };
    });
  };

  return (
    <>
      <div className="md:col-start-1 md:col-end-3 relative border-2 border-gray-300 border-dashed rounded-lg p-6">
        <input
          type="file"
          name="files"
          multiple
          id="imgae"
          accept=".jpg, .jpeg, .png"
          className="bg-background text-text absolute inset-0 w-full h-full opacity-0 z-[1]"
          onChange={handleChange}
        />
        <div className="text-center">
          <HiOutlinePhoto className="mx-auto h-12 w-11 text-text" />
          <h3 className="mt-2 text-sm font-medium text-text">
            <label htmlFor="file-upload" className="relative cursor-pointer">
              <span>Drag and drop</span>
              <span className="text-text"> or browse</span>
              <span>to upload</span>
            </label>
          </h3>
          <p className="mt-1 text-xs text-text">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
      {images.length > 0 && (
        <div
          className={
            "md:col-start-3 md:col-end-6 grid gap-5 grid-cols-4 max-md:grid-cols-2 relative border-2 border-gray-300  rounded-lg p-6"
          }
        >
          {images.map((img, index) => (
            <div key={index} className=" relative">
              <img
                key={index}
                className=" object-cover h-full"
                src={img.base64}
                alt=""
              />
              <RiCloseCircleFill
                onClick={() => handleDeleteSelectedImg(img.id)}
                className=" absolute top-0 right-0 text-red-500 cursor-pointer text-xl"
              />
            </div>
          ))}
        </div>
      )}
      <input
        type="hidden"
        value={JSON.stringify(images)}
        multiple
        name="images"
      />
    </>
  );
}
