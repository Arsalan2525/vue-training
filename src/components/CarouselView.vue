<template>
  <a-carousel autoplay>
    <div>
      <!-- <img
        slot="cover"
        alt="example"
        src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />-->
      <!-- <img
        slot="cover"
        alt="example"
        src=""
      /> -->

      <img
        slot="cover"
        alt="example"
        src="https://img.gs/bcrpslzscw/500x500,fit/https://www.jcmbazar.com/uploaded/product/tailors6.jpg"
      />
    </div>
    <div>
      <h1 style="color: white; font-size: bold">
        Get Ready for amazing Discounts :)
      </h1>
    </div>
    <div>
      <img
        slot="cover"
        alt="example"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ3SkMPYFl0gFYAQgwHSiwfUDfUKZLEyWsA&usqp=CAU"
        style="width: 90%; height: 250px; margin-left: 3%; margin-top: 4%"
      />
      <!-- <h2>Wait is Over !!</h2> -->
    </div>
    <div><h1 style="color: white; font-size: bold">All in Rs 1000/-</h1></div>
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
  height: 350px;
  line-height: 350px;
  background: rgb(51, 46, 46);
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3,
h2 {
  color: #fff;
}
</style>