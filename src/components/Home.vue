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
    </a-carousel>-->
    我是home
  </div>
</template>

<script>
import Service from "../../api/user";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(
      "曾中应出品%c+",
      `font-size: 1px;
  padding: 60px 60px;
  background-image: url(https://b-ssl.duitang.com/uploads/item/201806/29/20180629193026_vviex.thumb.700_0.gif);
  background-size: contain;
  background-repeat: no-repeat;
  color: transparent;
  opacity: 0.1;`
    );
    Service.getUser().then(data => {
      // console.log(data, 'data')
    });

    Service.getUserName({ id: 1 }).then(data => {
      console.log(data, "data");
    });
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
