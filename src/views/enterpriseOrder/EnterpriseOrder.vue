<template>
  <div class="content enterpriseOrder">
    <jr-header></jr-header>
    <div class="order">
      <p class="tit">企业订单信息</p>
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
          <el-table :data="productData" border :stripe="false" style="width: 100%">
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
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </div>
      </div>
      <div class="figure">
        <!-- 生产件数统计 -->
        <div class="order_box" style="background:RGBA(17,23,82,.7);">
          <div class="box_content">
            <p class="com_name">生产件数统计</p>
            <el-tabs class="com_tabs" v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="三个月" name="first"></el-tab-pane>
              <el-tab-pane label="半年" name="second"></el-tab-pane>
              <el-tab-pane label="一年" name="third"></el-tab-pane>
            </el-tabs>
          </div>
          <div id="production_units" style="height:300px;"></div>
        </div>
        <!-- 设备实时状态 -->
        <div class="order_box" style="background:RGBA(17,23,82,.7)">
          <div class="box_content">
            <p class="com_name" style="margin-bottom:30px">设备实时状态</p>
          </div>
          <div id="device_status" style="height:300px;"></div>
        </div>
        <!-- 缺陷统计图 -->
        <div class="order_box" style="background:RGBA(17,23,82,.7)">
          <div class="box_content">
            <p class="com_name">缺陷统计图</p>
            <el-tabs class="com_tabs" v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="三个月" name="first"></el-tab-pane>
              <el-tab-pane label="半年" name="second"></el-tab-pane>
              <el-tab-pane label="一年" name="third"></el-tab-pane>
            </el-tabs>
          </div>
          <div id="defect_graph" style="height:300px;overflow: auto;"></div>
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
import echarts from 'echarts'
import detailDialog from './enterpriseOrderCom/dialog'
let _this
export default {
  data() {
    _this = this
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
      currentPage: 1,
      // 生产件数统计数据
      unitsData: [
        2000,
        2000,
        3000,
        4000,
        2000,
        2500,
        2000,
        2000,
        3000,
        4000,
        2000,
        2500,
      ],
      // 设备实时状态数据
      deviceStatusData: [
        { value: 48, name: '工作' },
        { value: 16, name: '关机' },
        { value: 33, name: '待机' },
        { value: 14, name: '宕机' },
        { value: 6, name: '年检' },
        { value: '', name: '测试' },
        { value: '', name: '维护' },
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
  components: {
    detailDialog,
  },
  mounted() {
    // 生产件数统计图
    this.productionUnits()
    // 设备实时状态
    this.deviceStatus()
    // 缺陷统计图
    this.defectGraph()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    showOrderDetail() {
      this.dialogTableVisible = true
    },
    handleClose() {
      this.dialogTableVisible = false
    },
    productionUnits() {
      var myChart = echarts.init(document.getElementById('production_units'))
      var option = {
        title: {},
        tooltip: { trigger: 'axis', confine: true },
        legend: {},
        xAxis: {
          data: [
            '2020/01',
            '2020/02',
            '2020/03',
            '2020/04',
            '2020/05',
            '2020/06',
            '2020/07',
            '2020/08',
            '2020/09',
            '2020/10',
            '2020/11',
            '2020/12',
          ],
          axisLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
          splitLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
        },
        series: [
          {
            type: 'bar',
            data: this.unitsData,
            barWidth: '20px',
            itemStyle: {
              normal: {
                color: '#4FFFEB',
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
              },
            },
          },
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    deviceStatus() {
      var myChart = echarts.init(document.getElementById('device_status'))
      var option = {
        color: [
          '#00C809',
          '#AEAEAE',
          '#58A5FF',
          '#EEBC3B',
          '#FF2A62',
          '#B357FF',
          '#3AA25D',
        ],
        legend: {
          orient: 'vertical',
          icon: 'circle',
          left: '0px',
          top: 'center',
          textStyle: {
            color: '#91c3ff',
          },
          formatter: function (name) {
            let res = _this.deviceStatusData.filter((v) => v.name === name)
            res = res[0] || {}
            if (!res.value) return name + '：' + '暂无'
            return name + '：' + res.value + '台'
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        graphic: [
          {
            type: 'group',
            top: 'middle',
            left: '205',
            id: 'data',
            children: [
              {
                type: 'text',
                id: 'current',
                top: 25,
                style: {
                  text: '100',
                  font: 'bolder 26px "Microsoft YaHei", sans-serif',
                  fill: '#91c3ff',
                  textAlign: 'center',
                },
              },
              {
                type: 'text',
                id: 'all',
                top: 65,
                style: {
                  text: '机器总数',
                  font: 'bolder 20px "Microsoft YaHei", sans-serif',
                  fill: '#91c3ff',
                  textAlign: 'center',
                },
              },
            ],
          },
        ],
        series: [
          {
            type: 'pie',
            data: this.deviceStatusData,
            name: '比例',
            radius: ['50%', '80%'],
            left: 110,
            label: {
              show: true,
              fontSize: '12',
              position: 'inside',
              formatter: (params) => {
                return `${params.percent}%`
              },
            },
            emphasis: {
              label: {
                fontSize: '14',
                fontWeight: 'bold',
              },
            },
          },
        ],
      }
      myChart.setOption(option)
    },
    defectGraph() {
      var myChart = echarts.init(document.getElementById('defect_graph'))
      var option = {
        title: {},
        tooltip: { trigger: 'axis', confine: true },
        legend: {},
        xAxis: {
          data: ['2020/01', '2020/02', '2020/03'],
          axisLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
          splitLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
        },
        series: [
          {
            type: 'bar',
            data: [1000, 2000, 3000, 4000],
            barWidth: '20px',
            itemStyle: {
              normal: {
                color: '#4FFFEB',
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
              },
            },
          },
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
  },
}
</script>

<style lang="less" scoped></style>
