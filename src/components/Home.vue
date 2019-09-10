<template>
  <div class="home">
    <a-carousel autoplay>
      <div>
        <img src="../assets/banner1.png" alt />
      </div>
      <div>
        <img src="../assets/banner2.jpg" alt />
      </div>
      <div>
        <img src="../assets/banner3.jpg" alt />
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.home {
  .ant-carousel {
    .slick-slide {
      img {
        width: 100%;
        height: 180px;
      }
    }
  }
}
</style>
