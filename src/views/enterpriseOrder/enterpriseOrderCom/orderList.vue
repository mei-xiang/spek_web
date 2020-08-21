<template>
  <div>
    <div class="order_box" style="background:RGBA(17,23,82,.7)">
      <div class="box_content">
        <p class="com_name">生产订单列表</p>
        <el-tabs class="com_tabs" v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="三个月" name="first"></el-tab-pane>
          <el-tab-pane label="半年" name="second"></el-tab-pane>
          <el-tab-pane label="一年" name="third"></el-tab-pane>
        </el-tabs>
      </div>
      <div>
        <el-table
          :data="productData"
          border
          :stripe="false"
          style="width: 100%"
          class="order_table"
        >
          <el-table-column prop="address1" label="订单编号"></el-table-column>
          <el-table-column prop="address2" label="合同编号"></el-table-column>
          <el-table-column prop="address3" label="贸易对手"></el-table-column>
          <el-table-column prop="address4" label="订单金额(元)"></el-table-column>
          <el-table-column prop="address5" label="货物名称"></el-table-column>
          <el-table-column prop="address6" label="工艺名称"></el-table-column>
          <el-table-column prop="address7" label="交货日期"></el-table-column>
          <el-table-column prop="address8" label="目前延期天数"></el-table-column>
          <el-table-column prop="address9" label="完成比(%)"></el-table-column>
          <el-table-column prop="address10" label="当前状态"></el-table-column>
          <el-table-column prop="address11" label="操作">
            <template>
              <span class="look" @click="showOrderDetail()">查看详情</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div style="text-align:center;margin:25px 0;">
          <my-page
            :pageCurNum="2"
            :myPageSize="15"
            :myCount="73"
            :callBack="pageCallback"
            key="mypage"
          ></my-page>
        </div>
      </div>
    </div>
    <!-- 订单详情 -->
    <detail-dialog
      :dialogTableVisible="dialogTableVisible"
      :productDetailData="productDetailData"
      :orderDetail="orderDetail"
      @handleClose="handleClose"
    ></detail-dialog>
  </div>
</template>

<script>
import detailDialog from './detailDialog'
export default {
  props: {},

  data() {
    return {
      activeName: 'first', // tabs标签页
      productData: [
        {
          address1: 'DD002',
          address2: 'HT001',
          address3: '迅腾科技',
          address4: '1,000,000',
          address5: '专业防护服',
          address6: 'TED0002',
          address7: '04-01',
          address8: '未延期',
          address9: '80',
          address10: '制作中',
        },
        {
          address1: 'DD002',
          address2: 'HT001',
          address3: '迅腾科技',
          address4: '1,000,000',
          address5: '专业防护服',
          address6: 'TED0002',
          address7: '04-01',
          address8: '未延期',
          address9: '80',
          address10: '制作中',
        },
        {
          address1: 'DD002',
          address2: 'HT001',
          address3: '迅腾科技',
          address4: '1,000,000',
          address5: '专业防护服',
          address6: 'TED0002',
          address7: '04-01',
          address8: '未延期',
          address9: '80',
          address10: '制作中',
        },
        {
          address1: 'DD002',
          address2: 'HT001',
          address3: '迅腾科技',
          address4: '1,000,000',
          address5: '专业防护服',
          address6: 'TED0002',
          address7: '04-01',
          address8: '未延期',
          address9: '80',
          address10: '制作中',
        },
      ],

      // 对话框数据
      dialogTableVisible: false,
      productDetailData: [
        {
          address1: 'PC001',
          address2: '1000',
          address3: '箱',
          address4: 'TED001',
          address5: '制作中',
          address6: 'JT001',
          address7: '800/1000',
          address8: '0.01%',
        },
        {
          address1: 'PC002',
          address2: '1000',
          address3: '箱',
          address4: 'TED001',
          address5: '制作中',
          address6: 'JT001',
          address7: '800/1000',
          address8: '0.01%',
        },
        {
          address1: 'PC003',
          address2: '1000',
          address3: '箱',
          address4: 'TED001',
          address5: '制作中',
          address6: 'JT001',
          address7: '800/1000',
          address8: '0.01%',
        },
      ],
      orderDetail: {
        address1: 'DD002',
        address2: '迅腾科技',
        address3: '1,000,000',
        address4: '专业防护服',
        address5: '10000',
        address6: 'TED001',
        address7: '2020-04-01',
        address8: '未延期',
      },
    }
  },
  watch: {},
  mounted() {},
  components: {
    detailDialog,
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    }, // 分页回调
    pageCallback(val) {
      // console.log(val)
    },
    handleClose() {
      this.dialogTableVisible = false
    },
    showOrderDetail() {
      this.dialogTableVisible = true
    },
  },
}
</script>

<style lang="less" scoped>
</style>
