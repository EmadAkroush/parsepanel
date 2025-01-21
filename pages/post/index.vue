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
          <!-- Data Table -->
          <div class="flex items-center mb-4 gap-4">
            <nuxt-link to="/post/category">
              <Button
                label="دسته بندی ها"
                severity="success"
                icon="mdi mdi-plus"
                iconPos="right"
              />
            </nuxt-link>

            <nuxt-link to="/post/tags">
              <Button
                label="برچسب ها"
                severity="success"
                icon="mdi mdi-plus"
                iconPos="right"
              />
            </nuxt-link>
          </div>
          <hr />
          <DataTable
            class="mt-4"
            :value="productsAll"
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
                        placeholder="جستجوی مقالات"
                        class="border rounded-lg px-8 py-2"
                      />
                    </div>
                  </div>
                </div>
                <nuxt-link to="/post/new">
                  <Button
                    label="مقاله جدید"
                    severity="success"
                    icon="mdi mdi-plus"
                    iconPos="right"
                  />
                </nuxt-link>
              </div>
            </template>

            <!-- Columns -->
            <Column field="title" header="عنوان" style="text-align: start" />
            <Column
              field="primary_image"
              header="تصویر"
              style="text-align: start"
            >
              <template #body="slotProps">
                <img :src="slotProps.data.primary_image" class="w-24 rounded" />
              </template>
            </Column>

            <Column
              field="category_name"
              header="دسته‌بندی"
              style="text-align: start"
            />

            <Column field="rating" header="ویرایش" style="text-align: start">
              <template #body="slotProps">
                <i class="mdi mdi-pencil" style="font-size: 2.5rem"></i>
              </template>
            </Column>

            <Column header="حذف" style="text-align: start" @click="">
              <template #body="slotProps">
                <i
                  class="mdi mdi-delete"
                  style="font-size: 2.5rem"
                  @click="deletedialog(slotProps.data.id)"
                ></i>
              </template>
            </Column>

            <!-- Footer Section -->
            <template #footer>
              مجموعاً {{ products ? products.length : 0 }} محصول در لیست وجود
              دارد.
            </template>
          </DataTable>
          <Toast position="top-left" group="tl" />
          <Dialog
            v-model:visible="visible"
            modal
            header="حذف محصول"
            :style="{ width: '25rem' }"
          >
            <span class="text-surface-500 dark:text-surface-400 block mb-8">
              آیا از حذف محصول اطمینان دارید</span
            >
            <div class="flex justify-end gap-2">
              <Button
                type="button"
                label="خیر"
                severity="secondary"
                @click="visible = false"
              ></Button>
              <Button
                type="button"
                label="بله"
                @click="deleteproduct()"
              ></Button>
            </div>
          </Dialog>
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
export default {
  data() {
    return {
      productsAll: null,
      visible: false,
      idproduct: null,
      currentPage: null,
      queryParams: null,
      totalRecords: null,
      products: [
        {
          name: "بررسی دلایل ایجاد صداهای عجیب و غریب در اتومبیل",
          image: "laptop.png",
          price: 999.99,
          category: "موتور خودرو",
          code: "ffff",
        },
      ],
    };
  },
  methods: {
    async getproduct(par) {
      try {
        this.product = await $fetch("/api/post/main", {
          query: { page: par },
        });
        this.productsAll = this.product.posts;
        this.totalRecords = this.product.total;
      } catch (error) {
        console.log(error);
      } finally {
        this.product = toRaw(this.product);
        console.log("pr", toRaw(this.product));
      }
    },


    getSeverity(product) {
      switch (product.inventoryStatus) {
        case "In Stock":
          return "success";
        case "Low Stock":
          return "warning";
        case "Out of Stock":
          return "danger";
        default:
          return "info";
      }
    },
    deletedialog(id) {
      this.visible = true;
      this.idproduct = id;
    },
    async deleteproduct() {
      try {
        this.data1 = await $fetch(`/api/post/main/delete`, {
          method: "DELETE",
          query: { url: `${this.idproduct}` },
        });
        this.getproduct();
        this.$toast.add({
          severity: "success",
          summary: " حذف محصول",
          detail: "محصول با موفقیت حذف شد",
          group: "tl",
          life: 3000,
        });
      } catch (error) {
        console.log(error);
      } finally {
        console.log("ddd", toRaw(this.data1));
        this.visible = false;
      }
    },

  },
  beforeMount() {
    this.getproduct();
   
  },
};
</script>
