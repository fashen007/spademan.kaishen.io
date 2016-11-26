<template>
  <div class="">
    <div class="article">
      <div class='banner'>
        <span class='title'>
          恒盈课堂
        </span>
        <img src="../assets/article/banner.jpg" alt="">
      </div>
    </div>
    <ul class='article-list'>
       <li v-for="(item, index) in article">
         <img v-lazy="item.imgUrl" class='fl'>
         <div class='fl descr'>
           <span class='type'>[{{ item.type }}]</span>
            <!-- <a class='title' v-link="{ name: 'ArticleDetail', params: { articleId: index }}"> {{item.title }} </a> -->
            <router-link :to="{path: `/ArticleDetail/${index}`}"> {{item.title }} </router-link>
           <p>
             {{item.intro}}
           </p>
         </div>
       </li>
    </ul>
  </div>
</template>

<script>
var article = [{
  title: '10款儿童房设计 总有一款适合你家宝贝',
  type: '装修知识',
  intro: ' 孩子的房间，除了环保、安全以外，梦幻、色彩斑斓应该就是最重要的了，有趣的、卡通的、炫酷的都是孩子们的最爱。... ',
  imgUrl: require('../assets/article/article-1.jpg')
}, {
  title: '四种办公室地毯材质的优缺点',
  type: '装修知识',
  intro: '客厅以米黄色为主，地面铺设瓷砖，墙面没有过于复杂造型，主要以流线型作为主体电视背景墙石膏板拉槽简单大方 餐厅简单布置，突出实用性，墙面简单挂画，色彩明亮。... ',
  imgUrl: require('../assets/article/article-2.jpg')
}, {
  title: '装修设计中最属简约设计风格有韵味',
  type: '装修知识',
  intro: '办公区域是公司员工工作的场所，所选用地毯要求质地紧密，绒毛不宜过高，方便办公椅的挪动。例如：价格，颜色，材质，以及是否环保。现代办公室地毯的颜色一般蓝色和烟灰色为... ',
  imgUrl: require('../assets/article/article-3.jpg')
}, {
  title: '办公室地毯的选择及日常维护',
  type: '装修贴士',
  intro: '办公区域是公司员工工作的场所，所选用地毯要求质地紧密，绒毛不宜过高，方便办公椅的挪动。例如：价格，颜色，材质，以及是否环保。现代办公室地毯的颜色一般蓝色和烟灰色为... ',
  imgUrl: require('../assets/article/article-4.jpg')
}, {
  title: '家庭装修中水电隐蔽工程包括的项目',
  type: '装修贴士',
  intro: ' 水电施工说白了就是水施工和电施工，这是开始装修的第一步，也是重要的一步，那么，水施工包括哪些项目呢?自己想想，其实就是铺设水管路，做好厨房和卫生间的防水。... ',
  imgUrl: require('../assets/article/article-5.jpg')
}, {
  title: '办公楼办公室装修风水布局大全',
  type: '风水知识',
  intro: '办公室装修根据办公室的使用者身份地位不同而不同，而老板的办公室装修无疑是最重要的。办公室装修风水在老板办公室中也是不可忽略的。... ',
  imgUrl: require('../assets/article/article-6.jpg')
}, {
  title: '简约欧式 别墅装修风格',
  type: '装修贴士',
  intro: '此案的设计从刚开始的自然清新，绿色，到后来的简约欧式，经过了好长时间的设计探讨。... ',
  imgUrl: require('../assets/article/article-7.jpg')
}, {
  title: '农村房屋风水学大解剖',
  type: '风水知识',
  intro: ' 风水学是流传了几千年历史，至今也在延续，住宅风水的好坏在不同的程度上会影响到人们的日常生活，所以农村房屋风水学入门我们必要了解的，才能打造好的农村房屋风水，... ',
  imgUrl: require('../assets/article/article-8.jpg')
}, {
  title: '书房装修创造舒适环境重要素',
  type: '风水知识',
  intro: ' 风水用于趋吉避凶，家居现代风水学讲的就是利用环境创造舒适的生活空间，利用风水来改变环境，从而达到好的居住条件，现在我们用风水讲求的就是一个舒适，... ',
  imgUrl: require('../assets/article/article-9.jpg')
}, {
  title: '接地气的现代风水学介绍',
  type: '风水知识',
  intro: '书房如何布置才能更舒适，即使这里是工作的地方，但也是令人愉快的地方，在布局，书桌以及采光方面，书房装修打造舒适环境掌握几个要素?...  ',
  imgUrl: require('../assets/article/article-10.jpg')
}]
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      article: article
    }
  },
  mounted () {
    const that = this
    that.updateRoutePath('/Article')
  },
  methods: {
    ...mapActions([
      'updateRoutePath'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .banner{
    width: 100%;
    margin: 0 auto;
    position: relative;
    .title{
      position: absolute;
      bottom:0;
      left: 21%;
      color:#fff;
      font-size: 35px;
    }
    img{
      width: 100%;
    }
  }
  .article-list{
    overflow: hidden;
    width: 1200px;
    margin: 20px auto;
    img{
      width: 130px;
      height: 100px;
      margin-right: 20px;
    }
    li{
      width: 100%;
      overflow: hidden;
      margin: 25px 0;
      .descr{
        padding-top: 10px;
        text-align: left;
        width:900px;
        line-height: 25px;
        span{
          font-size: 16px;
          color:#666;
          font-weight: bold;
          &.type{
            margin-right: 10px;
          }

        }
        .title{
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }
</style>
