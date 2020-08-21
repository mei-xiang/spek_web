<template>
  <el-pagination
    :show-total="isTotal"
    :show-elevator="isElevator"
    :show-sizer="isSizer"
    :total="count"
    :page-size="pageSize"
    :page-sizes="pageSizes"
    :current-page.sync="pageNum"
    layout="total, prev, pager, next, jumper"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  ></el-pagination>
</template>

<script>
export default {
  name: 'myPage',
  props: {
    myCount: {
      // 总数页
      type: [Number, String],
      default: 1,
    },
    myPageSize: {
      type: [Number, String],
      default: 10,
    },
    pageCurNum: {
      // 当前页数
      type: [Number, String],
      default: 1,
    },
    myPageSizes: {
      type: Array,
      default: function () {
        return [10, 15, 20, 25]
      },
    },
    myIsSizer: {
      // 显示分页
      type: Boolean,
      default: false,
    },
    myIsTotal: {
      // 显示总条数
      type: Boolean,
      default: true,
    },
    myIsElevator: {
      // 显示总条数
      type: Boolean,
      default: true,
    },
    callBack: {
      type: Function,
      default: function () {
        return {}
      },
    },
  },
  data() {
    return {
      count: this.myCount,
      pageSize: this.myPageSize,
      pageNum: this.pageCurNum,
      pageSizes: this.myPageSizes,
      isTotal: this.myIsTotal,
      isSizer: this.myIsSizer,
      isElevator: this.myIsElevator,
    }
  },
  methods: {
    /**
     * 分页大小发生改变
     *
     * @param {value} 当前的分页大小
     */
    handleSizeChange(val) {
      this.callBack({ pageSize: val })
    },
    /**
     * 分页码发生改变处理
     *
     * @param {value} 当前的分页码
     */
    handleCurrentChange(val) {
      this.callBack({ pageNum: val })
    },
  },
}
</script>

<style></style>
