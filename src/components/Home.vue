<template>
  <div class="home">
    <!-- <a-carousel autoplay>
      <div>
        <img src="../assets/banner1.png" alt />
      </div>
      <div>
        <img src="../assets/banner2.jpg" alt />
      </div>
      <div>
        <img src="../assets/banner3.jpg" alt />
      </div>
    </a-carousel> -->
    home
  </div>
</template>

<script>
import Service from '../../api/user'
export default {
  data() {
    return {};
  },
  mounted() {
    Service.getUser().then(data => {
      // console.log(data, 'data')
    })
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
