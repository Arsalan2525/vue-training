<template>
  <a-card hoverable style="width: 240px">
    <img
      slot="cover"
      alt="example"
      src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />
    <a-card-meta title="Europe Street beat">
      <template slot="description"> www.clothes.com </template>
    </a-card-meta>
  </a-card>
</template>
<script>
export default {
  name: "CardView",
};
</script>