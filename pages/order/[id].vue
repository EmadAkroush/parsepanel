<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right"> آدرس ارسال</p>
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

          <hr />
        {{ productsAll  }}
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="font-bold">نام :</p>
              <p>{{ productsAll?.name }}</p>
            </div>
            <div>
              <p class="font-bold">قیمت:</p>
              <p>{{ productsAll?.price }}</p>
            </div>
            <div>
              <p class="font-bold">توضیحات:</p>
              <p>{{ productsAll?.description }}</p>
            </div>
            <div>
              <p class="font-bold">تاریخ:</p>
              <p>{{ productsAll?.date }}</p>
            </div>
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
export default {
  data() {
    return {
      productsAll: null,
      visible: false,
      productde: null,
      currentPage: null,
      queryParams: null,
      totalRecords: null,
      product: null,
      statusmodel: null,
      data: null,
    
    };
  },
  methods: {
    async getproduct(par) {
      try {
        this.product = await $fetch("/api/order/getadress" , {
          method: "POST",
          body: JSON.stringify({
            user_id: this.$route.params.id,
          }),
        });
        this.productsAll = this.product[this.product.length - 1]; 

      } catch (error) {
        console.log(error);
      } finally {
    
        console.log("order", toRaw(this.product).last);
      }

    }
  },
  beforeMount() {
    this.getproduct();
  },
};
</script>
<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
