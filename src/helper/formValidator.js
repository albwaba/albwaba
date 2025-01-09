export function postFormValidator({
  realEstate,
  price,
  phoneNumber,
  // images,
  postName,
  description,
  city,
  realStateArea,
}) {
  const errors = {};

  if (postName === "") {
    errors.postName = { id: "postName", message: "هذا الحقل مطلوب" };
  }
  if (realEstate == undefined || null) {
    errors.realEstate = { id: "apartment", message: "هذا الحقل مطلوب" };
  }
  if (realStateArea === "") {
    errors.realStateArea = { id: "realStateArea", message: "هذا الحقل مطلوب" };
  }
  if (description === "") {
    errors.description = { id: "description", message: "هذا الحقل مطلوب" };
  }
  // if (JSON.parse(images).length === 0) {
  //   errors.imgae = { id: "imgae", message: "يرجى رفع صوره واحدة على الاقل" };
  // }
  if (city === "") {
    errors.city = { id: "city", message: "هذا الحقل مطلوب" };
  }
  if (phoneNumber === "") {
    errors.phoneNumber = { id: "phoneNumber", message: "هذا الحقل مطلوب" };
  }
  if (price === "") {
    errors.price = { id: "price", message: "هذا الحقل مطلوب" };
  }
  return errors;
}
