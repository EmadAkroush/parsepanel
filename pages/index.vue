<template>
  <div class="main p-6">
    <div class="flex sec1">
      <div class="flex align-center">
        <img src="/public/opration/icons-Line-truck.png" alt="" class="pic" />

        <div class="mr-2 text-right">
          <p class="text-right">داشبورد</p>
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
    <div class="body mt-4">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-4">
          <div
            class="card"
            style="
              background-color: #ffffff;
              border-radius: 16px;
              box-shadow: 0px 0px 12px 0px #0000000f;
            "
          >
            <div class="mx-auto p-6">
              <h2 class="font-bold mb-4 text-right">فروش های های انجام شده</h2>
          
              <Chart
                type="line"
                :data="chartData1"
                :options="chartOptions1"
                class="w-full mt-10"
                style="height: 200px"
              />
            </div>
          </div>
        </div>
        <div class="col-span-8">
          <div
            class="card"
            style="
              background-color: #ffffff;
              border-radius: 16px;
              box-shadow: 0px 0px 12px 0px #0000000f;
            "
          >
            <div class="p-6 mx-auto">
              <h2 class="text-2xl font-bold mb-4 text-right">
               فروش های انجام شده
              </h2>
              <Chart
                type="bar"
                :data="chartData"
                :options="chartOptions"
                class="w-full"
                style="height: 250px"
              />
            </div>
          </div>
        </div>
      </div>
     <button @click="brans()">rfff </button>
  
    
    
     
    </div>
  </div>
</template>
<style lang="scss">
.main {
  background-color: #f3f4f6;
  min-height: 100vh;
  .p-datatable-header-cell {
    background-color: #f5f5f5;
    color: #888888;
    text-align: center;
  }
  .card {
    padding: 24px;
    width: 100%;
  }
  .box {
    width: 100%;
    height: 182px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      products: [
        {
          code: "ردیف",
          name: "نام راننده",
          category: "تاریخ درخواست",
          price: "وضعیت",
        },
        {
          code: "ردیف",
          name: "نام راننده",
          category: "تاریخ درخواست",
          price: "وضعیت",
        },
        {
          code: "ردیف",
          name: "نام راننده",
          category: "تاریخ درخواست",
          price: "وضعیت",
        },
      ],
      tableData: [
        {
          id: 1,
          index: 1,
          driverName: "فربد رضایی زرگر",
          driverAvatar: "path/to/avatar1.png",
          code: "۵۵۵۵۵۵۵",
          requestDate: "۱۴۰۳ رجب",
          serialNumber: "POFDFADF",
          carType: "پراید",
          accountNumber: "۷۲۳۴۵۶۷۸۹۱۲۳۴",
          status: "پرداخت شد",
        },
        {
          id: 2,
          index: 2,
          driverName: "فربد رضایی زرگر",
          driverAvatar: "path/to/avatar2.png",
          code: "۵۵۵۵۵۵۵",
          requestDate: "۱۴۰۳ رجب",
          serialNumber: "POFDFADF",
          carType: "پراید",
          accountNumber: "۷۲۳۴۵۶۷۸۹۱۲۳۴",
          status: "پرداخت شد",
        },
      ],
      chartData: {
        labels: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذز",
          "دی",
          "بهمن",
          "اسفند",
        ],
        datasets: [
          {
            label: "درحال اماده سازی",
            backgroundColor: "rgba(34, 197, 94, 0.6)",
            data: [65, 59, 80, 81, 56, 55, 40, 65, 80, 35, 40, 85],
          },
          {
            label: "درحال ارسال",
            backgroundColor: "rgba(34, 197, 94, 0.4)",
            data: [28, 48, 40, 19, 86, 27, 90, 80, 100, 96, 45, 65],
          },
          {
            label: "ارسال شده",
            backgroundColor: "rgba(34, 197, 94, 0.2)",
            data: [18, 48, 77, 9, 100, 27, 40, 90, 20, 85, 96, 75],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
      // Chart Data
      chartData1: {
        labels: ["۰۰", "۰۴", "۰۸", "۱۲", "۱۶", "۲۰", "24"],
        datasets: [
          {
            label: "عنوان پیش فرض",
            data: [2, 4, 6, 8, 7, 9, 10],
            fill: false,
            borderColor: "#6366F1", // Blue Line
            backgroundColor: "#6366F1",
            tension: 0.4,
          },
          {
            label: "عنوان پیش فرض",
            data: [1, 3, 5, 5, 6, 8, 12],
            fill: false,
            borderColor: "#10B981", // Green Line
            backgroundColor: "#10B981",
            tension: 0.4,
          },
        ],
      },
      // Chart Options
      chartOptions1: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: false,
            },
          },
          y: {
            display: false,
          },
        },
      },
    };
  },
  methods: {
    async brans() {
      try {
        this.data = await $fetch('/brand', {
          method: "POST",
          body: { name: "test3" , display_name : "fgfgf"},
        });
      } catch (error) {
        // errors.value = Object.values(error.data.data.message).flat();
        console.log(error);
      } finally {
        console.log("ddd", this.data);
      }
    },
  },


};
</script>

<script setup>

definePageMeta({
  middleware: "auth",
});
</script>