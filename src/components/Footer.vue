<template>
  <div class="footer">
    <div :class="index == 0 ? 'el checked' : 'el' " @click="goHome">首頁</div>
    <div :class="index == 1 ? 'el checked' : 'el' " @click="goStrategy">攻略</div>
    <div :class="index == 2 ? 'el checked' : 'el' " @click="goInformation">資訊</div>
    <div :class="index == 3 ? 'el checked' : 'el' " @click="goAbout">關於</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.name);
  },
  methods: {
    goHome() {
      if(this.index == 0) {
        return;
      }
      this.$router.push({
        name: "Home"
      });
    },
    goStrategy() {
      if(this.index == 1) {
        return;
      }
      this.$router.push({
        name: "Strategy"
      });
    },
    goInformation() {
      if(this.index ==2) {
        return;
      }
      this.$router.push({
        name: "Information"
      });
    },
    goAbout() {
      if(this.index == 3) {
        return;
      }
      this.$router.push({
        name: "About"
      });
    }
  },
  computed: {
    index() {
      switch (this.$route.name) {
        case "Home":
          return 0;
          break;
        case "Strategy":
          return 1;
          break;
        case "Information":
          return 2;
          break;
        case "About":
          return 3;
          break;
        default:
          -1;
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #ededed;
  display: flex;
  .el {
    flex: 1;
  }
  .checked {
    font-weight: bold;
  }
}
</style>
