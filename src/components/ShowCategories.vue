<template>
  <div>
    <div
      v-for="n in result"
      v-bind:key="n.id"
      :style="{ marginRight: '20px', display: 'inline-flex' }"
    >
      <router-link
        :to="{
          name: 'test',
          params: {
            name: $route.params.name,
            id: id,
            cat_name: n.name,
            cat_id: n.id,
          },
        }"
      >
        <CardView :title="n.name" :description="n.name" :source="n.src" />
      </router-link>
      <!-- :source="n.src" -->
    </div>
  </div>
</template>
<script>
import CardView from "./CardView.vue";
// import ShowProducts from "./ShowProducts.vue";
export default {
  name: "ShowCategories",
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      result: [],
    };
  },
  created() {
    this.result = this.$store.getters.getCattegory(this.id);
  },
  components: {
    CardView,
    // ShowProducts,
  },
  computed: {
    console: () => console,
    window: () => window,
  },
  watch: {
    "$route.params"(newObj) {
      this.id = newObj.id;
      this.result = this.$store.getters.getCattegory(this.id);
    },
  },
};
</script>