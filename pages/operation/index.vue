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
        <div class="p-6 bg-white rounded-lg shadow-md rtl " style="width: 100%;">
    <!-- Data Table -->
    <DataTable :value="products" style="width: 100%;" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]">
      <!-- Header Section -->
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">محصولات</span> <!-- Persian Text -->
          <Button icon="mdi mdi-refresh" rounded raised />
        </div>
      </template>

      <!-- Columns -->
      <Column field="name" header="نام" />
      <Column header="تصویر">
        <template #body="slotProps">
          <img
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
            :alt="slotProps.data.image"
            class="w-24 rounded"
          />
        </template>
      </Column>
      <Column field="price" header="قیمت">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column field="category" header="دسته‌بندی" />
      <Column field="rating" header="نظرات">
        <template #body="slotProps">
          <Rating :modelValue="slotProps.data.rating" readonly />
        </template>
      </Column>
      <Column header="وضعیت">
        <template #body="slotProps">
          <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
      </Column>

      <!-- Footer Section -->
      <template #footer>
        مجموعاً {{ products ? products.length : 0 }} محصول در لیست وجود دارد.
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
          name: "Laptop",
          image: "laptop.png",
          price: 999.99,
          category: "Electronics",
          rating: 4,
          inventoryStatus: "In Stock",
        },
        {
          name: "Headphones",
          image: "headphones.png",
          price: 199.99,
          category: "Accessories",
          rating: 3,
          inventoryStatus: "Low Stock",
        },
        {
          name: "Smartphone",
          image: "smartphone.png",
          price: 499.99,
          category: "Electronics",
          rating: 5,
          inventoryStatus: "Out of Stock",
        },
        {
          name: "Washing Machine",
          image: "washing_machine.png",
          price: 799.99,
          category: "Home Appliances",
          rating: 4,
          inventoryStatus: "In Stock",
        },
      ],
    };
  },
  methods: {
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
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
