<template>
  <div class="content home">
    <div class="header">
      <img src="../../assets/images/logo.svg" alt />
    </div>
    <div class="search">
      <div class="left">
        <h2>
          企业列表
          <span class="chunk"></span>
        </h2>
      </div>
      <div class="right">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="formInline.name" placeholder="输入企业名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-cascader
              v-model="formInline.area"
              :options="areaList"
              @change="handleChange"
              placeholder="选择地区"
            ></el-cascader>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="formInline.dateTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search"></el-button>
            <el-button type="primary" icon="el-icon-refresh"></el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="main">
      <div class="box">
        <div class="item">
          <div class="title" @click="detail">
            <img class="avatar" src="../../assets/images/home_logo.png" alt />
            <p>深圳市思贝克工业发展有限公司</p>
            <i class="iconfont l_icon arrow">&#xe724;</i>
          </div>
          <div class="info">
            <p>
              <i class="iconfont l_icon">&#xe73a;</i>
              <span class="r_info">杨志</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe722;</i>
              <span class="r_info">深圳市南山区深南大道大冲商务中心D座18楼</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe736;</i>
              <span class="r_info">2012/03/27</span>
            </p>
          </div>
        </div>
        <div class="item">
          <div class="title" @click="detail">
            <img class="avatar" src="../../assets/images/home_logo.png" alt />
            <p>深圳市思贝克工业发展有限公司</p>
            <i class="iconfont l_icon arrow">&#xe724;</i>
          </div>
          <div class="info">
            <p>
              <i class="iconfont l_icon">&#xe73a;</i>
              <span class="r_info">杨志</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe722;</i>
              <span class="r_info">深圳市南山区深南大道大冲商务中心D座18楼</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe736;</i>
              <span class="r_info">2012/03/27</span>
            </p>
          </div>
        </div>
        <div class="item">
          <div class="title" @click="detail">
            <img class="avatar" src="../../assets/images/home_logo.png" alt />
            <p>深圳市思贝克工业发展有限公司</p>
            <i class="iconfont l_icon arrow">&#xe724;</i>
          </div>
          <div class="info">
            <p>
              <i class="iconfont l_icon">&#xe73a;</i>
              <span class="r_info">杨志</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe722;</i>
              <span class="r_info">深圳市南山区深南大道大冲商务中心D座18楼</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe736;</i>
              <span class="r_info">2012/03/27</span>
            </p>
          </div>
        </div>
        <div class="item">
          <div class="title" @click="detail">
            <img class="avatar" src="../../assets/images/home_logo.png" alt />
            <p>深圳市思贝克工业发展有限公司</p>
            <i class="iconfont l_icon arrow">&#xe724;</i>
          </div>
          <div class="info">
            <p>
              <i class="iconfont l_icon">&#xe73a;</i>
              <span class="r_info">杨志</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe722;</i>
              <span class="r_info">深圳市南山区深南大道大冲商务中心D座18楼</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe736;</i>
              <span class="r_info">2012/03/27</span>
            </p>
          </div>
        </div>
        <div class="item">
          <div class="title" @click="detail">
            <img class="avatar" src="../../assets/images/home_logo.png" alt />
            <p>深圳市思贝克工业发展有限公司</p>
            <i class="iconfont l_icon arrow">&#xe724;</i>
          </div>
          <div class="info">
            <p>
              <i class="iconfont l_icon">&#xe73a;</i>
              <span class="r_info">杨志</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe722;</i>
              <span class="r_info">深圳市南山区深南大道大冲商务中心D座18楼</span>
            </p>
            <p>
              <i class="iconfont l_icon">&#xe736;</i>
              <span class="r_info">2012/03/27</span>
            </p>
          </div>
        </div>

      </div>
      <!-- 分页 -->
      <div class="homePage">
        <my-page :pageCurNum="2" :myPageSize="15" :myCount="73" :callBack="callback" key="homePage"></my-page>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        name: '',
        area: '',
        dateTime: '',
      },
      areaList: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    detail() {
      this.$router.push({ path: '/enterpriseImage' })
    },
    handleChange(value) {
      // console.log(value)
    },
    callback(val) {
      // console.log(val)
    },
  },
}
</script>

<style lang="less" scoped>
@import '~assets/iconfont/iconfont.css';
</style>
