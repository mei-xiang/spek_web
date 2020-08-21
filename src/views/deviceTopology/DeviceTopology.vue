<template>
  <div class="content deviceTopology">
    <jr-header></jr-header>
    <div class="device_box">
      <!-- :style="{width: '150px',height:'100px'} 设置设备的宽度 高度
           :style="{backgroundColor: statusColor[5]} 设置设备的状态颜色
      -->
      <div class="left">
        <div>
          <h2>基板</h2>
          <div class="device_img">
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>磊晶制成</h2>
          <div class="device_img">
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>清洗</h2>
          <div class="device_img">
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>蒸镀</h2>
          <div class="device_img">
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>黄光工作</h2>
          <div class="device_img">
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>化学刻蚀</h2>
          <div class="device_img">
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>研磨</h2>
          <div class="device_img">
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>切割</h2>
          <div class="device_img">
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '70px',height:'100px'}" @click="deviceDetail">
              <p class="device_top">A-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/D.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '114px',height:'120px'}" @click="deviceDetail">
              <p class="device_top" :style="{backgroundColor: statusColor[5]}">B-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/C.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-01</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
            <div class="device_item" :style="{width: '200px',height:'145px'}" @click="deviceDetail">
              <p class="device_top">C-02</p>
              <div class="img_box">
                <img class="device_bottom" src="../../assets/images/deviceTopology/E.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../../assets/images/deviceTopology/direct.png" alt />
        <div class="status_box">
          <h2>机器状态</h2>
          <p>
            <span class="circle_statu"></span>
            <span>工作</span>
          </p>
          <p>
            <span class="circle_statu"></span>
            <span>关机</span>
          </p>
          <p>
            <span class="circle_statu"></span>
            <span>等待</span>
          </p>
          <p>
            <span class="circle_statu"></span>
            <span>宕机</span>
          </p>
          <p>
            <span class="circle_statu"></span>
            <span>年检</span>
          </p>
          <p>
            <span class="circle_statu"></span>
            <span>测试</span>
          </p>
          <p>
            <span class="circle_statu"></span>
            <span>维护</span>
          </p>
        </div>
      </div>
    </div>

    <!-- 设备信息对话框 -->
    <div class="device_dia" v-if="isShowDeviceDia">
      <div class="title">
        <h2>
          <img src="../../assets/images/deviceTopology/device_title.svg" alt />
          <span>B-O1</span>
          <span>设备信息</span>
        </h2>
        <span class="close" @click="deviceCloseDia">×</span>
      </div>
      <div class="content_box">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="设备状况" name="first">
            <div class="info">
              <div class="info_con">
                <p>
                  <span>机台负责人</span>
                  <span>张亮</span>
                </p>
                <p>
                  <span>设备状态</span>
                  <span>正在运行</span>
                </p>
                <p>
                  <span>所属部门</span>
                  <span>光刻部</span>
                </p>
                <p class="rate">
                  <span>机台当日利用率</span>
                  <el-progress :percentage="percentage"></el-progress>
                </p>
                <p class="rate">
                  <span>机台当月利用率</span>
                  <el-progress :percentage="percentage"></el-progress>
                </p>
                <p>
                  <span>使用物料</span>
                  <span>SS 无纺布深色</span>
                </p>
                <p class="rate">
                  <span>物料当日使用率</span>
                  <el-progress :percentage="percentage"></el-progress>
                </p>
                <p class="rate">
                  <span>物料总使用率</span>
                  <el-progress :percentage="percentage"></el-progress>
                </p>
                <p>
                  <span>机台预计释放时间</span>
                  <span>2020-03-22 15：00</span>
                </p>
                <div class="line"></div>
              </div>
              <div class="info_box">
                <div class="item">
                  <p>在制批次信息</p>
                  <el-table :data="tableData" border :stripe="false" style="width: 100%">
                    <el-table-column prop="date1" label="批次号"></el-table-column>
                    <el-table-column prop="date2" label="所属订单"></el-table-column>
                    <el-table-column prop="date3" label="当前工步"></el-table-column>
                    <el-table-column prop="date4" label="状态"></el-table-column>
                    <el-table-column prop="date5" label="数量"></el-table-column>
                    <el-table-column prop="date6" label="单位"></el-table-column>
                    <el-table-column prop="date7" label="下一工步"></el-table-column>
                  </el-table>
                </div>
                <div class="item">
                  <p>近一周机台利用时长</p>
                  <div id="batch" style="height:190px;width:100%"></div>
                </div>
                <div class="item">
                  <p>近一周物料使用量</p>
                  <div id="material" style="height:190px;width:100%"></div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史状态" name="second">
            <div class="info">
              <div class="info_con">
                <div class="new">最新</div>
                <p>
                  <span>上次操作人员</span>
                  <span>张先知</span>
                </p>
                <p>
                  <span>上次操作时间</span>
                  <span>2020-02-27 20:30:00</span>
                </p>
                <p>
                  <span>机台负责人</span>
                  <span>张亮</span>
                </p>
                <p>
                  <span>变更状态</span>
                  <span>维护</span>
                </p>
                <p>
                  <span>所属部门</span>
                  <span>光刻部</span>
                </p>
                <p>
                  <span>初始状态</span>
                  <span>正常</span>
                </p>
                <div class="line"></div>
              </div>
              <div class="info_box">
                <div class="item">
                  <p class="old">以往历史</p>
                  <el-table :data="hisStatuData" border class="hisStatuTable" style="width: 100%">
                    <el-table-column prop="date1" label="操作人员"></el-table-column>
                    <el-table-column prop="date2" label="状态"></el-table-column>
                    <el-table-column prop="date3" label="操作时间" width="170"></el-table-column>
                    <el-table-column label="操作">
                      <template>
                        <div class="btn_img"></div>
                      </template>
                    </el-table-column>
                  </el-table>
                  <!-- 分页 -->
                  <div class="statuPage" style="margin:25px 0;">
                    <my-page
                      :pageCurNum="2"
                      :myPageSize="15"
                      :myCount="73"
                      :callBack="statuPageCallback"
                      key="statuPage"
                    ></my-page>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史加工" name="third">
            <div class="info">
              <div class="info_box">
                <div class="item">
                  <el-table :data="hisProcessData" border style="width: 100%">
                    <el-table-column prop="date1" label="操作人员" width="90"></el-table-column>
                    <el-table-column prop="date2" label="批次号"></el-table-column>
                    <el-table-column prop="date3" label="工艺"></el-table-column>
                    <el-table-column prop="date4" label="工步"></el-table-column>
                    <el-table-column prop="date5" label="完成率(%)" width="110"></el-table-column>
                    <el-table-column prop="date6" label="数量" width="55"></el-table-column>
                    <el-table-column label="操作" width="100">
                      <template>
                        <div class="btn_img"></div>
                      </template>
                    </el-table-column>
                  </el-table>
                  <!-- 分页 -->
                  <div class="processPage" style="margin:25px 0;">
                    <my-page
                      :pageCurNum="2"
                      :myPageSize="15"
                      :myCount="73"
                      :callBack="processPageCallback"
                      key="processPage"
                    ></my-page>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="异常事件" name="fourth">
            <div class="info">
              <div class="info_con">
                <div class="new">最新</div>
                <p>
                  <span>异常事件</span>
                  <span>宕机</span>
                </p>
                <p>
                  <span>宕机时长</span>
                  <span>4h</span>
                </p>
                <p>
                  <span>机台负责人</span>
                  <span>张先知</span>
                </p>
                <p>
                  <span>时间</span>
                  <span>2020-02-25 20:30:00</span>
                </p>
                <p>
                  <span>状态</span>
                  <span>宕机</span>
                </p>
                <p>
                  <span>备注</span>
                  <span>机台入口断裂</span>
                </p>
                <div class="line"></div>
              </div>
              <div class="info_box">
                <div class="item">
                  <p class="old">以往历史</p>
                  <el-table :data="hisSyncData" border class="hisStatuTable" style="width: 100%">
                    <el-table-column prop="date1" label="机台负责人"></el-table-column>
                    <el-table-column prop="date2" label="操作时间"></el-table-column>
                    <el-table-column label="操作">
                      <template>
                        <div class="btn_img"></div>
                      </template>
                    </el-table-column>
                  </el-table>
                  <!-- 分页 -->
                  <div class="syncPage" style="margin:25px 0;">
                    <my-page
                      :pageCurNum="2"
                      :myPageSize="15"
                      :myCount="73"
                      :callBack="syncPageCallback"
                      key="syncPage"
                    ></my-page>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      statusColor: [
        '#00c808',
        '#aeaeae',
        '#58a5ff',
        '#eebc3b',
        '#ff1e62',
        '#b357ff',
        '#3aa25d;',
      ],
      activeName: 'first',
      isShowDeviceDia: false, // 设备信息对话框的显示有隐藏
      // 设备状况数据
      // customColor: 'red',
      percentage: 20,
      tableData: [
        {
          date1: 'A100001',
          date2: 'DD0001',
          date3: 'Step001',
          date4: '返工',
          date5: '10',
          date6: '片',
          date7: 'Step002',
        },
      ],
      batchData: [12000, 17000, 8000, 13000, 10000, 19000], // 机台利用时长数据
      batchXAxisData: ['08/10', '08/11', '08/12', '08/13', '08/14', '08/15'], // 机台利用时长X轴
      materialData: [11, 17, 4, 12, 10, 19], // 物料使用量数据
      materialXAxisData: ['08/10', '08/11', '08/12', '08/13', '08/14', '08/15'], // 物料使用量X轴

      // 历史状态数据
      hisStatuData: [
        {
          date1: '张先知',
          date2: '正常',
          date3: '2020-02-26 20:30:00',
        },
        {
          date1: '王志华',
          date2: '宕机',
          date3: '2020-02-25 20:30:00',
        },
      ],
      currentPageStatu: 1,

      // 历史加工数据
      hisProcessData: [
        {
          date1: '张先知',
          date2: 'A10001.1',
          date3: 'Ted001',
          date4: 'Step002',
          date5: '76',
          date6: '100',
        },
        {
          date1: '王志华',
          date2: 'A10001.2',
          date3: 'Ted001',
          date4: 'Step002',
          date5: '76',
          date6: '98',
        },
      ],
      currentPageProcess: 1,

      // 异常事件
      hisSyncData: [
        {
          date1: '张先知',
          date2: '2020-02-26 20:30:00',
        },
        {
          date1: '王志华',
          date2: '2020-02-25 20:30:00',
        },
      ],
      currentPageSync: 1,
    }
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    // 显示对话框
    deviceDetail() {
      this.isShowDeviceDia = true
      this.$nextTick(() => {
        // 近一周机台利用时长
        this.batch()
        // 近一周机台利用时长
        this.material()
      })
    },
    // 关闭对话框
    deviceCloseDia() {
      this.isShowDeviceDia = false
      this.activeName = 'first'
    },
    // 设备状况利用时长
    batch() {
      var myChart = echarts.init(document.getElementById('batch'))
      var option = {
        title: {},
        tooltip: { trigger: 'axis', confine: true },
        legend: {},
        grid: {
          top: '5%',
          right: '2.5%',
          left: '10%',
          bottom: '10%',
        },
        xAxis: {
          data: this.batchXAxisData,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
        },
        yAxis: {
          max: 20000,
          interval: 10000,
          axisLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
          axisLabel: {
            formatter: '{value} s',
          },
          splitLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
        },
        series: [
          {
            type: 'line',
            data: this.batchData,
            areaStyle: {
              color: '#171975',
            },
            itemStyle: {
              normal: {
                color: '#58A5FF',
              },
            },
          },
        ],
      }
      myChart.setOption(option)
    },
    // 设备状况利用时长
    material() {
      var myChart = echarts.init(document.getElementById('material'))
      var option = {
        title: {},
        tooltip: { trigger: 'axis', confine: true },
        legend: {},
        grid: {
          top: '5%',
          right: '2.5%',
          left: '10%',
          bottom: '10%',
        },
        xAxis: {
          data: this.batchXAxisData,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
        },
        yAxis: {
          max: 20,
          interval: 10,
          axisLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
          axisLabel: {
            formatter: '{value} m',
          },
          splitLine: {
            lineStyle: {
              color: '#58a5ff',
            },
          },
        },
        series: [
          {
            type: 'line',
            data: this.batchData,
            areaStyle: {
              color: '#171975',
            },
            itemStyle: {
              normal: {
                color: '#58A5FF',
              },
            },
          },
        ],
      }
      myChart.setOption(option)
    },
    // 历史状况分页回调
    statuPageCallback(val) {
      // console.log(val)
    },
    // 历史加工分页回调
    processPageCallback(val) {
      // console.log(val)
    },
    // 异常事件分页回调
    syncPageCallback(val) {
      // console.log(val)
    },
  },
}
</script>

<style lang="less" scoped></style>
