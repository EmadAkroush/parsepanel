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
            :value="products"
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
                <nuxt-link to="/post">
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
            <Column field="name" header="نام" style="text-align: start" />
            <Column header="تصویر" style="text-align: start">
              <template #body="slotProps">
                <img src="/public/girbox.jpg" class="w-24 rounded" />
              </template>
            </Column>
          
            <Column
              field="category"
              header="دسته‌بندی"
              style="text-align: start"
            />
            
            <Column field="rating" header="ویرایش" style="text-align: start">
              <template #body="slotProps">
                <i class="mdi mdi-pencil" style="font-size: 2.5rem"></i>
              </template>
            </Column>

            <Column header="حذف" style="text-align: start">
              <template #body="slotProps">
                <i class="mdi mdi-delete" style="font-size: 2.5rem"></i>
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
      products: [
        {
          name: "بررسی دلایل ایجاد صداهای عجیب و غریب در اتومبیل",
          image: "laptop.png",
          price: 999.99,
          category: "موتور خودرو",
          code: "ffff",
        },
        {
          name: "بررسی دلایل ایجاد صداهای عجیب و غریب در اتومبیل",
          image: "laptop.png",
          price: 999.99,
          category: "موتور خودرو",
          code: "ffff",
        },
        {
          name: "بررسی دلایل ایجاد صداهای عجیب و غریب در اتومبیل",
          image: "laptop.png",
          price: 999.99,
          category: "موتور خودرو",
          code: "ffff",
        },
        {
          name: "بررسی دلایل ایجاد صداهای عجیب و غریب در اتومبیل",
          image: "laptop.png",
          price: 999.99,
          category: "موتور خودرو",
          code: "ffff",
        },
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
    formatCurrency(value) {
      return `${value.toFixed(3)}`;
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
  },
};
</script>
