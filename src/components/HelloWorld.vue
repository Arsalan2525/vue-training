<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/"> Men's Wear </router-link>
        </a-menu-item>

        <a-menu-item key="2">
          <router-link to="/about"> Foot Wear </router-link>
        </a-menu-item>
        <!-- <router-view /> -->
        <a-menu-item key="3"> Perfume </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <router-view>
        <router-link to="/about"> Categories: </router-link>
      </router-view>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <div>
          <div
            v-for="n in 10"
            v-bind:key="n.id"
            :style="{ marginRight: '1px', display: 'inline-flex' }"
          >
            <CardView />
          </div>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Wear Better !!
    </a-layout-footer>
  </a-layout>
</template>
<script>
import CardView from "./CardView.vue";
export default {
  name: "HelloWorld",
  components: {
    CardView,
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