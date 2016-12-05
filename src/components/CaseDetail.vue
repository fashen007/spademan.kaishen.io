<template>
  <div>
    <div class='banner'>
      <img src="../assets/designCase/banner.jpg" alt="">
    </div>
    <ul class='content'>
      <li v-for="(item, index) in caseObj">
        <div v-if="item.id == $route.params.id">
          <h2 class='case-name'>{{item.title}}: {{item.name}}</h2>
          <div class='imgs' v-for="img in item.imgs">
            <img v-lazy="img" alt="item.name">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
var caseObj = [
  {
    imgs: [require('../assets/designCase/oumaide/1.jpg'), require('../assets/designCase/oumaide/2.jpg'), require('../assets/designCase/oumaide/3.jpg')],
    name: '欧迈德',
    id: 'oumaide',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/angudianqi/1.jpg'), require('../assets/designCase/angudianqi/2.jpg')],
    name: '安固电器',
    id: 'angudianqi',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/ailida/1.jpg')],
    name: '爱力达',
    id: 'ailida',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/baozhi/1.jpg')],
    name: '宝智',
    id: 'baozhi',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/guyue/1.jpg'), require('../assets/designCase/guyue/2.jpg'), require('../assets/designCase/guyue/3.jpg')],
    name: '浙江古越',
    id: 'guyue',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/hancheng/1.jpg'), require('../assets/designCase/hancheng/2.jpg')],
    name: '韩城国际街',
    id: 'hancheng',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/hengfeng/1.jpg'), require('../assets/designCase/hengfeng/2.jpg'), require('../assets/designCase/hengfeng/3.jpg')],
    name: '恒丰机械',
    id: 'hengfeng',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/jond/1.jpg')],
    name: 'jond',
    id: 'JOND',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/lifa/1.jpg'), require('../assets/designCase/lifa/2.jpg')],
    name: '东莞力發',
    id: 'lifa',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/longwei/1.jpg'), require('../assets/designCase/longwei/2.jpg'), require('../assets/designCase/longwei/3.jpg')],
    name: '龙魏水家电',
    id: 'longwei',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/meiguogelan/1.jpg'), require('../assets/designCase/meiguogelan/2.jpg')],
    name: '美国格朗',
    id: 'meiguogelan',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/mtech/1.jpg')],
    name: 'Mteach',
    id: 'mtech',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/nengshi/1.jpg'), require('../assets/designCase/nengshi/2.jpg'), require('../assets/designCase/nengshi/3.jpg'), require('../assets/designCase/nengshi/4.jpg')],
    name: '能十智能港',
    id: 'nengshi',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/xinyue/1.jpg')],
    name: '新月玩具',
    id: 'xinyue',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/oupinjia/1.jpg')],
    name: '佛山欧品佳',
    id: 'oupinjia',
    title: '项目名称'
  },
  // }, {
  //   imgs: [require('../assets/designCase/cmkj/1.jpg'), require('../assets/designCase/cmkj/2.jpg')],
  //   name: '潮漫科技',
  //   id: 'cmkj',
  //   title: '项目名称'
  // }, {
  //   imgs: [require('../assets/designCase/hetyd/1.jpg'), require('../assets/designCase/hetyd/2.jpg')],
  //   name: '海尔体验店',
  //   id: 'hetyd',
  //   title: '项目名称'
  // }, {
  //   imgs: [require('../assets/designCase/lpkj/1.jpg'), require('../assets/designCase/lpkj/2.jpg')],
  //   name: '利派科技',
  //   id: 'lpkj',
  //   title: '项目名称'
  // }, {
  //   imgs: [require('../assets/designCase/mskj/1.jpg'), require('../assets/designCase/mskj/2.jpg')],
  //   name: '美硕科技',
  //   id: 'mskj',
  //   title: '项目名称'
  // }, {
  //   imgs: [require('../assets/designCase/xph/1.jpg'), require('../assets/designCase/xph/2.jpg')],
  //   name: '鑫品航电子有限公司',
  //   id: 'xph',
  //   title: '项目名称'
  // }, {
  {
    imgs: [require('../assets/designCase/shenshenxiaofang/1.jpg')],
    name: '神圣消防',
    id: 'shenshenxiaofang',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/tianzhun/1.jpg')],
    name: '天准',
    id: 'tianzhun',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/wenzhousenlin/1.jpg'), require('../assets/designCase/wenzhousenlin/2.jpg')],
    name: '温州森林食品',
    id: 'wenzhousenlin',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/wugang/1.jpg')],
    name: '武钢开圣',
    id: 'wugang',
    title: '项目名称'
  }
]
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      caseObj
    }
  },
  mounted () {
    const that = this
    that.updateRoutePath('/CaseDetail')
  },
  methods: {
    ...mapActions([
      'updateRoutePath'
    ])
  }
}
</script>
<style lang='less' scoped>
  .banner{
    width: 100%;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
  .content{
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 200px;
    .case-name{
      font-size: 18px;
      letter-spacing: 3px;
      font-weight: bold;
      width: 100%;
      border:1px solid #eee;
      padding: 25px;
    }
    .imgs{
      width: 700px;
      padding: 20px;
      margin: 20px auto;
      border: 1px solid #eee;
      position: relative;
      background-color: #eee;
      min-height: 200px;
      img{
        width: 100%;
        &[lazy=loaded] {
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-name: fadeIn;
          animation-name: fadeIn;
        }
        &[lazy=loading] {
          position: absolute;
          width: 40px;
          height: 40px;
          z-index: 1;
          left: -20px;
          bottom: 20%;
          margin-left: 50%;
        }
      }
    }
  }
</style>
