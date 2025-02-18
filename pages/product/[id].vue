<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">مدیریت محصولات</p>
        </div>
      </div>
      <div
        class="flex items-center justify-end align-center ml-4"
        style="width: 178px"
      >
        <div>
          <p class="ml-2">۱۷ اردیبهشت ۱۴۰۳</p>
        </div>
        <img src="/public/opration/Calender.svg" alt="" class="pic" />
      </div>
    </div>

    <div>
      <div class="flex flex-row mt-6">
        <div class="p-6 bg-white rounded-lg shadow-md rtl" style="width: 100%">
          <div class="container mx-auto p-6">
            <h1 class="text-2xl font-bold mb-6">فرم ویرایش محصول</h1>
            <div class="my-8">
              <h1>توضیحات محصول</h1>

              <client-only>
                <tiptap-editor v-model="content" />
              </client-only>
            </div>
            <client-only>
              <form
                class="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4"
                @submit.prevent="updateproduct()"
              >
                <!-- Product Name -->
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >نام محصول</label
                  >
                  <InputText
                    v-model="productName"
                    placeholder="نام محصول را وارد کنید"
                    class="w-full"
                  />
                </div>

                <!-- Price -->
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >قیمت محصول</label
                  >
                  <InputText
                    v-model="productPrice"
                    type="number"
                    placeholder="قیمت را وارد کنید"
                    class="w-full"
                  />
                </div>
                <!-- Price -->
                <div>
                  <label class="block text-sm font-semibold mb-1">
                    قیمت تخفیف دار</label
                  >
                  <InputText
                    v-model="priceoff"
                    type="number"
                    placeholder="قیمت را وارد کنید"
                    class="w-full"
                  />
                </div>

                <!-- Product Code -->
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >کد محصول</label
                  >
                  <InputText
                    v-model="productCode"
                    placeholder="کد محصول را وارد کنید"
                    class="w-full"
                  />
                </div>

                <!-- Price with Tax -->
                <div>
                  <label class="block text-sm font-semibold mb-1">
                    طول به سانتی متر
                  </label>
                  <InputText
                    v-model="productlength"
                    type="number"
                    placeholder="123"
                    class="w-full"
                  />
                </div>

                <!-- Height -->
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >عرض به سانتی متر</label
                  >
                  <InputText
                    v-model="productwidth"
                    type="number"
                    placeholder="125"
                    class="w-full"
                  />
                </div>

              <!-- Price with Tax -->
              <div>
                  <label class="block text-sm font-semibold mb-1">
                    ارتفاع به سانتی متر
                  </label>
                  <InputText
                    v-model="product_Height"
                    type="number"
                    placeholder="123"
                    class="w-full"
                  />
                </div>

                <!-- Height -->
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >   وزن به گرم</label
                  >
                  <InputText
                    v-model="product_Weight"
                    type="number"
                    placeholder="125"
                    class="w-full"
                  />
                </div>

                <!-- Secondary Color -->
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >رنگ اولیه</label
                  >
                  <InputText
                    v-model="productfirstcolor"
                    placeholder="رنگ اولیه را وارد کنید"
                    class="w-full"
                  />
                </div>
                <!-- Secondary Color -->
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >رنگ ثانویه</label
                  >
                  <InputText
                    v-model="productsecondcolor"
                    placeholder="رنگ ثانویه را وارد کنید"
                    class="w-full"
                  />
                </div>

                <!-- Secondary Color -->
                <div class="col-span-2">
                  <label class="block text-sm font-semibold mb-1"
                    >کشور سازنده
                  </label>
                  <InputText
                    v-model="productcountry"
                    placeholder=" کشور سازنده را وارد کنید"
                    style="width: 50%"
                  />
                </div>

                <!-- Vehicle Type -->
                <div>
                  <label class="block text-sm font-semibold mb-1">
                    دسته بندی محصول</label
                  >
                  <Dropdown
                    v-model="categoryModel"
                    :options="category"
                    :placeholder="categoryholder"
                    optionLabel="name"
                    class="w-full"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >نوع خودرو</label
                  >
                  <Dropdown
                    v-model="carModel"
                    :options="cars"
                    :placeholder="carholder"
                    optionLabel="name"
                    class="w-full"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >بخش خودرو
                  </label>
                  <Dropdown
                    v-model="carpartModel"
                    :options="carpart"
                    :placeholder="carpartholder"
                    optionLabel="name"
                    class="w-full"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold mb-1">
                    شرکت سازنده
                  </label>
                  <Dropdown
                    v-model="companyModel"
                    :options="company"
                    :placeholder="companyholder"
                    optionLabel="name"
                    class="w-full"
                  />
                </div>

                <!-- Brand -->
                <div>
                  <label class="block text-sm font-semibold mb-1">برند</label>

                  <Dropdown
                    v-model="brandModel"
                    :options="brands"
                    :placeholder="brandholder"
                    class="w-full"
                    optionLabel="name"
                  />
                </div>

                <!-- Section Type -->
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >نوع ضمانت</label
                  >
                  <Dropdown
                    v-model="productgarantyholder"
                    :options="productgaranty"
                    :placeholder="productgarantyholder"
                    optionLabel="label"
                    class="w-full"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >بر چسب های محصول
                  </label>

                  <Dropdown
                    v-model="tagidModel"
                    :options="tags"
                    :placeholder="tagholder"
                    optionLabel="name"
                    class="w-full"
                  />
                </div>

                <!-- Submission Method -->
                <div>
                  <label class="block text-sm font-semibold mb-1"
                    >روش ارسال</label
                  >
                  <Dropdown
                    v-model="productsendwaymodel"
                    :options="productsendway"
                    :placeholder="productsendwayholder"
                    optionLabel="label"
                    class="w-full"
                  />
                </div>

                <!-- Submission Method -->

                <div class="flex md:col-span-2">
                  <div class="flex items-center gap-2">
                    <label class="block text-sm font-semibold mb-1 ml-4"
                      >وضعیت موجودی
                    </label>

                    <RadioButton
                      v-model="Inventorystatus"
                      inputId="ingredient1"
                      name="pizza"
                      value="موجود"
                      ref="emd"
                      id="red"
                    />
                    <label for="ingredient1">موجود</label>
                  </div>
                  <div class="flex items-center gap-2 mr-4">
                    <RadioButton
                      v-model="Inventorystatus"
                      inputId="ingredient2"
                      name="pizza"
                      value="ناموجود"
                    />
                    <label for="ingredient2">ناموجود</label>
                  </div>
                </div>
                <div class="mt-8">
                  <label class="block text-sm font-semibold mb-1">
                    بارگذاری تصویر شاخص
                  </label>

                  <div class="card flex flex-col items-center gap-6">
                    <FileUpload
                      mode="basic"
                      @select="onFileSelect"
                      customUpload
                      auto
                      severity="secondary"
                      class="p-button-outlined"
                    />
                    <img
                      v-if="src"
                      :src="src"
                      alt="Image"
                      class="shadow-md rounded-xl w-full sm:w-64"
                      style="filter: grayscale(100%)"
                    />

                    <img
                      v-if="Imagefileshow"
                      :src="Imagefileshow"
                      alt="Image"
                      class="shadow-md rounded-xl w-full sm:w-64"
                      style="filter: grayscale(100%)"
                    />
                  </div>
                </div>

                <div class="mt-8">
                  <label class="block text-sm font-semibold mb-1">
                    بارگذاری کاتالوگ محصول
                  </label>

                  <div class="card flex flex-col items-center gap-6">
                    <FileUpload
                      mode="basic"
                      @select="onFileSelect1"
                      customUpload
                      auto
                      severity="secondary"
                      class="p-button-outlined"
                      ref="fileupload"
                    />
                    <img
                      v-if="src1"
                      :src="src1"
                      alt="Image"
                      class="shadow-md rounded-xl w-full sm:w-64"
                      style="filter: grayscale(100%)"
                    />
                    <img
                      v-if="productfileshow"
                      :src="productfileshow"
                      alt="Image"
                      class="shadow-md rounded-xl w-full sm:w-64"
                      style="filter: grayscale(100%)"
                    />
                  </div>
                </div>

                <!-- File Upload -->
                <div class="col-span-1 md:col-span-2">
                  <label class="block text-sm font-semibold mb-1">
                    بارگذاری تصاویر اسلایدر محصول</label
                  >
                  <FileUpload
                    mode="advanced"
                    name="demo[]"
                    multiple
                    accept="image/*"
                    @select="onFileSelect2"
                  />

                  <div v-for="item in ImagesShow">
                    <img
                      :src="item.image"
                      alt="Image"
                      class="shadow-md rounded-xl w-full sm:w-64 mt-8"
                      style="filter: grayscale(100%)"
                    />
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="p-4 flex justify-end md:col-span-2">
                  <!-- Submit Button -->
                  <Button
                    label="انصراف"
                    class="text-green-700 font-bold rounded-md px-6 py-2 transition duration-300 ease-in-out transform hover:bg-green-600 active:bg-green-800"
                    variant="outlined"
                    style="width: 160px; background: none; color: #10b981"
                  />

                  <!-- Send Button -->
                  <Button
                    label="بروزرسانی"
                    class="border mr-4 border-green-700 text-green-700 font-bold rounded-md px-6 py-2 transition duration-300 ease-in-out transform hover:bg-green-700 hover:text-white active:bg-green-600"
                    type="submit"
                    style="width: 160px"
                  />
                </div>
              </form>
            </client-only>
          </div>
        </div>
        <Toast position="top-left" group="tl" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main {
  background-color: #f3f4f6;
  .sec1 {
    display: flex;
    justify-content: space-between;
    .pic {
      width: 24px;
      height: 24px;
    }

    .text {
      font-size: 14px;
      color: #686f77;
    }
    .text-right {
      color: #1f2937;
      font-size: 20px;
      font-weight: 700px;
    }
  }

  .card-bar {
    width: 99%;
  }
}
</style>
<script>
import TiptapEditor from "../../components/TiptapEditor.vue";

export default {
  components: {
    TiptapEditor,
  },
  data() {
    return {
      pageId: this.$route.params.id,
      productAll : null,
      data: null,
      data1: null,
      data2: null,
      data3: null,
      data4: null,
      data5: null,
      visible: false,
      Imagefile: null,
      Imagefileshow: null,
      Images: null,
      ImagesShow: null,
      bol: null,
      product: null,
      productup: null,
      content: null,
      ingredient: null,
      src: null,
      src1: null,
      productName: "",
      productPrice: null,
      brandModel: null,
      brandholder: null,
      categoryModel: null,
      categoryholder: null,
      carModel: null,
      carholder: null,
      carpartModel: null,
      carpartholder: null,
      companyModel: null,
      companyholder: null,
      tagidModel: null,
      tagholder: null,
      priceoff: null,
      productCode: "",
      productlength: null,
      productwidth: null,
      productfirstcolor: null,
      productsecondcolor: null,
      productfile: null,
      productfileshow: null,
      Inventorystatus: null,
      priceWithTax: null,
      height: null,
      secondaryColor: "",
      vehicleType: null,
      brand: null,
      sectionType: null,
      submissionMethod: null,
      category: null,
      cars: null,
      carpart: null,
      brands: null,
      company: null,
      tags: null,
      tagsmodel: null,
      product_Height: null,
      product_Weight: null,
      productsendway: [
        { label: "پست پیشتاز", value: "postpishtaz" },
        { label: "تیپاکس", value: "tapax" },
        { label: "هردو", value: "herdo" },
      ],
      productgaranty: [
        { label: "ضمانت تعمیر", value: "tamir" },
        { label: "ضمانت تعویض", value: "taviz" },
        { label: "هیچ کدام", value: "hichkodum" },
      ],
      productgarantymodel: null,
      productgarantyholder: null,
      productsendwaymodel: null,
      productsendwayholder: null,
      totalRecords: null,
    };
  },

  methods: {
    onFileSelect(event) {
      const file = event.files[0];
      this.Imagefile = file;
      const reader = new FileReader();

      reader.onload = async (e) => {
        this.src = e.target.result;
      };

      reader.readAsDataURL(file);
    },

    onFileSelect1(event) {
      const file = event.files[0];
      this.productfile = file;
      const reader = new FileReader();

      reader.onload = async (e) => {
        this.src1 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    onFileSelect2(event) {
      const file = event.files;
      this.Images = file;
    },
    po() {
      // console.log("formData", emd);
      // document.getElementById("ingredient1").checked = true;
      // this.$refs.emd.checked = true;
    },
    async getproductAll(par) {
        try {
          this.productAll = await $fetch("/api/product", {
            query: { page: par },
          });
          this.totalRecords = this.productAll.total;
        } catch (error) {
          console.log(error);
        } finally {
          this.product = toRaw(this.product);
          console.log("pr", toRaw(this.product.total));
        }
      },


    async getproduct() {
      try {
        this.product = await $fetch("/api/product/details", {
          query: { id: `${this.pageId}` },
        });
        this.productName = this.product.name;
        this.Imagefileshow = this.product.primary_image;
        this.productPrice = this.product.price;
        this.priceoff = this.product.priceoff;
        this.productCode = this.product.productcode;
        this.productlength = this.product.product_length;
        this.productwidth = this.product.product_width;
        this.productfirstcolor = this.product.product_first_color;
        this.productsecondcolor = this.product.product_second_color;
        this.productcountry = this.product.product_country;
        this.Inventorystatus = this.product.Inventory_status;
        this.productfileshow = this.product.product_file;
        this.ImagesShow = this.product.images;
        this.tagholder = this.product.tag_name;
        this.productgarantyholder = this.product.product_garanty;
        this.productsendwayholder = this.product.product_send_way;
        this.brandholder = this.product.brand_name;
        this.companyholder = this.product.company_name;
        this.carpartholder = this.product.carpart_name;
        this.carholder = this.product.car_name;
        this.categoryholder = this.product.category_name;
        this.content = this.product.description;
        this.product_Height = this.product.product_Height;
        this.product_Weight = this.product.product_Weight;
      } catch (error) {
        console.log(error);
      } finally {
        this.product = toRaw(this.product);
        console.log("pr", toRaw(this.product));
      }
    },



    async categoryfunc() {
      try {
        this.data = await $fetch("/api/category");
      } catch (error) {
        console.log(error);
      } finally {
        this.category = toRaw(this.data.categories);
        console.log("ca", toRaw(this.data.categories));
      }
    },
    async carsfunc() {
      try {
        this.data1 = await $fetch("/api/cars");
      } catch (error) {
        console.log(error);
      } finally {
        this.cars = toRaw(this.data1.cars);
        console.log("car", toRaw(this.data1.cars));
      }
    },

    async carpartsfunc() {
      try {
        this.data2 = await $fetch("/api/carparts");
      } catch (error) {
        console.log(error);
      } finally {
        this.carpart = toRaw(this.data2.carparts);
        console.log("data2", toRaw(this.data2.carparts));
      }
    },
    async companyfunc() {
      try {
        this.data3 = await $fetch("/api/company");
      } catch (error) {
        console.log(error);
      } finally {
        this.company = toRaw(this.data3.companies);
        console.log("ddd", toRaw(this.data3.companies));
      }
    },

    async bransfunc() {
      try {
        this.data4 = await $fetch("/api/brand");
      } catch (error) {
        console.log(error);
      } finally {
        this.brands = toRaw(this.data4.brands);
        console.log("brands", toRaw(this.data4.brands));
      }
    },

    async tagsfunc() {
      try {
        this.data5 = await $fetch("/api/tags");
      } catch (error) {
        console.log(error);
      } finally {
        this.tags = toRaw(this.data5.tags);
        console.log("ddd", toRaw(this.data5.tags));
      }
    },
    async updateproduct() {
      try {
        const formData = new FormData();
        formData.append("name", this.productName);
        formData.append(
          "brand_id",
          this.brandModel ? this.brandModel.id : this.product.brand_id
        );
        formData.append(
          "brand_name",
          this.brandModel ? this.brandModel.name : this.product.brand_name
        );
        formData.append(
          "category_id",
          this.categoryModel ? this.categoryModel.id : this.product.category_id
        );
        formData.append(
          "category_name",
          this.categoryModel
            ? this.categoryModel.name
            : this.product.category_name
        );
        formData.append(
          "car_id",
          this.carModel ? this.carModel.id : this.product.car_id
        );
        formData.append(
          "car_name",
          this.carModel ? this.carModel.name : this.product.car_name
        );
        formData.append(
          "carpart_id",
          this.carpartModel ? this.carpartModel.id : this.product.carpart_id
        );
        formData.append(
          "carpart_name",
          this.carpartModel ? this.carpartModel.name : this.product.carpart_name
        );
        formData.append(
          "company_id",
          this.companyModel ? this.companyModel.id : this.product.company_id
        );
        formData.append(
          "company_name",
          this.companyModel ? this.companyModel.name : this.product.company_name
        );
        formData.append(
          "tag_id",
          this.tagidModel ? this.tagidModel.id : this.product.tag_id
        );
        formData.append(
          "tag_name",
          this.tagidModel ? this.tagidModel.name : this.product.tag_name
        );
        if (this.Imagefile) {
          formData.append("primary_image", this.Imagefile);
        }

        formData.append("price", this.productPrice);
        formData.append("priceoff", this.priceoff);
        formData.append("productcode", this.productCode);
        formData.append("product_length", this.productlength);
        formData.append("product_width", this.productwidth);
        formData.append("product_first_color", this.productfirstcolor);
        formData.append("product_second_color", this.productsecondcolor);
        formData.append("product_country", this.productcountry);
        formData.append("Inventory_status", this.Inventorystatus);
        formData.append("product_Height", this.product_Height);
        formData.append("product_Weight", this.product_Weight);
        if (this.productfile) {
          formData.append("product_file", this.productfile);
        }
        formData.append(
          "product_garanty",
          this.productgarantymodel
            ? this.productgarantymodel.label
            : this.product.product_garanty
        );
        formData.append(
          "product_send_way",
          this.productsendwaymodel
            ? this.productsendwaymodel.label
            : this.product.product_send_way
        );

        formData.append("quantity", 1);
        formData.append("delivery_amount", 80000);
        formData.append("description", this.content);
        if (this.Images) {
          for (let index = 0; index < this.Images.length; index++) {
            formData.append(`images[${index}]`, this.Images[index]);
          }
        }

        formData.append("_method", "PUT");

        this.productup = await $fetch(
          `https://parseback.liara.run/api/products/${this.pageId}`,
          {
            method: "POST",
            body: formData,
          }
        );

        this.$toast.add({
          severity: "success",
          summary: "بروزرسانی محصول",
          detail: "محصول با موفقیت بروزرسانی شد",
          group: "tl",
          life: 3000,
        });
        navigateTo(`/product/main/${this.totalRecords}`);
      } catch (error) {
        // errors.value = Object.values(error.data.data.message).flat();
        console.log("gg", error);
        this.$toast.add({
          severity: "error",
          summary: "خطا",
          detail: "بروزرسانی محصول با شکست مواجه شد",
          group: "tl",
          life: 3000,
        });
      } finally {
        console.log("qqq", toRaw(this.productup));
      }
    },
  },

  beforeMount() {
    this.categoryfunc();
    this.carsfunc();
    this.carpartsfunc();
    this.companyfunc();
    this.bransfunc();
    this.tagsfunc();
    this.getproduct();
    this.getproductAll();
  },
  mounted() {},
};
</script>
