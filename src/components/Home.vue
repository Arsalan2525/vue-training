<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="[this.$route.params.id]"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/menwear/1"> Men's Wear </router-link>
        </a-menu-item>

        <a-menu-item key="2">
          <router-link to="/footwear/2"> Foot Wear </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/perfume/3"> Perfume </router-link>
        </a-menu-item>
        <a-menu-item>
          <a-button @click="handleButton">Cart Status</a-button>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <div>
          <ShowCategories />
          <CartItem
            :isVisible="isCartVisible"
            :showModal="showCartModal"
            :handleOk="handleCartModalOk"
            :handleCancel="handleCartModalCancel"
          />
        </div>
      </div>

      <router-view :key="$route" />
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Looks Better !!
    </a-layout-footer>
  </a-layout>
</template>
<script>
import ShowCategories from "./ShowCategories.vue";
import CartItem from "./CartItem.vue";
export default {
  name: "Home",
  data() {
    return {
      isCartVisible: false,
    };
  },
  components: {
    ShowCategories,
    CartItem,
  },
  created() {
    this.result = this.$store.getters.getCattegory(this.id);
  },
  computed: {
    console: () => console,
    window: () => window,
  },
  methods: {
    handleButton() {
      this.isCartVisible = true;
    },
    showCartModal() {
      this.isCartVisible = true;
    },
    handleCartModalOk() {
      this.isCartVisible = false;
    },
    handleCartModalCancel() {
      this.isCartVisible = false;
    },
  },
};
</script>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>