<template>
  <div>
    <div class='banner'>
      <img src="../assets/case/banner.jpg" alt="">
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
    imgs: [require('../assets/case/flxtd/1.jpg'), require('../assets/case/flxtd/2.jpg'), require('../assets/case/flxtd/2.jpg'), require('../assets/case/flxtd/3.jpg'), require('../assets/case/flxtd/4.jpg'), require('../assets/case/flxtd/5.jpg'), require('../assets/case/flxtd/6.jpg'), require('../assets/case/flxtd/7.jpg')],
    name: '富力新天地梦媛斯汀生物科技',
    id: 'flxtd',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/zhjsw/1.jpg'), require('../assets/case/zhjsw/2.jpg'), require('../assets/case/zhjsw/2.jpg'), require('../assets/case/zhjsw/3.jpg'), require('../assets/case/zhjsw/4.jpg'), require('../assets/case/zhjsw/5.jpg'), require('../assets/case/zhjsw/6.jpg')],
    name: '中海金沙湾',
    id: 'zhjsw',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/blklw/1.jpg'), require('../assets/case/blklw/2.jpg'), require('../assets/case/blklw/3.jpg'), require('../assets/case/blklw/4.jpg'), require('../assets/case/blklw/5.jpg'), require('../assets/case/blklw/6.jpg')],
    name: '保利克洛维',
    id: 'blklw',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/xpds/1.jpg'), require('../assets/case/xpds/2.jpg'), require('../assets/case/xpds/3.jpg'), require('../assets/case/xpds/4.jpg'), require('../assets/case/xpds/5.jpg'), require('../assets/case/xpds/6.jpg')],
    name: '兴普大厦',
    id: 'xpds',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/gjss/1.jpg'), require('../assets/case/gjss/2.jpg'), require('../assets/case/gjss/3.jpg'), require('../assets/case/gjss/4.jpg'), require('../assets/case/gjss/5.jpg')],
    name: '国际私塾',
    id: 'gjss',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/ddh/1.jpg'), require('../assets/case/ddh/2.jpg'), require('../assets/case/ddh/3.jpg'), require('../assets/case/ddh/4.jpg'), require('../assets/case/ddh/5.jpg'), require('../assets/case/ddh/6.jpg')],
    name: '大都会',
    id: 'ddh',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/kcxq/1.jpg'), require('../assets/case/kcxq/2.jpg'), require('../assets/case/kcxq/3.jpg'), require('../assets/case/kcxq/4.jpg'), require('../assets/case/kcxq/5.jpg')],
    name: '客村小区',
    id: 'kcxq',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/dhjdgy/1.jpg'), require('../assets/case/dhjdgy/2.jpg'), require('../assets/case/dhjdgy/3.jpg'), require('../assets/case/dhjdgy/4.jpg'), require('../assets/case/dhjdgy/5.jpg'), require('../assets/case/dhjdgy/6.jpg')],
    name: '敦禾酒店公寓',
    id: 'dhjdgy',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/hzwm/1.jpg'), require('../assets/case/hzwm/2.jpg'), require('../assets/case/hzwm/3.jpg'), require('../assets/case/hzwm/4.jpg')],
    name: '海珠外贸',
    id: 'hzwm',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/hzflc/1.jpg'), require('../assets/case/hzflc/2.jpg'), require('../assets/case/hzflc/3.jpg'), require('../assets/case/hzflc/4.jpg')],
    name: '海珠富力城',
    id: 'hzflc',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/pzgjcg/1.jpg'), require('../assets/case/pzgjcg/2.jpg'), require('../assets/case/pzgjcg/3.jpg'), require('../assets/case/pzgjcg/4.jpg'), require('../assets/case/pzgjcg/5.jpg')],
    name: '琶洲国际采购',
    id: 'pzgjcg',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/ymkjy/1.jpg'), require('../assets/case/ymkjy/2.jpg'), require('../assets/case/ymkjy/3.jpg'), require('../assets/case/ymkjy/4.jpg'), require('../assets/case/ymkjy/5.jpg')],
    name: '益民科技园',
    id: 'ymkjy',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/lgxq/1.jpg'), require('../assets/case/lgxq/2.jpg'), require('../assets/case/lgxq/3.jpg'), require('../assets/case/lgxq/4.jpg'), require('../assets/case/lgxq/5.jpg')],
    name: '萝岗小区',
    id: 'lgxq',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/fcxq/1.jpg'), require('../assets/case/fcxq/2.jpg'), require('../assets/case/fcxq/3.jpg'), require('../assets/case/fcxq/4.jpg')],
    name: '芳村小区',
    id: 'fcxq',
    title: '项目名称'
  }, {
    imgs: [require('../assets/case/blklw/1.jpg'), require('../assets/case/blklw/2.jpg'), require('../assets/case/blklw/3.jpg'), require('../assets/case/blklw/4.jpg')],
    name: '金山洲',
    id: 'jsz',
    title: '项目名称'
  }, {
    imgs: [require('../assets/designCase/cmkj/1.jpg'), require('../assets/designCase/cmkj/2.jpg')],
    name: '潮漫科技',
    id: 'cmkj',
    title: '样图案例名称'
  }, {
    imgs: [require('../assets/designCase/hetyd/1.jpg'), require('../assets/designCase/hetyd/2.jpg')],
    name: '海尔体验店',
    id: 'hetyd',
    title: '样图案例名称'
  }, {
    imgs: [require('../assets/designCase/lpkj/1.jpg'), require('../assets/designCase/lpkj/2.jpg')],
    name: '利派科技',
    id: 'lpkj',
    title: '样图案例名称'
  }, {
    imgs: [require('../assets/designCase/mskj/1.jpg'), require('../assets/designCase/mskj/2.jpg')],
    name: '美硕科技',
    id: 'mskj',
    title: '样图案例名称'
  }, {
    imgs: [require('../assets/designCase/xph/1.jpg'), require('../assets/designCase/xph/2.jpg')],
    name: '鑫品航电子有限公司',
    id: 'xph',
    title: '样图案例名称'
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
