<template>
  <div class="">
    <div class="join">
      <div class='banner'>
        <img src="../assets/case/banner.jpg" alt="">
      </div>
    </div>
    <div class='case-list'>
      <h3 style='text-align: left'>项目案例</h3>
      <ul id='grid' v-masonry="{ columnWidth: 200 }">
        <li v-for="(item, index) in caseObj" class='grid-item'>
          <router-link :to="{path: `/CaseDetail/${item.id}`}" class="router-a">
          <!-- <a v-link="{ name: 'CaseDetail', params: { caseId: item.id }}"> -->
           <img v-lazy="item.src" alt="">
           <div class='bg'></div>
           <div class='title'>{{item.name}}</div>
          <!-- </a>   -->
          </router-link>
        </li>
      </ul>
      <h3 style='text-align: left'>设计案例样图</h3>
       <ul id='grid' v-masonry="{ columnWidth: 200 }">
        <li v-for="(item, index) in designCaseObj" class='grid-item'>
          <!-- <a v-link="{ name: 'CaseDetail', params: { caseId: item.id }}"> -->
          <router-link :to="{path: `/CaseDetail/${item.id}`}" class="router-a">
           <img v-lazy="item.src" alt="">
           <div class='bg'></div>
           <div class='title'>{{item.name}}</div>
          <!-- </a> -->
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  var caseObj = [
    {
      src: require('../assets/case/flxtd/1.jpg'),
      name: '富力新天地梦媛斯汀生物科技',
      id: 'flxtd'
    }, {
      src: require('../assets/case/zhjsw/1.jpg'),
      name: '中海金沙湾',
      id: 'zhjsw'
    }, {
      src: require('../assets/case/xpds/1.jpg'),
      name: '兴普大厦',
      id: 'xpds'
    }, {
      src: require('../assets/case/gjss/1.jpg'),
      name: '国际私塾',
      id: 'gjss'
    }, {
      src: require('../assets/case/ddh/1.jpg'),
      name: '大都会',
      id: 'ddh'
    }, {
      src: require('../assets/case/kcxq/1.jpg'),
      name: '客村小区',
      id: 'kcxq'
    }, {
      src: require('../assets/case/dhjdgy/1.jpg'),
      name: '敦禾酒店公寓',
      id: 'dhjdgy'
    }, {
      src: require('../assets/case/hzwm/1.jpg'),
      name: '海珠外贸',
      id: 'hzwm'
    }, {
      src: require('../assets/case/hzflc/1.jpg'),
      name: '海珠富力城',
      id: 'hzflc'
    }, {
      src: require('../assets/case/pzgjcg/1.jpg'),
      name: '琶洲国际采购',
      id: 'pzgjcg'
    }, {
      src: require('../assets/case/ymkjy/1.jpg'),
      name: '益民科技园',
      id: 'ymkjy'
    }, {
      src: require('../assets/case/lgxq/1.jpg'),
      name: '萝岗小区',
      id: 'lgxq'
    }, {
      src: require('../assets/case/fcxq/1.jpg'),
      name: '芳村小区',
      id: 'fcxq'
    }, {
      src: require('../assets/case/jsz/1.jpg'),
      name: '金山洲',
      id: 'jsz'
    }
  ]
  var designCaseObj = [{
    src: require('../assets/designCase/cmkj/1.jpg'),
    name: '潮漫数码科技',
    id: 'cmkj'
  }, {
    src: require('../assets/designCase/hetyd/1.jpg'),
    name: '海尔体验店',
    id: 'hetyd'
  }, {
    src: require('../assets/designCase/lpkj/1.jpg'),
    name: '利派科技',
    id: 'lpkj'
  }, {
    src: require('../assets/designCase/mskj/1.jpg'),
    name: '美硕科技',
    id: 'mskj'
  }, {
    src: require('../assets/designCase/xph/1.jpg'),
    name: '鑫品航电子有限公司',
    id: 'xph'
  }]
  export default {
    data () {
      return {
        caseObj: caseObj,
        designCaseObj: designCaseObj
      }
    }
  }
</script>
<style lang='less'>

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .fl{
    float: left;
  }
  .banner{
    width: 100%;
    margin: 0 auto;
    position: relative;
    img{
      width: 100%;
    }
  }
  .case-list{
    width: 1200px;
    margin: 50px auto 100px;
    ul{
      padding: 0;
      width: 100%;
      overflow: hidden;
      li{
        margin-top: 15px;
        overflow: hidden;
        a{
          display: inline-block;
          width: 200px;
          height: 230px;
          position: relative;
          background-color: #fff;
          img{
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1;
            left: 0;
            &[lazy=loaded] {
              -webkit-animation-duration: 1s;
              animation-duration: 1s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
              -webkit-animation-name: fadeIn;
              animation-name: fadeIn;
            }
            &[lazy=loading] {
              width: 40px;
              height: 40px;
              z-index: 1;
              left: -20px;
              bottom: 25%;
              margin-left: 50%;
            }
          }
          div{
            position: absolute;
            bottom: 0;
            left: 0;
            -webkit-transition: all .5s;
            -o-transition: all .5s;
            transition: all .5s;
            height: 0;
            width: 100%;
            &.bg{
              opacity: .7;
              background-color: #000;
              z-index: 2;
            }
            &.title{
              width: 100%;
              text-align: center;
              z-index: 3;
              font-size: 18px;
              line-height: 25px;
              color:#fff;
            }
          }
          &:hover{
            div{
              height: 25px;
            }
          }
        }
      }
    }
  }
</style>
