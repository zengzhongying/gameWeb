<template>
  <div class="header">
    <div class="el-one">
      <div class="goBack">
        <img src="../assets/fanhui.png" alt />
      </div>
    </div>
    <div class="el-content">我是title</div>
    <div class="el-one">
      <!-- <a-button type="primary" @click="showDrawer">Open</a-button> -->
      <div class="menuShow">
        <img src="../assets/caidan.png" @click="showDrawer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    showDrawer() {
      this.$emit("showDrawer");
    },
    onClose() {
      this.$emit("onClose");
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #ededed;
  display: flex;
  .el-one {
    flex: 1;
    .menuShow {
      display: inline-block;
      margin-left: 60px;
    }
    .goBack {
      display: inline-block;
      margin-right: 30px;
    }
  }
  .el-content {
    flex: 2;
  }
}
</style>
