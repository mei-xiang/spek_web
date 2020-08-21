<template>
  <div class="content enterpriseImage">
    <!-- 头部区域 -->
    <jr-header></jr-header>
    <!-- 基本信息 -->
    <div class="info">
      <h2>
        企业基本信息
        <span class="chunk"></span>
      </h2>
      <img class="logo" src="../../assets/images/enterpriseImage/enterprise_logo.png" alt />
      <p class="title">深圳市思贝克工业发展有限公司</p>
      <div class="table_map">
        <table align="center" cellspacing="0" cellpadding="0" width="1500">
          <tr>
            <td width="175px">企业法人</td>
            <td class="bold">杨志</td>
            <td>公司类型</td>
            <td class="bold">有限责任公司（法人独资）</td>
            <td>成立日期</td>
            <td class="bold">2012年03月27日</td>
            <td>营业期限自</td>
            <td class="bold">2013年05月31日</td>
          </tr>
          <tr>
            <td>统一社会信用代码</td>
            <td class="bold">914403005930044606</td>
            <td>注册资本</td>
            <td class="bold">3999.9413万元人民币</td>
            <td>登记状态</td>
            <td class="bold">存续</td>
            <td>营业期限至</td>
            <td class="bold">2023年05月31日</td>
          </tr>
          <tr>
            <td>营业范围</td>
            <td colspan="7" class="business_box">
              <div class="business">
                投资兴办实业（具体项目另行申报）；纺织制品、塑胶制品、润滑油、化工产品(不含危险化学品、易制毒化学品)、纤维材料及其设备的研发和销售；燃料油销售（不含成品油、危险化学品除外）；金属工具、模具的设计；有色金属、金属材料、电线电缆、家用电器、建筑材料、电力设备、化肥的销售；电子产品印制线路板的设计及销售；防护材料的技术开发；涂料、防火材料的销售；实验器材、仪器仪表的技术开发与销售；黄金制品及白银制品的销售；国内贸易，经营进出口业务，企业策划，金融信息服务（未经前置许可不得开展金融业务），会务服务，知识产权代理
                ，投资管理，企业管理咨询，商务信息咨询，投资咨询，经济贸易咨询（法律、行政法规、国务院决定规定在登记前须经批准的项目除外）；供应链管理及相关配套服务、国际货运代理、国内货运代理、与供应链相关的信息咨询与技术咨询；通讯产品(通讯设备、手机、平板、电脑和周边配件销售)以及通讯产品零配件、电子元器件、微电子电器、计算机软硬件、网络设备的销售（以上法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）;不动产租赁（不含融资性租赁）。^互联网信息服务.
              </div>
            </td>
          </tr>
        </table>
        <div class="map_box">
          <div class="map" @click="jumpmap">
            <i class="iconfont">&#xe722;</i>
            <span>深圳市南山区深南大道大冲商务中心D座18</span>
            <i class="iconfont">&#xe724;</i>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业选项卡 -->
    <el-tabs class="com_tabs" v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="企业概况" name="first">
        <div class="item">
          <h2>
            股东列表
            <span class="chunk"></span>
          </h2>
          <el-table :data="tableData" border :stripe="false" style="width: 100%">
            <el-table-column type="index" label="序号" width="70"></el-table-column>
            <el-table-column prop="date" label="股东名称"></el-table-column>
            <el-table-column prop="name" label="股东类型"></el-table-column>
            <el-table-column prop="address" label="投资数额（万元）"></el-table-column>
            <el-table-column prop="address" label="出资方式"></el-table-column>
            <el-table-column prop="address" label="出资比例"></el-table-column>
            <el-table-column prop="address" label="认缴出资日期"></el-table-column>
          </el-table>
        </div>
        <div class="item">
          <h2>
            主要产品
            <span class="chunk"></span>
          </h2>
          <el-table :data="tableData" border :stripe="false" style="width: 100%">
            <el-table-column type="index" label="序号" width="70"></el-table-column>
            <el-table-column prop="date" label="企业产品（服务）名称"></el-table-column>
            <el-table-column prop="date" label="销售收入（万元）"></el-table-column>
            <el-table-column prop="name" label="销售占比"></el-table-column>
            <el-table-column prop="address" label="外销占比"></el-table-column>
            <el-table-column prop="address" label="产品介绍"></el-table-column>
            <el-table-column prop="address" label="产品图片">
              <template>
                <span class="look" @click="detail">查看</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="item">
          <h2>
            概要信息
            <span class="chunk"></span>
          </h2>
          <p>主要下游企业：深圳市水调歌头有限公司、李太白诗酒文化有限公司、京东集团、李太白诗酒文化有限公司</p>
          <p>企业标签：大规模企业、下游比值大、外销占比大、资产负债重、经营能力低下</p>
        </div>
        <div class="item">
          <h2>
            近12个月经营趋势变化图
            <span class="chunk"></span>
          </h2>
          <div id="business_trend" style="height:430px;width:110%"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="企业荣誉" name="second">
        <div class="item">
          <h3></h3>
          <h2>
            软件著作权
            <span class="chunk"></span>
          </h2>
          <el-table :data="tableData" border :stripe="false" style="width: 100%">
            <el-table-column type="index" label="序号" width="70"></el-table-column>
            <el-table-column prop="date" label="软件名称"></el-table-column>
            <el-table-column prop="name" label="登记日期"></el-table-column>
            <el-table-column prop="address" label="登记号"></el-table-column>
            <el-table-column prop="address" label="著作权人"></el-table-column>
            <el-table-column prop="address" label="首次发表日期"></el-table-column>
            <el-table-column prop="address" label="版本号"></el-table-column>
          </el-table>
        </div>
        <div class="item">
          <h3></h3>
          <h2>
            主要产品
            <span class="chunk"></span>
          </h2>
          <el-table :data="tableData" border :stripe="false" style="width: 100%">
            <el-table-column type="index" label="序号" width="70"></el-table-column>
            <el-table-column prop="date" label="企业产品（服务）名称"></el-table-column>
            <el-table-column prop="date" label="销售收入（万元）"></el-table-column>
            <el-table-column prop="name" label="销售占比"></el-table-column>
            <el-table-column prop="address" label="外销占比"></el-table-column>
            <el-table-column prop="address" label="产品介绍"></el-table-column>
            <el-table-column prop="address" label="产品图片">
              <template>
                <span class="look" @click="detail">查看</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="item" style="width:100%;">
          <h2>
            概要信息
            <span class="chunk"></span>
          </h2>
          <div class="img_info">
            <img
              width="219px"
              height="300px"
              style="margin-right:50px"
              v-for="(item, index) in 12"
              :key="index"
              src="../../assets/images/enterpriseImage/summary_info.svg"
            />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="风控报告" name="third">
        <div class="control_report">
          <!-- 概要信息 -->
          <div class="summary_info">
            <div class="info_box">
              <p class="tit">概要信息</p>
              <div class="info">
                <div>
                  <span>客户姓名：</span>
                  <span>李庆飞</span>
                </div>
                <div>
                  <span>身份证号码：</span>
                  <span>370***********0910</span>
                </div>
                <div>
                  <span>企业(商户)名称：</span>
                  <span>广东创新投资有限公司</span>
                </div>
                <div>
                  <span>统一社会信用代码：</span>
                  <span>92320684MA1NUK5F20</span>
                </div>
              </div>
              <div class="download">
                <img src="../../assets/images/enterpriseImage/download.png" alt />
                <p>
                  <span>报告日期：</span>
                  <span>2019-12-06 17:01:06</span>
                </p>
              </div>
              <div class="line"></div>
            </div>
            <!-- 1.总结报告 -->
            <div class="report">
              <p class="tit">1.总结报告</p>
              <el-table :data="tableData" border :stripe="false" style="width: 100%">
                <el-table-column prop="date" label="主体"></el-table-column>
                <el-table-column prop="address" label="类型"></el-table-column>
                <el-table-column prop="address" label="事件"></el-table-column>
              </el-table>
              <div class="line"></div>
            </div>
            <!-- 2.企业主及关联人信息 -->
            <div class="compony">
              <p class="tit">2.企业主及关联人信息</p>
              <!-- 2.1 企业主信息 -->
              <div>
                <div class="compony_top">
                  <h3>2.1 企业主信息</h3>
                  <div class="compony_line"></div>
                </div>
                <div class="compony_content">
                  <!-- 2.1.1个人基本信息(李庆飞) -->
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.1.1个人基本信息(李庆飞)</span>
                    </div>
                    <div class="hb">
                      <el-table :data="tableData" border :stripe="false" style="width: 1007px">
                        <el-table-column prop="date" label="姓名" width="185"></el-table-column>
                        <el-table-column prop="address" label="证件号码" width="420"></el-table-column>
                        <el-table-column prop="address" label="联系方式" width="400"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.1.2 企业主手机欺诈信息</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.1.3 企业主工商信息</span>
                    </div>
                    <div class="hb">
                      <p style="color:rgb(202, 227, 255)">1.担任法定代表人</p>
                      <p>担任3家企业的法定代表人，3家企业状态正常</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="企业(机构)名称"></el-table-column>
                        <el-table-column prop="address" label="注册号"></el-table-column>
                        <el-table-column prop="address" label="企业(机构)类型"></el-table-column>
                        <el-table-column prop="address" label="注册资本(万元)" width="150"></el-table-column>
                        <el-table-column prop="address" label="注册资本币种" width="165"></el-table-column>
                        <el-table-column prop="address" label="企业状态" width="160"></el-table-column>
                        <el-table-column prop="address" label="关联关系"></el-table-column>
                        <el-table-column prop="address" label="内容"></el-table-column>
                      </el-table>
                    </div>
                    <div class="hb">
                      <p style="color:rgb(202, 227, 255)">2.担任股东</p>
                      <p>担任4家企业的股东，4家企业状态正常</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="企业(机构)名称"></el-table-column>
                        <el-table-column prop="address" label="注册号"></el-table-column>
                        <el-table-column prop="address" label="企业(机构)类型"></el-table-column>
                        <el-table-column prop="address" label="注册资本(万元)" width="150"></el-table-column>
                        <el-table-column prop="address" label="注册资本币种" width="165"></el-table-column>
                        <el-table-column prop="address" label="企业状态" width="160"></el-table-column>
                        <el-table-column prop="address" label="关联关系"></el-table-column>
                        <el-table-column prop="address" label="内容"></el-table-column>
                      </el-table>
                    </div>
                    <div class="hb">
                      <p style="color:rgb(202, 227, 255)">3.担任高管</p>
                      <p>担任3家企业的高管，3家企业状态正常</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="企业(机构)名称"></el-table-column>
                        <el-table-column prop="address" label="注册号"></el-table-column>
                        <el-table-column prop="address" label="企业(机构)类型"></el-table-column>
                        <el-table-column prop="address" label="注册资本(万元)" width="150"></el-table-column>
                        <el-table-column prop="address" label="注册资本币种" width="165"></el-table-column>
                        <el-table-column prop="address" label="企业状态" width="160"></el-table-column>
                        <el-table-column prop="address" label="关联关系"></el-table-column>
                        <el-table-column prop="address" label="内容"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.1.4 工商负面</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.1.5 司法负面</span>
                    </div>
                    <div class="hb">
                      <p style="color:rgb(202, 227, 255)">1.法院公告信息</p>
                      <p>1年前，有1条法院公告记录</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="公告日期"></el-table-column>
                        <el-table-column prop="address" label="当事人"></el-table-column>
                        <el-table-column prop="address" label="法院名称"></el-table-column>
                        <el-table-column prop="address" label="公告类型" width="160"></el-table-column>
                        <el-table-column prop="address" label="公告内容"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.1.6 金融借贷信息</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.1.7 风险筛选</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 2.2 配偶信息 -->
              <div>
                <div class="compony_top">
                  <h3>2.2 配偶信息</h3>
                  <div class="compony_line"></div>
                </div>
                <div class="compony_content">
                  <!-- 2.2.1 个人基本信息（张小丽） -->
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.2.1 个人基本信息（张小丽）</span>
                    </div>
                    <div class="hb">
                      <el-table :data="tableData" border :stripe="false" style="width: 1007px">
                        <el-table-column prop="date" label="姓名" width="185"></el-table-column>
                        <el-table-column prop="address" label="证件号码" width="420"></el-table-column>
                        <el-table-column prop="address" label="联系方式" width="400"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.2.2 配偶手机欺诈信息</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.2.3 在外投资及任职情况</span>
                    </div>
                    <div class="hb">
                      <p style="color:rgb(202, 227, 255)">1.担任法定代表人</p>
                      <p>担任1家企业的法定代表人，1家企业状态正常</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="企业(机构)名称"></el-table-column>
                        <el-table-column prop="address" label="注册号"></el-table-column>
                        <el-table-column prop="address" label="企业(机构)类型"></el-table-column>
                        <el-table-column prop="address" label="注册资本(万元)" width="150"></el-table-column>
                        <el-table-column prop="address" label="注册资本币种" width="165"></el-table-column>
                        <el-table-column prop="address" label="企业状态" width="160"></el-table-column>
                        <el-table-column prop="address" label="关联关系"></el-table-column>
                        <el-table-column prop="address" label="内容"></el-table-column>
                      </el-table>
                    </div>
                    <div class="hb">
                      <p style="color:rgb(202, 227, 255)">2.担任高管</p>
                      <p>担任1家企业的高管，1家企业状态正常</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="企业(机构)名称"></el-table-column>
                        <el-table-column prop="address" label="注册号"></el-table-column>
                        <el-table-column prop="address" label="企业(机构)类型"></el-table-column>
                        <el-table-column prop="address" label="注册资本(万元)" width="150"></el-table-column>
                        <el-table-column prop="address" label="注册资本币种" width="165"></el-table-column>
                        <el-table-column prop="address" label="企业状态" width="160"></el-table-column>
                        <el-table-column prop="address" label="关联关系"></el-table-column>
                        <el-table-column prop="address" label="内容"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.2.4 工商负面</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.2.5 风险筛选</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 2.3 自然人股东 -->
              <div>
                <div class="compony_top">
                  <h3>2.3 自然人股东</h3>
                  <div class="compony_line"></div>
                </div>
                <div class="compony_content">
                  <!-- 2.3.1 个人基本信息（融海龙） -->
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.3.1 个人基本信息（融海龙）</span>
                    </div>
                    <div class="hb">
                      <el-table :data="tableData" border :stripe="false" style="width: 1007px">
                        <el-table-column prop="date" label="姓名" width="185"></el-table-column>
                        <el-table-column prop="address" label="证件号码" width="420"></el-table-column>
                        <el-table-column prop="address" label="联系方式" width="400"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.3.2 股东手机欺诈信息</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.3.3 在外投资及任职情况</span>
                    </div>
                    <div class="hb">
                      <p style="color:rgb(202, 227, 255)">1.担任法定代表人</p>
                      <p>担任1家企业的法定代表人，1家企业状态正常</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="企业(机构)名称"></el-table-column>
                        <el-table-column prop="address" label="注册号"></el-table-column>
                        <el-table-column prop="address" label="企业(机构)类型"></el-table-column>
                        <el-table-column prop="address" label="注册资本(万元)" width="150"></el-table-column>
                        <el-table-column prop="address" label="注册资本币种" width="165"></el-table-column>
                        <el-table-column prop="address" label="企业状态" width="160"></el-table-column>
                        <el-table-column prop="address" label="关联关系"></el-table-column>
                        <el-table-column prop="address" label="内容"></el-table-column>
                      </el-table>
                    </div>
                    <div class="hb">
                      <p style="color:rgb(202, 227, 255)">2.担任高管</p>
                      <p>担任1家企业的高管，1家企业状态正常</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="企业(机构)名称"></el-table-column>
                        <el-table-column prop="address" label="注册号"></el-table-column>
                        <el-table-column prop="address" label="企业(机构)类型"></el-table-column>
                        <el-table-column prop="address" label="注册资本(万元)" width="150"></el-table-column>
                        <el-table-column prop="address" label="注册资本币种" width="165"></el-table-column>
                        <el-table-column prop="address" label="企业状态" width="160"></el-table-column>
                        <el-table-column prop="address" label="关联关系"></el-table-column>
                        <el-table-column prop="address" label="内容"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.3.4 工商负面</span>
                    </div>
                    <div class="hb">
                      <!-- <div class="eve">未查询到高风险事件</div> -->
                      <p>1年前，有1条工商处罚信息</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="案发时间"></el-table-column>
                        <el-table-column prop="address" label="案由"></el-table-column>
                        <el-table-column prop="address" label="案值(元)"></el-table-column>
                        <el-table-column prop="address" label="案件类型" width="150"></el-table-column>
                        <el-table-column prop="address" label="案件结果" width="165"></el-table-column>
                        <el-table-column prop="address" label="主要违法事实" width="160"></el-table-column>
                        <el-table-column prop="address" label="处罚结果"></el-table-column>
                        <el-table-column prop="address" label="处罚金额(元)"></el-table-column>
                        <el-table-column prop="address" label="处罚执行情况"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.3.5 风险筛选</span>
                    </div>
                    <div class="hb">
                      <!-- <div class="eve">未查询到高风险事件</div> -->
                      <el-table :data="tableData" border :stripe="false" style="width: 1007px">
                        <el-table-column prop="date" label="客户名" width="185"></el-table-column>
                        <el-table-column prop="address" label="身份证号" width="420"></el-table-column>
                        <el-table-column prop="address" label="不良结果说明" width="400"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 2.4 其他联系人 -->
              <div>
                <div class="compony_top">
                  <h3>2.4 其他联系人</h3>
                  <div class="compony_line"></div>
                </div>
                <div class="compony_content">
                  <!-- 2.4.1 个人基本信息（游用） -->
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.4.1 个人基本信息（游用）</span>
                    </div>
                    <div class="hb">
                      <el-table :data="tableData" border :stripe="false" style="width: 1007px">
                        <el-table-column prop="date" label="姓名" width="185"></el-table-column>
                        <el-table-column prop="address" label="证件号码" width="420"></el-table-column>
                        <el-table-column prop="address" label="联系方式" width="400"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.4.2 股东手机欺诈信息</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.4.3 金融借贷信息</span>
                    </div>
                    <div class="hb">
                      <p style="color:rgb(202, 227, 255)">1.机构查询记录</p>
                      <p>在业务发生时间-，查得金融机构查询记录次，具体命中机构详情如下表：</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="业务发生时间日期"></el-table-column>
                        <el-table-column prop="address" label="命中机构数目"></el-table-column>
                        <el-table-column prop="address" label="命中银行类机构数"></el-table-column>
                        <el-table-column prop="address" label="命中消费金融类机构数" width="150"></el-table-column>
                        <el-table-column prop="address" label="命中p2p或者小贷类机构数" width="165"></el-table-column>
                        <el-table-column prop="address" label="机构总查询次数" width="160"></el-table-column>
                        <el-table-column prop="address" label="近三个月机构总查询次数"></el-table-column>
                        <el-table-column prop="address" label="已结清逾期总额(元)"></el-table-column>
                        <el-table-column prop="address" label="近六个月机构总查询次数"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>2.4.4 风险筛选</span>
                    </div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                      <!-- <el-table :data="tableData" border :stripe="false" style="width: 1007px">
                        <el-table-column prop="date" label="客户名" width="185"></el-table-column>
                        <el-table-column prop="address" label="身份证号" width="420"></el-table-column>
                        <el-table-column prop="address" label="不良结果说明" width="400"></el-table-column>
                      </el-table>-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="line"></div>
            </div>
            <!-- 3. 企业信息 -->
            <div class="compony">
              <p class="tit">3. 企业信息</p>
              <!-- 3.1 企业基本工商信息 -->
              <div>
                <div class="compony_top">
                  <h3>3.1 企业基本工商信息</h3>
                  <div class="compony_line"></div>
                </div>
                <div class="compony_content">
                  <!-- 3.1.1 基本信息 -->
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>3.1.1 基本信息</span>
                      <div class="info_box compony_info">
                        <div class="info">
                          <div>
                            <span>法定代表人</span>
                            <span>宋健豪</span>
                          </div>
                          <div>
                            <span>注册号</span>
                            <span>320684601466714</span>
                          </div>
                          <div>
                            <span>组织机构代码</span>
                            <span>N/A</span>
                          </div>
                          <div>
                            <span>地址</span>
                            <span>海门市长江路716号</span>
                          </div>
                          <div>
                            <span>企业统一信用代码</span>
                            <span>92320684MA1NUK5F20</span>
                          </div>
                          <div>
                            <span>企业机构类型</span>
                            <span>个体</span>
                          </div>
                          <div>
                            <span>所在省份</span>
                            <span>江苏省</span>
                          </div>
                          <div>
                            <span>注册资本(万元)</span>
                            <span>0</span>
                          </div>
                          <div>
                            <span>注册资本币种</span>
                            <span>人民币</span>
                          </div>
                          <div>
                            <span>成立日期</span>
                            <span>2017-04-25</span>
                          </div>
                          <div>
                            <span>经营期限</span>
                            <span>长期</span>
                          </div>
                          <div>
                            <span>注册地址行政区编号</span>
                            <span>320684</span>
                          </div>
                          <div>
                            <span>经营状态</span>
                            <span>在营（开业）</span>
                          </div>
                          <div>
                            <span>注销日期</span>
                            <span>N/A</span>
                          </div>
                          <div>
                            <span>经营范围</span>
                            <span>N/A</span>
                          </div>
                        </div>
                        <!-- <div class="line"></div> -->
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>3.1.2 股东及出资信息</span>
                    </div>
                    <div class="hb">
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="股东"></el-table-column>
                        <el-table-column prop="address" label="认缴出资日期"></el-table-column>
                        <el-table-column prop="address" label="认缴出资额(万元)"></el-table-column>
                        <el-table-column prop="address" label="认缴出资币种" width="150"></el-table-column>
                        <el-table-column prop="address" label="出资方式" width="165"></el-table-column>
                        <el-table-column prop="address" label="出资比例" width="160"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>3.1.3 主要负责人</span>
                    </div>
                    <div class="hb">
                      <el-table :data="tableData" border :stripe="false" style="width: 402px">
                        <el-table-column prop="date" label="姓名" width="200"></el-table-column>
                        <el-table-column prop="address" label="职位" width="200"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="item">
                    <div class="hd">
                      <span class="block"></span>
                      <span>3.1.4 企业对外投资信息</span>
                    </div>
                    <div class="hb">
                      <p>对外投资了1家企业，1家企业状态正常</p>
                      <el-table :data="tableData" border :stripe="false" style="width: 100%">
                        <el-table-column prop="date" label="企业(机构)名称"></el-table-column>
                        <el-table-column prop="address" label="注册资本(万元)"></el-table-column>
                        <el-table-column prop="address" label="注册资本币种"></el-table-column>
                        <el-table-column prop="address" label="企业状态" width="150"></el-table-column>
                        <el-table-column prop="address" label="认缴出资额(万元)" width="165"></el-table-column>
                        <el-table-column prop="address" label="出资比例" width="160"></el-table-column>
                        <el-table-column prop="address" label="开业日期" width="160"></el-table-column>
                      </el-table>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 3.2 企业工商负面记录 -->
              <div>
                <div class="compony_top">
                  <h3>3.2 企业工商负面记录</h3>
                  <div class="compony_line"></div>
                </div>
                <div class="compony_content">
                  <div class="item">
                    <div class="hd"></div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 3.3 企业司法负面 -->
              <div>
                <div class="compony_top">
                  <h3>3.3 企业司法负面</h3>
                  <div class="compony_line"></div>
                </div>
                <div class="compony_content">
                  <div class="item">
                    <div class="hd"></div>
                    <div class="hb">
                      <div class="eve">未查询到高风险事件</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="黑灰名单" name="fourth">
        <div class="dark_list">
          <!-- 金融逾期 -->
          <div class="compony">
            <div class="compony_top">
              <h3>金融逾期</h3>
            </div>
            <div class="compony_content">
              <div class="item">
                <div class="hd"></div>
                <div class="hb">
                  <div class="eve">未查询到高风险事件</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 高法失信 -->
          <div class="compony">
            <div class="compony_top">
              <h3>高法失信</h3>
            </div>
            <div class="compony_content">
              <div class="item">
                <div class="hd"></div>
                <div class="hb">
                  <div class="eve">未查询到高风险事件</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 犯罪不良 -->
          <div class="compony">
            <div class="compony_top">
              <h3>犯罪不良</h3>
            </div>
            <div class="compony_content">
              <div class="item">
                <div class="hd"></div>
                <div class="hb">
                  <div class="eve">未查询到高风险事件</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 多头借贷 -->
          <div class="compony">
            <div class="compony_top">
              <h3>多头借贷</h3>
            </div>
            <div class="compony_content">
              <div class="item">
                <div class="hd"></div>
                <div class="hb">
                  <div class="eve">未查询到高风险事件</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 企业负面 -->
          <div class="compony">
            <div class="compony_top">
              <h3>企业负面</h3>
            </div>
            <div class="compony_content">
              <div class="item">
                <div class="hd"></div>
                <div class="hb">
                  <div class="eve">未查询到高风险事件</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="四要素认证" name="five">
        <div class="verified">
          <div>
            <div class="left">
              <img src="../../assets/images/enterpriseImage/credit_card.png" alt />
              <img class="is_verified" src="../../assets/images/enterpriseImage/verified.png" alt />
            </div>
            <div class="right">
              <p>
                银行卡号：
                <span>622****************31</span>
              </p>
              <p style="color:#00C808">已认证</p>
            </div>
          </div>
          <div>
            <div class="left">
              <img src="../../assets/images/enterpriseImage/id_card.png" alt />
              <img class="is_verified" src="../../assets/images/enterpriseImage/verified.png" alt />
            </div>
            <div class="right">
              <p>
                证件号：
                <span>423***********6382</span>
              </p>
              <p style="color:#00C808">已认证</p>
            </div>
          </div>
          <div>
            <div class="left">
              <img src="../../assets/images/enterpriseImage/mobile.png" alt />
              <img class="is_verified" src="../../assets/images/enterpriseImage/verified.png" alt />
            </div>
            <div class="right">
              <p>
                手机号：
                <span>131******81</span>
              </p>
              <p style="color:#00C808">已认证</p>
            </div>
          </div>
          <div>
            <div class="left">
              <img src="../../assets/images/enterpriseImage/name.png" alt />
              <img class="is_verified" src="../../assets/images/enterpriseImage/verified.png" alt />
            </div>
            <div class="right">
              <p>
                姓名：
                <span>张**</span>
              </p>
              <p style="color:#00C808">已认证</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 对话框详情 -->
    <el-dialog title="半自动机械臂" :visible.sync="showProductDia" @close="handleClose" width="1200px">
      <div class="img_box">
        <img
          class="img"
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      activeName: 'first', // tabs标签页
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区',
        },
      ],
      // 经营趋势数据
      businessData: [
        1200,
        2000,
        2800,
        3200,
        3500,
        3000,
        2200,
        1700,
        3700,
        3100,
        2400,
        1700,
      ],
      // 经营趋势X轴
      xAxisData: [
        '2019/10',
        '2019/11',
        '2019/12',
        '2020/01',
        '2020/02',
        '2020/03',
        '2020/04',
        '2020/05',
        '2020/06',
        '2020/07',
        '2020/08',
        '2020/09',
      ],
      showProductDia: false,
    }
  },
  components: {},
  mounted() {
    // 近12个月经营趋势变化图
    this.businessTrend()
  },
  methods: {
    jumpmap() {
      window.open(
        'https://map.baidu.com/search/%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%8D%97%E5%B1%B1%E5%8C%BA%E6%B7%B1%E5%8D%97%E5%A4%A7%E9%81%93%E5%A4%A7%E5%86%B2%E5%95%86%E5%8A%A1%E4%B8%AD%E5%BF%83d%E5%BA%A718%E6%A5%BC/@12686100.115,2560775.19,19z?querytype=s&wd=%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%8D%97%E5%B1%B1%E5%8C%BA%E6%B7%B1%E5%8D%97%E5%A4%A7%E9%81%93%E5%A4%A7%E5%86%B2%E5%95%86%E5%8A%A1%E4%B8%AD%E5%BF%83D%E5%BA%A718%E6%A5%BC&c=340&pn=0&device_ratio=1&da_src=shareurl'
      )
    },
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    detail() {
      this.showProductDia = true
    },
    handleClose() {
      this.showProductDia = false
    },
    businessTrend() {
      var myChart = echarts.init(document.getElementById('business_trend'))
      var option = {
        title: {},
        tooltip: { trigger: 'axis', confine: true },
        legend: {},
        grid: {
          left: '3%',
          bottom: '5%',
        },
        xAxis: {
          data: this.xAxisData,
          boundaryGap: false,
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
          axisLabel: {
            formatter: '{value} w',
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
            data: this.businessData,
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
  },
}
</script>

<style lang="less" scoped>
/deep/ .el-dialog__body {
  padding: 0 !important;
  height: 686px;
}
.img_box {
  width: 100%;
  height: 100%;
  .img {
    width: 100%;
    height: 100%;
  }
}
.img_info {
  width: 100%;
  height: 320px;
  display: flex;
  overflow-x: auto;
}
</style>
