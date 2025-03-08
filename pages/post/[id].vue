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
            <h1 class="text-2xl font-bold mb-6">فرم ویرایش مقاله</h1>
        
            <div class="my-8 md:col-span-2">
                <h1>مقدمه مقاله</h1>
                <client-only>
                  <tiptap-editor v-model="summary" />
                </client-only>
              </div>
              
              <div class="my-8 md:col-span-2 body-blog">
                <h1>بدنه مقاله</h1>
                <client-only>
                  <tiptap-editor v-model="description" />
                </client-only>
              </div>

            <form
              class="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <!-- Product Name -->
              <div class="md:col-span-2">
                <label class="block text-sm font-semibold mb-1"   >
                  عنوان مقاله         {{ dop }}</label
                >
         
                <InputText
                  v-model="title"
                  placeholder="عنوان مقاله را وارد کنید"
                  class="w-full"
                />
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
                  :options="tagsdrop"
                  :placeholder="tagsholder1"
                  optionLabel="name"
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
                  :options="tagsdrop"
                  :placeholder="tagsholder2"
                  optionLabel="name"
                  class="w-full"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold mb-1">
                  برچسب 3
                </label>
                <Dropdown
                  v-model="tags3"
                  :options="tagsdrop"
                  :placeholder="tagsholder3"
                  optionLabel="name"
                  class="w-full"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-1">
                  دسته بندی
                </label>
                <Dropdown
                  v-model="category"
                  :options="categorydrop"
                  :placeholder="categoryholder"
                  optionLabel="name"
                  class="w-full"
                />
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
                  <img
                      v-if="primary_image_file"
                      :src="primary_image_file"
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
                  <img
                      v-if="middle_image_file"
                      :src="middle_image_file"
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
            
                  variant="outlined"
                  style="width: 160px; background: none; color: #10b981"
                />

                <!-- Send Button -->
                <Button
                  label="بروزرسانی"
                  class="border mr-4 border-green-700 text-green-700 font-bold rounded-md px-6 py-2 transition duration-300 ease-in-out transform hover:bg-green-700 hover:text-white active:bg-green-600"
                  @click="updatepost"
                  style="width: 160px"
                />
              </div>
            </form>
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
      pageId: this.$route.params.id,
      Datenow : new Date().toLocaleDateString('fa-IR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
      data1: null,
      data2: null,
      post: null,
      post1: null,
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
      tagsholder1:null,
      tagsholder2:null,
      tagsholder3:null,
      category : null,
      categoryholder : null,
      description: null,
      primary_image : null,
      primary_image_file : null,
      middle_image: null,
      middle_image_file: null,
      linktext1: null,
      link1: null,
      linktext2: null,
      link2: null,
      linktext3: null,
      link3: null,
      seotitle: null,
      seodes: null,
      categorydrop : null ,
      tagsdrop : null,

    };
  },

  methods: {
    async updatepost() {
      try {
        
        const formData = new FormData();

        formData.append("title", this.title);
        formData.append("user_id", "1");
        formData.append("date", this.Datenow);
        if(this.primary_image){
          formData.append("primary_image", this.primary_image);
        }
        formData.append("summary", this.summary);
        formData.append("whatlearn1", this.whatlearn1);
        formData.append("whatlearn2", this.whatlearn2);
        formData.append("whatlearn3", this.whatlearn3);
        formData.append("whatlearn4", this.whatlearn4);
        if(this.middle_image){
          formData.append("middle_image", this.middle_image);
        }
        formData.append("description", this.description);
        formData.append("external_sources1", this.link1);
        formData.append("external_sources2", this.link2);
        formData.append("external_sources3", this.link3);
        formData.append("tag_id", this.tags1 ? this.tags1.id : this.post1.tag_id );
        formData.append("tag_name", this.tags1 ? this.tags1.name : this.post1.tag_name );
        formData.append("tag_name2", this.tags2 ? this.tags2.name : this.post1.tag_name2 );
        formData.append("tag_name3", this.tags3 ? this.tags3.name : this.post1.tag_name3 );
        formData.append("external_sources_text1", this.linktext1);
        formData.append("external_sources_text2", this.linktext2);
        formData.append("external_sources_text3", this.linktext3);
        formData.append("category_id", this.category ? this.category.id : this.post1.category_id  );
        formData.append("category_name", this.category ? this.category.name : this.post1.category_name );
        formData.append("seo_title", this.seotitle);
        formData.append("seo_body", this.seodes);
        formData.append("_method", "PUT");

        this.productup = await $fetch(
          `https://parseback.liara.run/api/post/${this.pageId}`,
          {
            method: "POST",
            body: formData,
          }
        );

        this.$toast.add({
          severity: "success",
          summary: "بروزرسانی مقاله",
          detail: "مقاله با موفقیت بروزرسانی شد",
          group: "tl",
          life: 3000,
        });
        navigateTo("/post");
      } catch (error) {
        // errors.value = Object.values(error.data.data.message).flat();
        console.log("gg", error);
        this.$toast.add({
          severity: "error",
          summary: "خطا",
          detail: "بروزرسانی مقاله با شکست مواجه شد",
          group: "tl",
          life: 3000,
        });
      } finally {
        console.log("qqq", toRaw(this.productup));
      }
    },

    async getpost() {
      try {
        this.post1 = await $fetch("/api/post/main/details", {
          query: { id: `${this.pageId}` },
        });
 
          this.title = this.post1.title;
          this.summary = this.post1.summary;
          this.whatlearn1 = this.post1.whatlearn1;
          this.whatlearn2 = this.post1.whatlearn2;
          this.whatlearn3 = this.post1.whatlearn3;
          this.whatlearn4 = this.post1.whatlearn4;
          this.tagsholder1 = this.post1.tag_name;
          this.tagsholder2 = this.post1.tag_name2;
          this.tagsholder3 = this.post1.tag_name3;
          this.categoryholder = this.post1.category_name;
          this.description =  this.post1.description;
          this.linktext1 =  this.post1.external_sources_text1;
          this.link1 =  this.post1.external_sources1;
          this.linktext2 =  this.post1.external_sources_text2;
          this.link2 =  this.post1.external_sources2;
          this.linktext3 =  this.post1.external_sources_text3;
          this.link3 =  this.post1.external_sources3;
          this.seotitle = this.post1.seo_title;
          this.seodes = this.post1.seo_body;
          this.primary_image_file = this.post1.primary_image;
          this.middle_image_file = this.post1.middle_image;



      } catch (error) {
        console.log(error);
      } finally {
        this.post1 = toRaw(this.post1);
        console.log("post1", toRaw(this.post1));
      }
    },

  




    async categoryfunc() {
      try {
        this.data1 = await $fetch("/api/post/category");
        this.categorydrop = toRaw(this.data1.PostCategory);
      } catch (error) {
        console.log(error);
      } finally {
      
    
      }
    },
    async tagsfunc() {
      try {
        this.data2 = await $fetch("/api/post/tags");
        this.tagsdrop = toRaw(this.data2.PostTags);
      } catch (error) {
        console.log(error);
      } finally {

     
      }
    },

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
  beforeMount() {
    this.categoryfunc();
    this.tagsfunc();
    this.getpost();

  },

};
</script>
<script setup>

definePageMeta({
  middleware: "auth",
});
</script>
