<template>
  <a-card hoverable style="width: 240px">
    <img
      slot="cover"
      alt="example"
      :src="source"
      style="width: 238px; height: 190px"
    />
    <a-card-meta :title="title" border-variant="primary">
      <template slot="description"> {{ description + "\n" + price }}</template>
      <!-- <br /> -->
      <!-- <template slot="price"> {{ price }} </template> -->
    </a-card-meta>
  </a-card>
</template>
<script>
export default {
  name: "CardView",
  props: {
    source: String,
    description: String,
    title: String,
    border: String,
    price: String,
  },
};
</script>