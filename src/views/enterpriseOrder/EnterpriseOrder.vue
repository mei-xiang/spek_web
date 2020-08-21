<template>
  <div class="content enterpriseOrder">
    <!-- 头部区域 -->
    <jr-header></jr-header>
    <div class="order">
      <p class="tit">企业订单信息</p>
      <!-- 订单比率 -->
      <order-rate></order-rate>
      <!-- 订单详情 -->
      <order-list></order-list>
      <!-- 订单图表 -->
      <order-figure></order-figure>
    </div>
  </div>
</template>

<script>
import orderRate from './enterpriseOrderCom/orderRate'
import orderList from './enterpriseOrderCom/orderList'
import orderFigure from './enterpriseOrderCom/orderFigure'
export default {
  data() {
    return {}
  },
  components: {
    orderRate,
    orderList,
    orderFigure,
  },
  mounted() {
    console.log(this.$GlobalDataUtils.getStr())
  },
  methods: {},
}
</script>

<style lang="less" scoped></style>
