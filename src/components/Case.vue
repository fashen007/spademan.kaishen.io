<template>
  <div class="">
    <div class="join">
      <div class='banner'>
        <img src="../assets/designCase/banner.jpg" alt="">
      </div>
    </div>
    <div class='case-list'>
      <!-- <h3 style='text-align: left'>设计案例样图</h3>
       <ul id='grid' v-masonry="{ columnWidth: 200 }">
        <li v-for="(item, index) in designCaseObj" class='grid-item'>
          <router-link :to="{path: `/CaseDetail/${item.id}`}" class="router-a">
           <img v-lazy="item.src" alt="">
           <div class='bg'></div>
           <div class='title'>{{item.name}}</div>
          </router-link>
        </li>
      </ul> -->
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
    </div>
  </div>
</template>

<script>
  var caseObj = [
    {
      src: require('../assets/designCase/oumaide/1.jpg'),
      name: '欧迈德',
      id: 'oumaide'
    },
    {
      src: require('../assets/designCase/angudianqi/1.jpg'),
      name: '安固电器',
      id: 'angudianqi'
    }, {
      src: require('../assets/designCase/ailida/1.jpg'),
      name: '爱力达',
      id: 'ailida'
    }, {
      src: require('../assets/designCase/baozhi/1.jpg'),
      name: '宝智',
      id: 'baozhi'
    }, {
      src: require('../assets/designCase/guyue/1.jpg'),
      name: '浙江古越',
      id: 'guyue'
    }, {
      src: require('../assets/designCase/hancheng/1.jpg'),
      name: '韩城国际街',
      id: 'hancheng'
    }, {
      src: require('../assets/designCase/hengfeng/1.jpg'),
      name: '恒丰机械',
      id: 'hengfeng'
    }, {
      src: require('../assets/designCase/jond/1.jpg'),
      name: 'JOND',
      id: 'jond'
    }, {
      src: require('../assets/designCase/lifa/1.jpg'),
      name: '东莞力發',
      id: 'lifa'
    }, {
      src: require('../assets/designCase/longwei/1.jpg'),
      name: '龙魏水家电',
      id: 'longwei'
    }, {
      src: require('../assets/designCase/meiguogelan/1.jpg'),
      name: '美国格朗',
      id: 'meiguogelan'
    }, {
      src: require('../assets/designCase/mtech/1.jpg'),
      name: 'Mteach',
      id: 'mtech'
    }, {
      src: require('../assets/designCase/nengshi/1.jpg'),
      name: '能十智能港',
      id: 'nengshi'
    }, {
      src: require('../assets/designCase/xinyue/1.jpg'),
      name: '新月玩具',
      id: 'xinyue'
    }, {
      src: require('../assets/designCase/oupinjia/1.jpg'),
      name: '佛山欧品佳',
      id: 'oupinjia'
    }, {
      src: require('../assets/designCase/shenshenxiaofang/1.jpg'),
      name: '神圣消防',
      id: 'shenshenxiaofang'
    }, {
      src: require('../assets/designCase/chishon/1.jpg'),
      name: 'CHISHON',
      id: 'chishon'
    }, {
      src: require('../assets/designCase/tianzhun/1.jpg'),
      name: '天准',
      id: 'tianzhun'
    }, {
      src: require('../assets/designCase/wenzhousenlin/1.jpg'),
      name: '温州森林食品',
      id: 'wenzhousenlin'
    }, {
      src: require('../assets/designCase/wugang/1.jpg'),
      name: '武钢开圣',
      id: 'wugang'
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
