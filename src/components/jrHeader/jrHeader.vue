<template>
  <!-- <div class="box"> -->
    <div class="header">
      <img src="../../assets/images/logo.png" alt />
      <ul>
        <li>
          <router-link to="/enterpriseImage" :class="{ isActive: $route.path=='/enterpriseImage' }">
            <span>企业画像</span>
          </router-link>
        </li>
        <li>
          <router-link to="/deviceTopology" :class="{ isActive: $route.path=='/deviceTopology' }">
            <span>设备拓扑图</span>
          </router-link>
        </li>
        <li>
          <router-link to="/enterpriseOrder" :class="{ isActive: $route.path=='/enterpriseOrder' }">
            <span>企业订单信息</span>
          </router-link>
        </li>
      </ul>

      <span @click="toggle" class="toggle">切换企业</span>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    toggle() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style lang="less" scoped>
.box{
  width: 100%;
  position: relative;
}
.header {
  line-height: 60px;
  background: rgba(9, 17, 95, 0.8);
  border-bottom: 2px solid #3e5984;
  padding: 0 15px;
  color: rgba(184, 217, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999999;
  img {
    width: 146px;
    height: 21px;
    transform: translateY(5px);
  }
  ul {
    float: right;
    margin-right: 190px;
    li {
      float: left;
      line-height: 57px;
      cursor: pointer;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 0 40px;
        color: rgba(184, 217, 255, 0.8);
        &:hover {
          background-color: RGBA(9, 35, 127, 0.8);
          color: rgb(202, 227, 255);
          border-bottom: 3px solid #58a5ff;
        }
        &.isActive {
          background-color: RGBA(9, 35, 127, 0.8);
          color: rgb(202, 227, 255);
          border-bottom: 3px solid #58a5ff;
        }
      }
    }
  }
  .toggle {
    position: absolute;
    padding: 0 40px;
    right: 0;
    top: 0;
    cursor: pointer;
    &:hover {
      background-color: RGBA(9, 35, 127, 0.8);
      color: rgb(202, 227, 255);
      border-bottom: 3px solid #58a5ff;
    }
  }
}
</style>
