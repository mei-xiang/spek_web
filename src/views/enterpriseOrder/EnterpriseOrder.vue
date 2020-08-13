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
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[15, 20, 25, 30]"
              :page-size="10"
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
            <el-tabs class="com_tabs" v-model="unitsStatus" type="card" @tab-click="handleClick">
              <el-tab-pane label="三个月" name="first"></el-tab-pane>
              <el-tab-pane label="半年" name="second"></el-tab-pane>
              <el-tab-pane label="一年" name="third"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="canvas_box">
            <!-- 一年宽度为800  三个月或半年宽度为650 -->
            <div id="production_units" :style="{height:350+'px',width:unitswidth+'px'}"></div>
          </div>
        </div>
        <!-- 设备实时状态 -->
        <div class="order_box device_box" style="background:RGBA(17,23,82,.7)">
          <div class="box_content">
            <p class="com_name" style="margin-bottom:30px">设备实时状态</p>
          </div>
          <div class>
            <div id="device_status" style="height:350px;"></div>
          </div>
        </div>
        <!-- 缺陷统计图 -->
        <div class="order_box" style="background:RGBA(17,23,82,.7)">
          <div class="box_content">
            <p class="com_name">缺陷统计图</p>
            <el-tabs class="com_tabs" v-model="defectStatus" type="card" @tab-click="handleClick">
              <el-tab-pane label="三个月" name="first"></el-tab-pane>
              <el-tab-pane label="半年" name="second"></el-tab-pane>
              <el-tab-pane label="一年" name="third"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="canvas_box">
            <!-- 一年宽度为800  三个月或半年宽度为650 -->
            <div id="defect_graph" :style="{height:350+'px',width:defectwidth+'px'}"></div>
          </div>
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
      unitsData: {
        month: [
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
        ], // x轴月份
        number: [
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
        ], // 件数
      },
      unitswidth: 950, // 生产件数统计画布宽度
      unitsStatus: 'third', // 激活状态

      // 设备实时状态数据
      deviceStatusData: [
        { value: 44, name: '工作' },
        { value: 11, name: '关机' },
        { value: 28, name: '待机' },
        { value: 11, name: '宕机' },
        { value: 6, name: '年检' },
        { value: '', name: '测试' },
        { value: '', name: '维护' },
      ],

      // 缺陷统计图数据
      defectData: {
        month: [
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
        ], // x轴年月份
        qualified: [
          1000,
          1500,
          1800,
          3000,
          2500,
          2200,
          1800,
          2300,
          3000,
          2500,
          2700,
          3600,
        ], // 合格
        badness: [220, 182, 191, 234, 290, 330, 310, 800, 400, 600, 555, 700], // 不良
        rejectRatio: [20, 30, 25, 14, 50, 30, 60, 35, 22, 25, 18, 50], // 不良率
      },
      defectStatus: 'third',
      defectwidth: 950, // 缺陷统计图画布宽度

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
        grid: {
          left: '7.5%',
        },
        xAxis: {
          data: this.unitsData.month,
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
            data: this.unitsData.number,
            barWidth: '20px',
            itemStyle: {
              normal: {
                color: '#4FFFEB',
                barBorderRadius: [30, 30, 0, 0],
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
            left: '222',
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
        tooltip: {
          trigger: 'axis',
          formatter: function (list) {
            let msg = ''
            for (let i in list) {
              if (i == 0) {
                msg += list[i].name + '<br>'
              }
              if (i > 0 && list[i].seriesName == '不良率') {
                msg += list[i].seriesName + '：' + list[i].data + '%<br>'
              } else {
                msg += list[i].seriesName + '：' + list[i].data + '件<br>'
              }
            }
            return msg
          },
        },
        grid: {
          left: '7.5%',
        },
        legend: {
          left: '26px',
          top: '15px',
          textStyle: {
            color: '#91c3ff',
          },
          data: ['合格', '不良', '不良率'],
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#58a5ff',
              width: 2,
            },
          },
          data: this.defectData.month,
        },
        yAxis: [
          {
            type: 'value',
            // name: '件数',
            max: 4000,
            interval: 1000,
            axisLabel: {
              formatter: '{value} ',
            },
            axisLine: {
              lineStyle: {
                color: '#58a5ff',
                width: 2,
              },
            },
            splitLine: {
              //分割线配置
              lineStyle: {
                color: '#58a5ff',
              },
            },
          },
          {
            type: 'value',
            name: '百分比(%)',
            max: 100,
            interval: 25,
            axisLabel: {
              formatter: '{value} ',
            },
            axisLine: {
              lineStyle: {
                color: '#58a5ff',
                width: 2,
              },
            },
            splitLine: {
              //分割线配置
              lineStyle: {
                color: '#58a5ff',
              },
            },
          },
        ],
        series: [
          {
            name: '合格',
            type: 'bar',
            stack: '余额',
            barMaxWidth: 20,
            data: this.defectData.qualified,
            itemStyle: {
              normal: {
                color: '#58A5FF',
              },
            },
          },
          {
            name: '不良',
            type: 'bar',
            stack: '余额',
            barMaxWidth: 20,
            data: this.defectData.badness,
            itemStyle: {
              normal: {
                color: '#FF2A62',
                barBorderRadius: [30, 30, 0, 0],
              },
            },
          },
          {
            name: '不良率',
            data: this.defectData.rejectRatio,
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: '#FF2A62',
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
