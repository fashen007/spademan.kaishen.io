<template>
  <div class='Csection'>
    <section class='case'>
        <div class="title"></div>
        <div class='container'>
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
    <section class="service">
      <div class="title"></div>
      <div class="my-container">
        <div class="animate active">
          <div class="hline"></div>
            <ul class="point">
              <li class="p-1"><span class="circle"></span><span class="vline"></span><span class="ico"></span></li>
              <li class="p-2"><span class="circle"></span><span class="vline"></span><span class="ico"></span></li>
              <li class="p-3"><span class="circle"></span><span class="vline"></span><span class="ico"></span></li>
              <li class="p-4"><span class="circle"></span><span class="vline"></span><span class="ico"></span></li>
              <li class="p-5"><span class="circle"></span><span class="vline"></span><span class="ico"></span></li>
              <li class="p-6"><span class="circle"></span><span class="vline"></span><span class="ico"></span></li>
              <li class="p-7"><span class="circle"></span><span class="vline"></span><span class="ico"></span></li>
              <li class="p-8"><span class="circle"></span><span class="vline"></span><span class="ico"></span></li>
            </ul>
            <ul class="txt">
              <li class="t-1">1.家装咨询</li>
              <li class="t-2">2.确认设计师</li>
              <li class="t-3">3.签订设计协议</li>
              <li class="t-4">4.设计测量</li>
              <li class="t-5">5.签订装修合同</li>
              <li class="t-6">6.施工，生产</li>
              <li class="t-7">7.验收安装</li>
              <li class="t-8">8.售后保修</li>
            </ul>
        </div>
        <div class="i_icon">
          <ul>
            <li class="icon1">正品保障</li>
            <li class="icon2">主材厂价直销</li>
            <li class="icon3">专业检验</li>
            <li class="icon4">178个全包项目</li>
            <li class="icon5">1对1专业服务</li>
          </ul>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { carousel, slider } from 'vue-strap'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
const caseObj = {
  caseForSlide: [
    {
      src: require('../assets/case/flxtd/7.jpg'),
      name: '富力新天地梦媛斯汀生物科技',
      id: 'flxtd'
    }, {
      src: require('../assets/case/zhjsw/1.jpg'),
      name: '中海金沙湾',
      id: 'zhjsw'
    }, {
      src: require('../assets/case/xpds/3.jpg'),
      name: '兴普大厦',
      id: 'xpds'
    }
  ],
  caseForRight: [{
    src: require('../assets/case/gjss/1.jpg'),
    name: '国际私塾',
    id: 'gjss'
  }],
  caseForBottom: [
    {
      src: require('../assets/case/hzwm/1.jpg'),
      name: '海珠外贸',
      id: 'hzwm'
    }, {
      src: require('../assets/case/pzgjcg/1.jpg'),
      name: '琶洲国际采购',
      id: 'pzgjcg'
    }, {
      src: require('../assets/case/ddh/1.jpg'),
      name: '大都会',
      id: 'ddh'
    }, {
      src: require('../assets/case/jsz/1.jpg'),
      name: '金沙洲',
      id: 'jsz'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped >
  .Csection {
    margin-top: 20px;
    .title{
      height: 60px;
      width: 100%;
      background: url(../assets/title-2.png) no-repeat center;
    }
    .case{
      margin-bottom: 80px;
      .title{
        height: 60px;
        width: 100%;
        background: url(../assets/title-1.png) no-repeat center;
      }
      .router-a{
        position: absolute;
        display: inline-block;
        left: 50px;
        width: 680px;
        height: 500px;
      }
      .container{
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
    .service {
      .title {
        margin-top: 10px;
        margin-bottom: 50px;
      }
    }
    /*无忧售后*/
    .service{ background:url(../assets/ico4.png) -9999; padding:40px 0 ;padding: 0 25px;}
    .service .container{ width: 1200px;}
    .service .animate{ height:172px; position:relative;}
    .service .hline{ height:3px; background:#ffd4d4; position:relative; top:50%;}
    .service .txt{ position:absolute; top:82px; height:0; width:100%; text-align:center; font-size:18px; color:#969696;}
    .service li{ width:12.5%; float:left; position:relative; }
    .service .t-1,.service .t-3,.service .t-5,.service .t-7{top:-35px;}
    .service .t-2,.service .t-4,.service .t-6,.service .t-8{bottom:-10px;}
    .service .point{ position:absolute; width:100%; top:78px;}
    .service .point .circle{ display:block; width:16px; height:16px; background:url(../assets/ico4.png) no-repeat -227px 0; margin:0 auto;}
    .service .point .vline{ width:2px; height:21px; background:#fccaca; position:absolute; left:50%; margin-left:-1px;}
    .service .p-1 .vline,.service .p-3 .vline,.service .p-5 .vline,.service .p-7 .vline{ top:18px;}
    .service .p-2 .vline,.service .p-4 .vline,.service .p-6 .vline,.service .p-8 .vline{ bottom:18px; transform-origin:bottom center;-webkit-transform-origin:bottom center;}
    .service .point .ico{ position:absolute; width:51px; height:51px; background:url(../assets/ico4.png) no-repeat; left:50%; margin-left:-25px;}
    .service .p-1 .ico,.service .p-3 .ico,.service .p-5 .ico,.service .p-7 .ico{ margin-top:23px;}
    .service .p-2 .ico,.service .p-4 .ico,.service .p-6 .ico,.service .p-8 .ico{ margin-top:-90px;}
    .service .p-2 .ico{ background-position:-56px 0;}
    .service .p-3 .ico{ background-position:-112px 0;}
    .service .p-4 .ico{ background-position:-168px 0;}
    .service .p-5 .ico{ background-position:0 -56px;}
    .service .p-6 .ico{ background-position:-56px -56px;}
    .service .p-7 .ico{ background-position:-112px -56px;}
    .service .p-8 .ico{ background-position:-168px -56px;}
    .service .animate.active .vline{animation:vline ease 1s both;}
    .service .animate.active .ico{ animation:ico 1s both;}
    .service .animate.active .p-2 .ico,.animate.active .p-2 .vline{ animation-delay:.2s;}
    .service .animate.active .p-3 .ico,.animate.active .p-3 .vline{ animation-delay:.4s;}
    .service .animate.active .p-4 .ico,.animate.active .p-4 .vline{ animation-delay:.6s;}
    .service .animate.active .p-5 .ico,.animate.active .p-5 .vline{ animation-delay:.8s;}
    .service .animate.active .p-6 .ico,.animate.active .p-6 .vline{ animation-delay:1s;}
    .service .animate.active .p-7 .ico,.animate.active .p-7 .vline{ animation-delay:1.2s;}
    .service .animate.active .p-8 .ico,.animate.active .p-8 .vline{ animation-delay:1.4s;}

    @keyframes vline{
      0%{ height:0;}
      100%{ height:21px;}
    }
    @-webkit-keyframes vline{
      0%{ height:0;}
      100%{ height:21px;}
    }
    @-webkit-keyframes ico{
      0%{-webkit-transform:scale(0);}
      50%{-webkit-transform:scale(1.2);}
      100%{-webkit-transform:scale(1);}
    }
    @keyframes ico{
      0%{ transform:scale(0);-webkit-transform:scale(0);}
      50%{transform:scale(1.2);-webkit-transform:scale(1.2);}
      100%{transform:scale(1);-webkit-transform:scale(1);}
    }
 /*   .house-show li{ width:234px; height:206px; float:left; margin:30px 3px 0; position:relative;overflow: hidden;}
    .house-show li p{ position:absolute; left:0; bottom:0; background:#4D4D4D;text-align:center;font-size:14px; width:100%; height:30px; line-height:30px;}
    .house-show li a{ color:#fff;}*/
    }
    .service .i_icon { height: auto; margin-top: 40px; margin-bottom: 80px; cursor: pointer; width: 100%;min-width: 1200px;overflow: hidden;}
    .service .i_icon ul {width: 1080px; margin: 0 auto;}
    .service .i_icon ul li { background: url(../assets/icon.png) no-repeat; float: left; width: 198px; height: 165px; color: #666666; text-align: center; padding-top: 123px; border: 1px #efefef solid; }
    .service .i_icon ul li.icon1 { background-position: 69px 29px; border-right: 0px; }
    .service .i_icon ul li.icon2 { background-position: 69px -133px; border-right: 0px; }
    .service .i_icon ul li.icon3 { background-position: 69px -295px; border-right: 0px; }
    .service .i_icon ul li.icon4 { background-position: 69px -457px; border-right: 0px; }
    .service .i_icon ul li.icon5 { background-position: 69px -619px; }
    .service .i_icon ul li.icon1:hover { background-position: -134px 29px; color: #fcb939; }
    .service .i_icon ul li.icon2:hover { background-position: -134px -133px; color: #fcb939; }
    .service .i_icon ul li.icon3:hover { background-position: -134px -295px; color: #fcb939; }
    .service .i_icon ul li.icon4:hover { background-position: -134px -457px; color: #fcb939;}
    .service .i_icon ul li.icon5:hover { background-position: -134px -619px; color: #fcb939;  }
</style>
<style lang='less'>
  .swiper-slide-active {
    position: relative;
  }
</style>
