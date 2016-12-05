<template>
  <div class='Csection'>
    <section class='propaganda'> <!-- 宣传 -->
      <div class='cont'>
        <div class='title'>
          <div class='sub-title en'><a herf='javascript:;' @click.prevent="navChange('/About')">OUR MISSION</a></div>
          <div class='sub-title cn'><a herf='javascript:;' @click.prevent="navChange('/About')">我们的宗旨</a></div>
          <p>凯燊将为您贴心打造最合适您品牌形象的展厅，为您打造最实效的营销型展厅</p>
        </div>
        <div class="youshi">
          <div class='wrap'>
            <div class="fl youshilf"><img :src="youShiImg" border="0"></div>
            <div class="youshiri">
            <span class="cnbt">要么做到 要么别承诺!</span>
            <span class="whitex"></span>
            <span class="enbt">Our commitments we do!</span>
            <span class="miaoshu">与凯燊合作，您将会得到更成熟的品牌建设服务。我们以客户至上，同时也相互挑战，力求呈现最好的品牌建设成果。</span>
            <span class="mslb">
              <i>NO1\项目初步接洽</i><i>NO4\实施施工制作</i> <br>
              <i>NO2\项目设计阶段</i><i>NO5\跟踪服务</i> <br>
              <i>NO3\方案合作 设计确认</i><i>NO6\回访服务</i> <br>
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class='case'>
      <div class='title'>
        <div class='sub-title en'><a href="javascript:;" @click.prevent="navChange('/About')">OUR PROJECTS</a></div>
        <div class='sub-title cn'><a  href="javascript:;" @click.prevent="navChange('/About')">我们的项目</a></div>
        <p>七年行业经验，博观而约取，厚积而薄发</p>
      </div>
      <div class='we-container'>
        <div class="row row-1">
          <div class="col-md-8 col-lg-8 col-xs-8">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item, index) in caseObj.caseForSlide">
                <!-- <a v-link="{ name: 'CaseDetail', params: { caseId: item.id }}">
                  <img v-lazy="item.src">
                </a> -->
                <router-link :to="{path: `/CaseDetail/${item.id}`}" class="router-a"></router-link>
                <img :src="item.src">
                <div class="carousel-caption">
                  {{item.name}}
                 </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
          <div class="col-md-4 case-right case-pic" v-for="item in caseObj.caseForRight">
            <!-- <a v-link="{ name: 'CaseDetail', params: { caseId: item.id }}">
              <img v-lazy="item.src" alt="">
            </a> -->
            <router-link :to="{path: `/CaseDetail/${item.id}`}" class="router-a"></router-link>
            <img :src="item.src">
            <div class='inner-title'>{{item.name}}</div>
            <div class='inner-back'></div>
          </div>
        </div>
        <div class="row row-2">
          <div class="col-md-3 col-xs-3 col-lg-3 case-bottom case-pic" v-for="item in caseObj.caseForBottom">
            <!-- <a v-link="{ name: 'CaseDetail', params: { caseId: item.id }}">
              <img v-lazy="item.src" alt="">
            </a> -->
            <router-link :to="{path: `/CaseDetail/${item.id}`}" class="router-a"></router-link>
            <img :src="item.src">
            <div class='inner-title'>{{item.name}}</div>
            <div class='inner-back'></div>
          </div>
        </div>
      </div>
    </section>
    <section class='service_items'>
      <div class='title'>
          <div class='sub-title en'><a herf='javascript:;' @click.prevent="navChange('/About')">OUR BUSINESSES</a></div>
          <div class='sub-title cn'><a herf='javascript:;' @click.prevent="navChange('/About')">我们的业务范围</a></div>
          <p>凯燊专业从事展览设计、展台搭建、展厅策划设计及工程制作</p>
        </div>
      <article class="text_c m_t80">
        <div class="we-container">
          <div class="trigger animated fadeInUp" data-animate="fadeInUp">
            <div class="grid_3 slide">
              <a href="javascript:;">
                <p class="p_t40 sort_ico">
                  <span class="t1"><img :src="serviceObj.t1"></span>
                  <span class="t2"><img :src="serviceObj.t2"></span>
                  <span class="t5"><img :src="serviceObj.slideBg"></span>
                </p>
                <div class="sort_name p_t20 p_b30 m_b10">
                  <span class="t3">
                    <h2 class="f20 fw6">企业展示厅</h2>
                    <p class="m_t15 p_lr20">企业展厅作为企业展示自身品牌形象的重要场所，已得到众多中大型的青睐，特别是一些注重品牌形象的企业。</p>
                  </span>
                  <span class="t4">
                    <h2 class="f20 fw6">企业展示厅</h2>
                    <p class="m_t15 p_lr20">企业展厅作为企业展示自身品牌形象的重要场所，已得到众多中大型的青睐，特别是一些注重品牌形象的企业。</p>
                  </span>
                </div>
              </a>
            </div>
            <div class="grid_3 slide">
              <a href="javascript:;">
                <p class="p_t40 sort_ico">
                  <span class="t1"><img :src="serviceObj.t3"></span>
                  <span class="t2"><img :src="serviceObj.t4"></span>
                  <span class="t5"><img :src="serviceObj.slideBg"></span>
                </p>
                <div class="sort_name p_t20 p_b30 m_b10">
                  <span class="t3">
                    <h2 class="f20 fw6">商业会展</h2>
                    <p class="m_t15 p_lr20">商业会展可以扩大企业知名度，了解行业内最新的咨询，企业参与商业展览，作为商品促销或采购的重要手段。</p>
                  </span>
                  <span class="t4">
                    <h2 class="f20 fw6">商业会展</h2>
                    <p class="m_t15 p_lr20">商业会展可以扩大企业知名度，了解行业内最新的咨询，企业参与商业展览，作为商品促销或采购的重要手段。</p>
                  </span>
                </div>
              </a>
            </div>
            <div class="grid_3 slide">
              <a href="javascript:;">
                <p class="p_t40 sort_ico">
                  <span class="t1"><img :src="serviceObj.t5"></span>
                  <span class="t2"><img :src="serviceObj.t6"></span>
                  <span class="t5"><img :src="serviceObj.slideBg"></span>
                </p>
                <div class="sort_name p_t20 p_b30 m_b10">
                  <span class="t3">
                    <h2 class="f20 fw6">办公&amp;家居</h2>
                    <p class="m_t15 p_lr20">办公空间设计的目的是为员工创造一个舒适、方便、卫生、安全、高效的工作环境，以便提高员工的工作效率。</p>
                  </span>
                  <span class="t4">
                    <h2 class="f20 fw6">办公&amp;家居</h2>
                    <p class="m_t15 p_lr20">办公空间设计的目的是为员工创造一个舒适、方便、卫生、安全、高效的工作环境，以便提高员工的工作效率。</p>
                  </span>
                </div>
              </a>
            </div>
            <div class="grid_3 slide last">
              <a href="javascript:;">
              <p class="p_t40 sort_ico">
                <span class="t1"><img :src="serviceObj.t7"></span>
                <span class="t2"><img :src="serviceObj.t8"></span>
                <span class="t5"><img :src="serviceObj.slideBg"></span>
              </p>
              <div class="sort_name p_t20 p_b30 m_b10">
                <span class="t3">
                  <h2 class="f20 fw6">品牌形象店</h2>
                  <p class="m_t15 p_lr20">品牌形象反映了品牌的实力与本质，是品牌的根基，所以企业必须十分重视塑造品牌的形象，设计品牌形象店。</p>
                </span>
                <span class="t4">
                  <h2 class="f20 fw6">品牌形象店</h2>
                  <p class="m_t15 p_lr20">品牌形象反映了品牌的实力与本质，是品牌的根基，所以企业必须十分重视塑造品牌的形象，设计品牌形象店。</p>
                </span>
              </div>
            </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
const caseObj = {
  caseForSlide: [
    {
      src: require('../assets/designCase/wenzhousenlin/1.jpg'),
      name: '温州森林食品',
      id: 'wenzhousenlin'
    }, {
      src: require('../assets/designCase/oumaide/1.jpg'),
      name: '欧迈德',
      id: 'oumaide'
    }, {
      src: require('../assets/designCase/longwei/1.jpg'),
      name: '龙魏',
      id: 'longwei'
    }
  ],
  caseForRight: [{
    src: require('../assets/designCase/hengfeng/1.jpg'),
    name: '恒丰机械',
    id: 'hengfeng'
  }],
  caseForBottom: [
    {
      src: require('../assets/designCase/nengshi/1.jpg'),
      name: '能十职能',
      id: 'nengshi'
    }, {
      src: require('../assets/designCase/guyue/1.jpg'),
      name: '浙江古越',
      id: 'guyue'
    }, {
      src: require('../assets/designCase/hancheng/1.jpg'),
      name: '韩城国际街',
      id: 'hancheng'
    }, {
      src: require('../assets/designCase/lifa/1.jpg'),
      name: '东莞力發',
      id: 'lifa'
    }
  ]
}
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      caseObj,
      serviceObj: {
        t1: require('../assets/service/t1.png'),
        t2: require('../assets/service/t2.png'),
        t3: require('../assets/service/t3.png'),
        t4: require('../assets/service/t4.png'),
        t5: require('../assets/service/t5.png'),
        t6: require('../assets/service/t6.png'),
        t7: require('../assets/service/t7.png'),
        t8: require('../assets/service/t8.png'),
        slideBg: require('../assets/service/slide_bg.png')
      },
      youShiImg: require('../assets/youshi.jpg'),
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        hashnav: true,
        lazyLoading: true
      }
    }
  },
  methods: {
    navChange: function (path) {
      this.updateRoutePath(path)
      this.$router.push(path)
    },
    ...mapActions([
      'updateRoutePath'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped >
  .Csection {
    margin-top: 20px;
    .title{
      width: 100%;
      text-align: center;
      margin-top: 50px;
      .sub-title{
        color: #eee;
        font-size: 25px;
        cursor: pointer;
        &.en{
          font-size: 35px;
        }
        a{
          color: #666;
        }
      }
      p{
        padding: 25px 0;
        font-size: 20px;
        line-height: 30px;
      }
    }
    .propaganda{
      width: 100%;
      .cont{
        text-align: center;
        .youshi{
          height: 600px;
          background-color: #000;
          width: 100%;
          .wrap{
            width: 1050px;
            margin: 0 auto;
            padding-top: 100px;
          }
        }
        .youshilf{ width:450px; float:left;}
        .youshiri{ width:520px; float:left; margin-left:80px; font-family:"microsoft yahei"; color:#FFF}
        .youshiri .cnbt{display:block; font-size:35px;  }
        .youshiri .whitex{width:200px; height:3px; background:#ec2222; margin:20px auto;display:block;}
        .youshiri .enbt{ display:block; font-size:32px; text-align:center; text-transform:uppercase; font-family:Century Gothic }
        .youshiri .miaoshu{display:block; font-size:20px;  margin:40px auto; line-height:40px; }
        .youshiri .mslb{ line-height:35px;}
        .youshiri .mslb i{ width:260px; float:left; font-style:normal;}
      }
    }
    .case{
      margin-bottom: 80px;
      .router-a{
        position: absolute;
        display: inline-block;
        left: 50px;
        width: 680px;
        height: 500px;
      }
      .we-container{
        width: 1200px;
        margin: 20px auto;
        margin-top: 40px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        padding: 15px 0 ;
        .row {
          padding: 0;
          margin: 0;
          &>div{
            height: 100%;
            .carousel {
              height: 100%;
              overflow: hidden;
            }
          }
        }
        .row-1 {
          height: 370px;
          margin-bottom: 30px;
          img {
            height: 370px;
            width: 100%;
          }
        }
        .row-2{
          img {
            height: 200px;
            width: 100%;
          }
        }
      }
      .case-right{
        overflow: hidden;
        height: 370px;
        width: 370px;
        padding: 0;
        margin: 0 15px;
        position: relative;
        a{
          overflow: hidden;
        }
      }
      .case-bottom {
        overflow: hidden;
        height: 200px;
        width: 270px;
        padding: 0;
        margin: 0 15px;
      }
      .case-pic {
        &:hover{
            .inner-title {
              height: 40px;
            }
            .inner-back {
              height: 40px;
            }
          }
        .inner-title{
          position: absolute;
          bottom: 0;
          width: 100%;
          height:0;
          background-color:  transparent;
          transition: all 0.5s;
          color:#fff;
          font-size: 18px;
          font-weight: bold;
          z-index: 3;
          text-align: center;
          padding-top: 10px;
        }
        .inner-back{
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 0;
          opacity: 0.5;
          background-color: #000;
          z-index: 2;
        }
      }
    }
    .carousel-caption{
      bottom: 25px;
      line-height: 10px;
      font-size: 18px;
      padding: 10px;
    }
    .service_items{
      width: 1200px;
      margin: 0 auto;
      .slide {
        overflow:hidden;
        float: left;
        width: 270px;
        height: 400px;
        margin-right: 35px;
        text-align: center;
        &.last{
          margin: 0;
        }
      }
      .slide .sort_ico,.slide .sort_name{position:relative; padding-bottom: 40px;}
      .slide a{display:block; background:#e7e7e7;-webkit-transition:all 0.5s ease 0s;-o-transition:all 0.5s ease 0s;transition:all 0.5s ease 0s}
      .slide a:hover{background:#c20000; text-decoration: none}
      .slide .t1{position:relative; margin:0 auto;left:0;display:block; text-align: center; top: 40px}
      .slide .t2{left:-214px; position: absolute; z-index:5; top: 40px}
      .slide .t3{position:relative;left:0;}
      .slide h2{ color:#333;}
      .slide p{ color:#666;}
      .slide .t4{position: absolute; z-index:1; width:100%;left:300px; bottom:40px;color:#fff}
      .slide a .t1,.slide a .t2,.slide .t3,.slide .t4,.slide a .t5,.slide h2{-webkit-transition:all 0.9s ease 0s;-o-transition:all 0.9s ease 0s;transition:all 0.9s ease 0s; opacity:1;z-index:1}
      .slide a .t2,.slide a .t5{opacity:0}
      .slide a:hover .t1{opacity:0; left:250px}
      .slide a:hover .t2{left:50%; margin-left:-62px;opacity:1}
      .slide a:hover .t3{left:-300px}
      .slide a:hover h2{color:#fff}
      .slide a:hover .t3 p,.slide a:hover .t4 p{color:#ffb3bb}
      .slide a:hover .t4{left:50%; margin-left:-50%}
      .slide a .t5{position: absolute; left:50%; top:45px; margin-left:-58px;z-index:0}
      .slide a:hover .t5{opacity:1}
    }
  }
</style>
<style lang='less'>
  .swiper-slide-active {
    position: relative;
  }
</style>
