<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">مدیریت سفارشات</p>
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
          <DataTable
            class="mt-4"
            :value="productsAll"
            style="width: 100%"
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
                        placeholder="جستجوی سفارشات"
                        class="border rounded-lg px-8 py-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <!-- Columns -->
            <Column
              field="created_at"
              header="تاریخ"
              style="text-align: start"
            />
            <Column
              field="cellphone"
              header="شماره تلفن"
              style="text-align: start"
            />
            <Column
              field="family"
              header="نام خانوادگی"
              style="text-align: start"
            />
            <Column
              field="status"
              header="وضعیت سفارش"
              style="text-align: start"
            >
            </Column>

            <Column
              field="paying_amount"
              header="مبلغ پرداختی"
              style="text-align: start"
            >
              <template #body="slotProps">
                {{ priceser(slotProps.data?.paying_amount) }}
              </template>
            </Column>

            <Column
              field="token"
              header="شماره رهگیری درگاه "
              style="text-align: start"
            />
            <Column
              field="payment_status"
              header="وضعیت پرداخت"
              style="text-align: start"
            />

            <Column field="rating" header="مشاهده" style="text-align: start">
              <template #body="slotProps">
                <i
                  class="mdi mdi-eye-outline"
                  style="font-size: 2.5rem"
                  @click="seeitems(slotProps.data)"
                ></i>
              </template>
            </Column>

            <Column header="مشاهده آدرس" style="text-align: start" @click="">
              <template #body="slotProps">
                <nuxt-link :to="`/order/${slotProps.data.userid}`">
                  <Button label="جزئیات" severity="success" iconPos="right" />
                </nuxt-link>
              </template>
            </Column>

            <!-- Footer Section -->
            <template #footer>
              مجموعاً {{ totalRecords }} محصول در لیست وجود دارد.
            </template>
          </DataTable>
          <Paginator
            :rows="10"
            :totalRecords="totalRecords"
            template=" FirstPageLink PrevPageLink PageLinks  NextPageLink  LastPageLink "
            @page="onPageChange"
            :currentPage="currentPage"
          />
          <Toast position="top-left" group="tl" />
          <Dialog
            v-model:visible="visible"
            modal
            header="مشاهده سفارش"
            :style="{ width: '80rem' }"
          >
            <span v-show="false">
              {{ getstatustoman(productde?.token) }}
            </span>
            <div class="flex">
              <h1>
                {{ toman?.payee_readable_status }}
              </h1>
              <Button
                label="تایید سفارش"
                severity="success"
                icon="mdi mdi-plus"
                iconPos="right"
                @click="conform(productde?.token)"
                class="col-span-4 mr-4 "
              />

            </div>

            <div class="grid grid-cols-12 gap-4">
              <Dropdown
                v-model="statusmodel"
                :options="cities"
                optionLabel="name"
                :placeholder="productde.status"
                class="col-span-10"
              />
              <Button
                label="تغییر"
                severity="success"
                icon="mdi mdi-plus"
                iconPos="right"
                @click="changeStatus(productde.id)"
                class="col-span-2"
              />
            </div>

            <DataTable
              class="mt-4"
              :value="productde.order_items"
              style="width: 100%"
              :rows="10"
            >
              <!-- Header Section -->

              <!-- Columns -->
              <Column field="name" header="نام" style="text-align: start" />

              <Column
                field="primary_image"
                header="تصویر"
                style="text-align: start"
              >
                <template #body="slotProps">
                  <img
                    :src="slotProps.data.primary_image"
                    class="w-24 rounded"
                  />
                </template>
              </Column>
              <Column field="price" header="قیمت" style="text-align: start">
                <template #body="slotProps">
                  {{ priceser(slotProps.data?.priceoff) }}
                </template>
              </Column>
              <Column
                field="quantity"
                header="تعداد"
                style="text-align: start"
              />
              <Column
                field="category_name"
                header="دسته بندی محصول"
                style="text-align: start"
              />
              <Column
                field="productcode"
                header="کد محصول"
                style="text-align: start"
              >
              </Column>

              <!-- Footer Section -->
              <template #footer>
                مجموعاً {{ totalRecords }} سفارش در لیست وجود دارد.
              </template>
            </DataTable>
          </Dialog>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main {
  background-color: #f3f4f6;
  .p-paginator {
    .p-paginator-first {
      transform: rotate(180deg)
    }
    .p-paginator-prev {
      transform: rotate(180deg)
    }
    .p-paginator-next {
      transform: rotate(180deg)
    }
    .p-paginator-last {
      transform: rotate(180deg)
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
      toman: null,
      products: [
        {
          name: "بررسی دلایل ایجاد صداهای عجیب و غریب در اتومبیل",
          image: "laptop.png",
          price: 999.99,
          category: "موتور خودرو",
          code: "ffff",
        },
      ],
      cities: [
        { name: "ارسال شده", code: "2" },
        { name: "کنسل شده", code: "3" },
      ],
    };
  },
  methods: {
    async getproduct(par) {
      try {
        this.product = await $fetch("/api/order", {
          query: { page: par },
        });
        this.productsAll = this.product.data.orders;
        this.totalRecords = this.product.data.total;
      } catch (error) {
        console.log(error);
      } finally {
        this.product = toRaw(this.product);
        console.log("order", toRaw(this.product));
      }
    },

    async getstatustoman(par) {
      try {
        this.toman = await $fetch("/api/order/tomanstatus", {
          query: { page: par },
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    },

    async changeStatus(id) {
      try {
        this.data = await $fetch("/api/order/update", {
          method: "POST",
          body: { order_id: id, status: this.statusmodel.code },
        });
        this.getproduct();
      } catch (error) {
        // errors.value = Object.values(error.data.data.message).flat();
        console.log(error);
      } finally {
        console.log("status", toRaw(this.data));
      }
    },
    async conform(to) {
      try {
        let data = await $fetch("/api/order/conform", {
          method: "POST",
          body: { trace_number: to  },
        });
        console.log("to", data);
        this.getproduct();
      } catch (error) {
        // errors.value = Object.values(error.data.data.message).flat();
        console.log(error);
      } finally {
        console.log("status", toRaw(this.data));
      }
    },
    priceser(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    onPageChange(event) {
      this.currentPage = event.page + 1;
      this.getproduct(this.currentPage);
      console.log("event", this.currentPage);
    },

    seeitems(de) {
      this.visible = true;
      this.productde = de;
      console.log("seeitems", this.productde.token);
    },
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
