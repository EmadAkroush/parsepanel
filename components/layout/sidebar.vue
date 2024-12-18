<template>
  <div class="p-6 sidebar">
    <Menu :model="items" class="w-full" style="border: none">
      <template #start>
        <div class="card flex justify-center mb-8">
          <img src="/public/logo.svg.png" alt="" />
        </div>
      </template>
      <template #item="slotProps">
        <nuxt-link :to="slotProps.item.to">
          <div class="flex align-center menu-item pr-2">
            <div :id="'a' + `${slotProps.item.id}`" class="ml-2"></div>
            {{ slotProps.item.label }}
          </div>
        </nuxt-link>
      </template>
    </Menu>
  </div>
</template>
<style lang="scss">
.sidebar {
  .p-focus {
    .menu-item {
      background-color: #cedccd;
      color: #0c4e07;
      border-radius: 8px;
    }
  }

  width: 100%;
  #a1 {
    background-image: url("/public/sidebar/1.svg");
    width: 24px;
    height: 24px;
  }
  #a2 {
    background-image: url("/public/sidebar/2.svg");
    width: 24px;
    height: 24px;
  }
  #a3 {
    background-image: url("/public/sidebar/3.svg");
    width: 24px;
    height: 24px;
  }
  #a4 {
    background-image: url("/public/sidebar/4.svg");
    width: 24px;
    height: 24px;
  }
  #a5 {
    background-image: url("/public/sidebar/7.svg");
    width: 24px;
    height: 24px;
  }
  #a6 {
    background-image: url("/public/sidebar/8.svg");
    width: 24px;
    height: 24px;
  }
  #a7 {
    background-image: url("/public/sidebar/7.svg");
    width: 24px;
    height: 24px;
  }
  #a8 {
    background-image: url("/public/sidebar/8.svg");
    width: 24px;
    height: 24px;
  }
  #a9 {
    background-image: url("/public/sidebar/9.svg");
    width: 24px;
    height: 24px;
  }
  .icon {
    width: 50px;
    height: 50px;
    background-image: url("../../public/sidebar/1.svg");
    background-size: contain;
    background-repeat: no-repeat;
    color: red;
    fill: #dbea0b;
  }
  .menu {
    width: 100%;
  }
  .active {
    background-color: #cedccd;
    border-radius: 8px;
  }
  .menu-item:hover {
    path {
      stroke: #0c4e07;
    }
  }
  .menu-item {
    align-items: center;
    color: #6b7280;
    height: 48px;
  }
  .menu-item:hover {
    background-color: #f3f6f3;
    border-radius: 8px;
    color: #0c4e07;
  }
}
</style>

<script>
export default {
  data() {
    return {
      // a :"a" ,
      items: [
        {
          label: "داشبورد",
          to: "/",
          id: 1,
        },
        {
          label: "مدیریت محصولات",
          to: "/product",
          id: 2,
        },
        {
          label: "مدیریت پست ها",
          to: "/",
          id: 3,
        },
        {
          label: "مدیریت سفارشات",
          to: "/",
          id: 4,
        },
        {
          label: "مدیریت کاربران",
          to: "/",
          id: 5,
        },
        {
          label: "اطلاعات شخصی",
          to: "/",
          id: 6,
        },

        {
          label: "خروج",
          to: "/",
          id: 9,
        },
        // You can add more items as needed
      ],
    };
  },
};
</script>
