<template>
  <div class="info">
    <div class="left order_box">
      <div class="box_content">
        <p class="com_name">思贝克</p>
        <el-tabs class="com_tabs" v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="三个月" name="first"></el-tab-pane>
          <el-tab-pane label="半年" name="second"></el-tab-pane>
          <el-tab-pane label="一年" name="third"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="box">
        <div class="item">
          <p class="item_top">
            <span class="number">2000</span>
            <span class="unit">单</span>
          </p>
          <p class="item_bottom">新增订单</p>
        </div>
        <div class="item">
          <p class="item_top">
            <span class="number">2000</span>
            <span class="unit">单</span>
          </p>
          <p class="item_bottom">完成订单</p>
        </div>
        <div class="item">
          <p class="item_top">
            <span class="number">1500</span>
            <span class="unit">单</span>
          </p>
          <p class="item_bottom">交货订单</p>
        </div>
        <div class="item">
          <p class="item_top">
            <span class="number">85</span>
            <span class="unit">%</span>
          </p>
          <p class="item_bottom">完成率</p>
        </div>
      </div>
    </div>
    <div class="right order_box">
      <div class="box_content">
        <p class="com_name">订单营收状况</p>
        <el-tabs class="com_tabs" v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="三个月" name="first"></el-tab-pane>
          <el-tab-pane label="半年" name="second"></el-tab-pane>
          <el-tab-pane label="一年" name="third"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="box revenue_statu">
        <div class="item">
          <p class="item_top">
            <span class="number">800.26</span>
            <span class="unit">万</span>
          </p>
          <p class="item_bottom">总金额</p>
        </div>
        <div class="item">
          <p class="item_top">
            <span class="number">700.34</span>
            <span class="unit">万</span>
          </p>
          <p class="item_bottom">已回款金额</p>
        </div>
        <div class="item">
          <p class="item_top">
            <span class="number">99.86</span>
            <span class="unit">万</span>
          </p>
          <p class="item_bottom">未回款金额</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  mounted() {},
  data() {
    return {
      activeName: 'first', // tabs标签页
    }
  },
  watch: {},
  methods: {
    handleClick(tab, event) {
      // this.$emit('handleTabClick',this.activeName)
      console.log(tab, event)
    },
  },
}
</script>

<style lang="less" scoped>
</style>
