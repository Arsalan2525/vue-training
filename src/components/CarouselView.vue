<template>
  <a-carousel autoplay>
    <div>
      <!-- <img
        slot="cover"
        alt="example"
        src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />z -->
      <h3>1</h3>
    </div>
    <div><h3>2</h3></div>
    <div>
      <!-- <img
        slot="cover"
        alt="example"
        src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" -->
      <!-- /> -->
      <h2>Wait is Over !!</h2>
    </div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>
<script>
export default {
  name: "CarouselView",
};
</script>
<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 250px;
  line-height: 250px;
  background: rgb(51, 46, 46);
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3,
h2 {
  color: #fff;
}
</style>