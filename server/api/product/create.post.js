import { readFiles } from "h3-formidable";
import fs from "fs";
import FormData from "form-data";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const query = getQuery(event);

  const { fields, files } = await readFiles(event, {
    includeFields: true,
  });

  try {


    let formData = new FormData();
    formData.append("name", fields.name[0]);
    formData.append("brand_id", fields.brand_id[0]);
    formData.append("category_id", fields.category_id[0]);
    formData.append("car_id", fields.car_id[0]);
    formData.append("carpart_id", fields.carpart_id[0]);
    formData.append("company_id", fields.company_id[0]);
    formData.append("tag_id", fields.tag_id[0]);
    formData.append(
      "primary_image",
      fs.createReadStream(files.primary_image[0].filepath)
    );
    formData.append("price", fields.price[0]);
    formData.append("quantity", fields.quantity[0]);
    formData.append("delivery_amount", fields.delivery_amount[0]);
    formData.append("description", fields.description[0]);
    for (let index = 0; index < files.images.length; index++) {
      formData.append(
        "images[]",
        fs.createReadStream(files.images[index].filepath)
      );
    }
    console.log("formData" , typeof(formData))
    const data = await $fetch(`${apiBase}/api/products`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
    }
    });

    return data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    console.log("dddd" ,error )
    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.response?.statusText || "Internal Server Error",
    });
  }
});