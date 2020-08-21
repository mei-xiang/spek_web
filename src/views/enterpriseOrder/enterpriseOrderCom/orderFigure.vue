<template>
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
</template>

<script>
import echarts from 'echarts'
let _this
export default {
  props: {},
  mounted() {
    // 生产件数统计图
    this.productionUnits()
    // 设备实时状态
    this.deviceStatus()
    // 缺陷统计图
    this.defectGraph()
  },
  data() {
    _this = this
    return {
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
    }
  },
  watch: {},
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    }, // 分页回调
    pageCallback(val) {
      // console.log(val)
    },
    showOrderDetail() {
      this.dialogTableVisible = true
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

<style lang="less" scoped>
</style>
