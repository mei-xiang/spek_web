<template>
  <div class="content home">
    <div class="header">
      <img src="../../assets/images/logo.png" alt />
    </div>
    <div class="content">
      <h2>企业列表</h2>
      <div class="box">
        <div class="item">
          <p class="company">深圳市思贝克工业发展有限公司</p>
          <img class="avatar" src="../../assets/images/spek.png" alt />
          <p class="legal">法人：杨志</p>
          <p class="addr">地址：深圳市南山区深南大道大冲商务中心D座18楼</p>
          <p class="register">成立日期：2012/03/27</p>
          <div class="btn" @click="detail">
            <img src="../../assets/images/home_btn.svg" alt />
            <span>查看详情</span>
          </div>
        </div>
        <div class="item">
          <p class="company">深圳市敏特达电子有限公司</p>
          <img class="avatar" src="../../assets/images/mtd.png" alt />
          <p class="legal">法人：舒春松</p>
          <p class="addr">地址：深圳市宝安68区留仙二路鸿辉工业园一栋8楼</p>
          <p class="register">成立日期：2004/12/09</p>
          <div class="btn" @click="detail">
            <img src="../../assets/images/home_btn.svg" alt />
            <span>查看详情</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    detail() {
      this.$router.push({ path: '/enterpriseImage' })
    },
  },
}
</script>

<style lang="less" scoped>
</style>
