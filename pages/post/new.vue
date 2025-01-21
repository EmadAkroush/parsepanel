<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">مدیریت مقالات</p>
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
            <h1 class="text-2xl font-bold mb-6">فرم ایجاد مقاله</h1>

            <form
              class="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <!-- Product Name -->
              <div class="md:col-span-2">
                <label class="block text-sm font-semibold mb-1"   >
                  عنوان مقاله</label
                >
                <InputText
                  v-model="title"
                  placeholder="عنوان مقاله را وارد کنید"
                  class="w-full"
                />
              </div>

              <div class="my-8 md:col-span-2">
                <h1>مقدمه مقاله</h1>
                <client-only>
                  <tiptap-editor v-model="summary" />
                </client-only>
              </div>

              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1">
                  چه چیزی یاد می گیرید 1</label
                >
                <InputText
                  v-model="whatlearn1"
                  placeholder="چه چیزی یاد می گیرید 1"
                  class="w-full"
                />
              </div>
              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1">
                  چه چیزی یاد می گیرید 2</label
                >
                <InputText
                  v-model="whatlearn2"
                  placeholder="چه چیزی یاد می گیرید 2"
                  class="w-full"
                />
              </div>

              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1">
                  چه چیزی یاد می گیرید 3</label
                >
                <InputText
                  v-model="whatlearn3"
                  placeholder="چه چیزی یاد می گیرید 3"
                  class="w-full"
                />
              </div>
              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1">
                  چه چیزی یاد می گیرید 4</label
                >
                <InputText
                  v-model="whatlearn4"
                  placeholder="چه چیزی یاد می گیرید 4"
                  class="w-full"
                />
              </div>

              <!-- Vehicle Type -->
              <div>
                <label class="block text-sm font-semibold mb-1">
                  برچسب 1
                </label>
                <Dropdown
                  v-model="tags1"
                  :options="vehicleTypes"
                  placeholder="برچسب 1"
                  optionLabel="label"
                  class="w-full"
                />
              </div>
              <!-- Vehicle Type -->
              <div>
                <label class="block text-sm font-semibold mb-1">
                  برچسب 2
                </label>
                <Dropdown
                  v-model="tags2"
                  :options="vehicleTypes"
                  placeholder="برچسب 2"
                  optionLabel="label"
                  class="w-full"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-1">
                  برچسب 3
                </label>
                <Dropdown
                  v-model="tags3"
                  :options="vehicleTypes"
                  placeholder="برچسب 3"
                  optionLabel="label"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-1">
                  دسته بندی
                </label>
                <Dropdown
                  v-model="category"
                  :options="vehicleTypes"
                  placeholder="دسته بندی خود را انتخاب کنید"
                  optionLabel="label"
                  class="w-full"
                />
              </div>

              <div class="my-8 md:col-span-2 body-blog">
                <h1>بدنه مقاله</h1>
                <client-only>
                  <tiptap-editor v-model="description" />
                </client-only>
              </div>

              <div class="mt-8">
                <label class="block text-sm font-semibold mb-1">
                  بارگذاری تصویر اصلی
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
                  بارگذاری تصویر وسط
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
              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1">
                  متن لینک 1</label
                >
                <InputText
                  v-model="linktext1"
                  placeholder=" متن لینک 1"
                  class="w-full"
                />
              </div>
              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1"> لینک 1</label>
                <InputText
                  v-model="link1"
                  placeholder=" لینک 1"
                  class="w-full"
                />
              </div>
              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1">
                  متن لینک 2</label
                >
                <InputText
                  v-model="linktext2"
                  placeholder=" متن لینک 2"
                  class="w-full"
                />
              </div>
              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1"> لینک 2</label>
                <InputText
                  v-model="link2"
                  placeholder=" لینک 2"
                  class="w-full"
                />
              </div>
              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1">
                  متن لینک 3</label
                >
                <InputText
                  v-model="linktext3"
                  placeholder=" متن لینک 3"
                  class="w-full"
                />
              </div>
              <!-- Secondary Color -->
              <div>
                <label class="block text-sm font-semibold mb-1"> لینک 3</label>
                <InputText
                  v-model="link3"
                  placeholder=" لینک 3"
                  class="w-full"
                />
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-semibold mb-1" > عنوان سئو</label>
                <InputText
                  v-model="seotitle"
                  placeholder="عنوان سئو"
                  class="w-full"
                  
                />
              </div>
              <div class="md:col-span-2">
                <label class="block text-sm font-semibold mb-1" >  توضیحات سئو</label>
                <Textarea v-model="seodes" rows="5" cols="150"     placeholder="توضیحات سئو" />
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
                  @click="handleSend"
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
  .body-blog {
    .tiptap {
      height: 800px;
    }
  }
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
      content: "hello",
      src: null,
      src1: null,
      title: null,
      summary: null,
      whatlearn1: null,
      whatlearn2: null,
      whatlearn3: null,
      whatlearn4: null,
      tags1:null,
      tags2:null,
      tags3:null,
      category : null,
      description: null,
      primary_image : null,
      middle_image: null,
      linktext1: null,
      link1: null,
      linktext2: null,
      link2: null,
      linktext3: null,
      link3: null,
      seotitle: null,
      seodes: null,

    };
  },

  methods: {

    onFileSelect(event) {
      const file = event.files[0];
      this.primary_image = file
      const reader = new FileReader();

      reader.onload = async (e) => {
        this.src = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    onFileSelect1(event) {
      const file = event.files[0];
      this.middle_image = file
      const reader = new FileReader();

      reader.onload = async (e) => {
        this.src1 = e.target.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>
