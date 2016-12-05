<template>
  <div class='banner'>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img :src="img1" style="width: 100%">
          <div class="carousel-caption">
         </div>
      </swiper-slide>
      <swiper-slide>
        <img :src="img2" style="width: 100%">
      </swiper-slide>
      <swiper-slide>
        <img :src="img3" style="width: 100%">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
// import { carousel, slider } from 'vue-strap'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      img1: require('../assets/banner-1.jpg'),
      img2: require('../assets/banner-2.jpg'),
      img3: require('../assets/banner-3.jpg'),
      swiperOption: {
        name: 'currentSwiper',
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        lazyLoading: true,
        paginationBulletRender: (className, index) => {
          return `<span class="swiper-pagination-bullet swiper-pagination-bullet-custom">${index + 1}</span>`
        },
        // direction: 'vertical',
        // grabCursor: true,
        // setWrapperSize: true,
        // autoHeight: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next',
        // scrollbar: '.swiper-scrollbar',
        // mousewheelControl: true,
        // observeParents: true,
        // if you need use plugins in the swiper, you can config in here like this
        // swiper callbacks
        onTransitionStart: function (swiper) {
          // console.log('swiper', swiper)
        }
      }
    }
  },
  mounted () {
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lange='less'>
  .banner{
    width: 100%;
    margin-bottom: 10px;
    margin-top: -2px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  /*img[lazy='loading']{
    display: none;
  }*/
  .swiper-pagination-bullet-custom {
    width: 20px!important;
    height: 20px!important;
    text-align: center!important;
    line-height: 23px!important;
    font-size: 12px!important;
    color: #000!important;
    opacity: 1!important;
    background: gray!important;
  }
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color:#fff!important;
    background: #007aff!important;
  }
</style>
