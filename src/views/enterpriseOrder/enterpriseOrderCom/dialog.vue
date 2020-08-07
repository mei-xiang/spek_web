<template>
  <div class="orderDialog" v-if="orderDetail&&Object.keys(orderDetail).length>0">
    <el-dialog title="DD002订单详情" :visible.sync="isShowDialog" @close="handleClose" width="1695px">
      <div>
        <div class="info_box">
          <div class="item">
            <div class="order_info">
              <div>
                <span>合同编号：</span>
                <span>{{orderDetail.address1}}</span>
              </div>
              <div>
                <span>贸易对手：</span>
                <span>{{orderDetail.address2}}</span>
              </div>
              <div>
                <span>订单金额：</span>
                <span>{{orderDetail.address3}}</span>元
              </div>
              <div>
                <span>货物名称：</span>
                <span>{{orderDetail.address4}}</span>
              </div>
              <div>
                <span>货物数量：</span>
                <span>{{orderDetail.address5}}</span>
              </div>
              <div>
                <span>使用工艺：</span>
                <span>{{orderDetail.address6}}</span>
              </div>
              <div>
                <span>交货日期：</span>
                <span>{{orderDetail.address7}}</span>
              </div>
              <div>
                <span>目前延期天数：</span>
                <span>{{orderDetail.address8}}</span>
              </div>
              <div>
                <span>当前状态：</span>
                <span>制作中</span>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>批次列表</h3>
            <div class="info">
              <el-table :data="productDetailData" border :stripe="false" style="width: 100%">
                <el-table-column type="index" label="序号" width="70"></el-table-column>
                <el-table-column prop="address1" label="批次号"></el-table-column>
                <el-table-column prop="address2" label="数量"></el-table-column>
                <el-table-column prop="address3" label="单位"></el-table-column>
                <el-table-column prop="address4" label="使用工艺"></el-table-column>
                <el-table-column prop="address5" label="当前状态"></el-table-column>
                <el-table-column prop="address6" label="所在机台"></el-table-column>
                <el-table-column prop="address7" label="完成情况"></el-table-column>
                <el-table-column prop="address8" label="缺陷统计"></el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogTableVisible: {
      type: Boolean,
      default: false,
    },
    productDetailData: {
      type: Array,
      default: function () {
        return []
      },
    },
    orderDetail: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  data() {
    return {
      isShowDialog: null,
    }
  },
  watch: {
    dialogTableVisible(val) {
      this.isShowDialog = val
    },
  },
  methods: {
    handleClose() {
      this.$emit('handleClose')
    },
  },
}
</script>

<style lang="less" scoped>
</style>
