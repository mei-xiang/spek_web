<template>
  <div class="header">
    <img src="../../assets/images/logo.svg" alt />
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

    <span @click="toggle" class="toggle">
      <i class="iconfont l_icon toggle_com">&#xe719;</i>
      <span>切换企业</span>
    </span>
  </div>
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
.box {
  width: 100%;
  position: relative;
}
.header {
  height: 54px;
  line-height: 54px;
  background: rgba(30, 86, 160, 1);
  padding: 0 0 0 15px;
  color: rgba(255, 255, 255, 1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
  }
  ul {
    li {
      float: left;
      line-height: 54px;
      cursor: pointer;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 0 40px;
        border-top: 4px solid transparent;
        color: rgba(255, 255, 255, 1);
        line-height: 50px;
        &:hover {
          background: rgba(10, 31, 68, 0.29);
          border-top: 4px solid rgba(0, 127, 255, 1);
        }
        &.isActive {
          background: rgba(10, 31, 68, 0.29);
          border-top: 4px solid rgba(0, 127, 255, 1);
        }
      }
    }
  }
  .toggle {
    padding: 0 40px;
    right: 0;
    top: 0;
    height: 54px;
    line-height: 50px;
    border-top: 4px solid transparent;
    cursor: pointer;
    &:hover {
      background: rgba(10, 31, 68, 0.29);
      border-top: 4px solid rgba(0, 127, 255, 1);
    }
    .toggle_com {
      font-size: 24px;
    }
    i,
    span {
      vertical-align: middle;
    }
  }
}
</style>
