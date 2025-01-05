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
          <!-- Data Table -->
          <form
            class="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4"
          
          >
            <!-- Product Name -->
            <div>
              <label class="block text-sm font-semibold mb-1">  شرکت  ها</label>
              <InputText
                v-model="productName"
                placeholder="نام شرکت  را وارد کنید"
                class="w-full"
              />
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
                label="ثبت"
                class="border mr-4 border-green-700 text-green-700 font-bold rounded-md px-6 py-2 transition duration-300 ease-in-out transform hover:bg-green-700 hover:text-white active:bg-green-600"
                @click="companiesfun()"
                style="width: 160px"
              />
            </div>
          </form>
          <hr />
          <DataTable
            class="mt-4"
            :value="allcompanies"
            style="width: 100%"
            paginator
            :rows="10"
            :rowsPerPageOptions="[5, 10, 20, 50]"
          >
            <!-- Header Section -->
            <template #header>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex justify-between items-center mb-4">
                  <div class="flex items-center">
                    <!-- <img class="w-10 h-10 rounded-full ml-4" src="path/to/avatar.png" alt="User Avatar"> -->
                    <div class="relative">
                      <img
                        src="/public/listbargiry/icons-Line-search.png"
                        alt=""
                        style="position: absolute; top: 8px; left: 10px"
                      />
                      <input
                        type="text"
                        placeholder="جستجو"
                        class="border rounded-lg px-8 py-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <!-- Columns -->
            <Column
              field="name"
              header="نام شرکت ها"
              style="text-align: start"
            />



            <Column header="حذف" style="text-align: start" >
              <template #body="slotProps">
                <i class="mdi mdi-delete" style="font-size: 2.5rem" @click="deletecompanies(slotProps.data.id)"></i>
              </template>
            </Column>

            <!-- Footer Section -->
            <template #footer>
              مجموعاً {{ products ? products.length : 0 }} محصول در لیست وجود
              دارد.
            </template>
          </DataTable>
        </div>
      </div>
    </div>
    <Toast position="top-left" group="tl" />
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
export default {
  data() {
    return {
      data: null,
      data1: null,
      productName: null,
      companies : null,
      allcompanies : null,
  
    };
  },
  watch: {
    // وقتی تعداد برندها تغییر کند، درخواست جدیدی به سرور می‌زنیم
 
  },
  methods: {
    async companiesfun() {
      try {
        this.data = await $fetch('/api/company/create', {
          method: 'POST',
          body: { "parent_id": 1 , name: this.productName  },
        });
        this.getcompanies();
        this.$toast.add({ severity: 'success', summary: 'ایجاد دسته بندی', detail: 'دسته بندی با موفقیت ایجاد شد', group: 'tl', life: 3000 });
      } catch (error) {
        // errors.value = Object.values(error.data.data.message).flat();
        console.log(error);
      } finally {
        console.log("ddd",  toRaw(this.data));
      }
    },
    async getcompanies() {
      try {
        this.companies  = await $fetch('/api/company');
        this.allcompanies = this.companies.companies
      } catch (error) {
        // errors.value = Object.values(error.data.data.message).flat();
        console.log(error);
      } finally {
        console.log("brands",  this.allcompanies);
      }
    },
    async deletecompanies(id) {

      try {
        this.data1 = await $fetch(`/api/company/delete`, {
          method: 'DELETE',
          query:  { url : `${id}`}
        });
        this.getcompanies();
        this.$toast.add({ severity: 'success', summary: ' حذف دسته بندی', detail: 'دسته بندی با موفقیت حذف شد', group: 'tl', life: 3000 });
      } catch (error) {
   
        console.log(error);
      } finally {
        console.log("ddd",  toRaw(this.data1));
      }
    },


  },
  beforeMount() {
    this.getcompanies();

  },
};
</script>


