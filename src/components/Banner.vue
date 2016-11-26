<template>
  <div class='banner'>
    <!-- <carousel>
      <slider>
        <img src="../assets/banner-1.jpg">
          <div class="carousel-caption">
         </div>
      </slider>
      <slider>
        <img src="../assets/banner-2.jpg">
      </slider>
      <slider>
        <img src="../assets/banner-3.jpg">
      </slider>
    </carousel> -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/banner-4.jpg" style='height: 100%'>
          <div class="carousel-caption">
         </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/banner-5.jpg" style='height: 100%'>
          <div class="carousel-caption">
         </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/banner-1.jpg">
          <div class="carousel-caption">
         </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/banner-2.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/banner-3.jpg">
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
    margin-bottom: 80px;
  }
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
