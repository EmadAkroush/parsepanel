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
            <h1 class="text-2xl font-bold mb-6">فرم ایجاد محصول</h1>
            <div class=" my-8">
                <h1>توضیحات محصول</h1>
                <client-only>
                  <tiptap-editor v-model="content"  />
                </client-only>
              </div>

            <form
              class="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4"
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
                  v-model="productPrice"
                  type="number"
                  placeholder="قیمت را وارد کنید"
                  class="w-full"
                />
              </div>

              <!-- Product Code -->
              <div>
                <label class="block text-sm font-semibold mb-1">کد محصول</label>
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
                  v-model="priceWithTax"
                  type="number"
                  placeholder="123 "
                  class="w-full"
                />
              </div>

              <!-- Height -->
              <div>
                <label class="block text-sm font-semibold mb-1"
                  >عرض به سانتی متر</label
                >
                <InputText
                  v-model="height"
                  type="number"
                  placeholder=" 125  "
                  class="w-full"
                />
              </div>

              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1"
                  >رنگ اولیه</label
                >
                <InputText
                  v-model="secondaryColor"
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
                  v-model="secondaryColor"
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
                  v-model="secondaryColor"
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
                  v-model="vehicleType"
                  :options="vehicleTypes"
                  placeholder="دسته بندی محصول را انتخاب کنید"
                  optionLabel="label"
                  class="w-full"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-1"
                  >نوع خودرو</label
                >
                <Dropdown
                  v-model="vehicleType"
                  :options="vehicleTypes"
                  placeholder="نوع خودرو را انتخاب کنید"
                  optionLabel="label"
                  class="w-full"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-1"
                  >بخش خودرو  </label
                >
                <Dropdown
                  v-model="vehicleType"
                  :options="vehicleTypes"
                  placeholder="مثلا جلوبندی"
                  optionLabel="label"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-1"
                  > شرکت سازنده  </label
                >
                <Dropdown
                  v-model="vehicleType"
                  :options="vehicleTypes"
                  placeholder="شرکت سازنده خودرو را انتخاب کنید"
                  optionLabel="label"
                  class="w-full"
                />
              </div>

              <!-- Brand -->
              <div>
                <label class="block text-sm font-semibold mb-1">برند</label>
                <Dropdown
                  v-model="brand"
                  :options="brands"
                  placeholder="برند را انتخاب کنید"
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
                  v-model="sectionType"
                  :options="sectionTypes"
                  placeholder="نوع ضمانت را انتخاب کنید"
                  optionLabel="label"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-1"
                  >بر چسب های محصول
                </label>
                <MultiSelect
                  v-model="selectedCities"
                  :options="cities"
                  optionLabel="name"
                  placeholder="انتخاب برچسب"
                  :maxSelectedLabels="3"
                  class="w-full"
                />
              </div>

              <!-- Submission Method -->
              <div>
                <label class="block text-sm font-semibold mb-1"
                  >روش ارسال</label
                >
                <Dropdown
                  v-model="submissionMethod"
                  :options="submissionMethods"
                  placeholder="روش ارسال را انتخاب کنید"
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
                    v-model="ingredient"
                    inputId="ingredient1"
                    name="pizza"
                    value="Cheese"
                  />
                  <label for="ingredient1">موجود</label>
                </div>
                <div class="flex items-center gap-2 mr-4">
                  <RadioButton
                    v-model="ingredient"
                    inputId="ingredient2"
                    name="pizza"
                    value="Mushroom"
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
                  />
                  <img
                    v-if="src1"
                    :src="src1"
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
                />
              </div>

              <!-- Submit Button -->
              <div class="p-4 flex justify-end md:col-span-2">
                <!-- Submit Button -->
                <Button
                  label="انصراف"
                  class="text-green-700 font-bold rounded-md px-6 py-2 transition duration-300 ease-in-out transform hover:bg-green-600 active:bg-green-800"
                  @click="handleSubmit"
                  variant="outlined"
                  style="width: 160px; background: none; color: #10b981"
                />

                <!-- Send Button -->
                <Button
                  label="ثبت"
                  class="border mr-4 border-green-700 text-green-700 font-bold rounded-md px-6 py-2 transition duration-300 ease-in-out transform hover:bg-green-700 hover:text-white active:bg-green-600"
                  @click="brans"
                  style="width: 160px"
                />
              </div>
            </form>
          </div>
        </div>
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
      data : null,
      data1 : null,
      data2 : null,

      content: "hello",
      ingredient: null,
      src: null,
      src1: null,
      productName: "",
      productPrice: null,
      productCode: "",
      priceWithTax: null,
      height: null,
      secondaryColor: "",
      vehicleType: null,
      brand: null,
      sectionType: null,
      submissionMethod: null,
      vehicleTypes: [
        { label: "خودروها", value: "cars" },
        { label: "موتور", value: "motorcycles" },
      ],
      brands: [
        { label: "برند A", value: "brandA" },
        { label: "برند B", value: "brandB" },
      ],
      sectionTypes: [
        { label: "نوع اول", value: "type1" },
        { label: "نوع دوم", value: "type2" },
      ],
      submissionMethods: [
        { label: "پست پیشتاز", value: "post" },
        { label: "تیپاکس", value: "pickup" },
        { label: "هردو", value: "pickup1" },
      ],
      selectedCities: null,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
    };
  },

  methods: {
    submitForm() {
      // Implement form submission logic here
      // alert(
      //   "Form submitted with the following data:\n" +
      //     `Name: ${this.productName}\n` +
      //     `Price: ${this.productPrice}\n` +
      //     `Code: ${this.productCode}\n` +
      //     `Price with Tax: ${this.priceWithTax}\n` +
      //     `Height: ${this.height}\n` +
      //     `Secondary Color: ${this.secondaryColor}\n` +
      //     `Vehicle Type: ${this.vehicleType}\n` +
      //     `Brand: ${this.brand}\n` +
      //     `Section Type: ${this.sectionType}\n` +
      //     `Submission Method: ${this.submissionMethod}`
      // );
      console.log("This runs before the component is mounted." , this.content );
    },
    onFileSelect(event) {
      const file = event.files[0];
      const reader = new FileReader();

      reader.onload = async (e) => {
        this.src = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    onFileSelect1(event) {
      const file = event.files[0];
      const reader = new FileReader();

      reader.onload = async (e) => {
        this.src1 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    async brans() {
      try {
         this.data = await $fetch('/api/brand');
      } catch (error) {
        console.log(error);
      } finally {
        this.brands = toRaw(this.data.brnads);
        console.log("ddd",  toRaw(this.data.brnads));
      }
    },
    async carparts() {
      try {
         this.data = await $fetch('/api/brand');
      } catch (error) {
        console.log(error);
      } finally {
        this.brands = toRaw(this.data.brnads);
        console.log("ddd",  toRaw(this.data.brnads));

      }
    },
    async category() {
      try {
         this.data = await $fetch('/api/brand');
      } catch (error) {
        console.log(error);
      } finally {
        this.brands = toRaw(this.data.brnads);
        console.log("ddd",  toRaw(this.data.brnads));

      }
    },
    async company() {
      try {
         this.data = await $fetch('/api/brand');
      } catch (error) {
        console.log(error);
      } finally {
        this.brands = toRaw(this.data.brnads);
        console.log("ddd",  toRaw(this.data.brnads));

      }
    },

  },
 
  beforeMount() {
    console.log("This runs before the component is mounted." , this.content );
    this.brans()
    this.carparts()
    this.category()
    this.company()

  },
  mounted() {
		
	}


  
};
</script>


