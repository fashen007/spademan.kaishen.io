<template>
  <div class="">
    <!-- 多说评论框 start -->
    <!-- <div class='my-duoshuo'>
      <h2></h2>
      <span>留下您的联系方式,我们的设计师将第一时间联系您的哦</span>
      <div class="ds-thread" data-thread-key="index" data-title="测试" data-url=""></div>
    </div> -->
    <!-- 多说评论框 end -->
    <div class="footer">
        <div class="container">
            <div class="footer_left">
                <strong>联系我们</strong>
                <p>广州市天河区华强路3号富力盈力南塔406单元（新址）</p>
            </div>
            <div class="footer_middle">
                <strong>快速导航</strong>
                  <a @click.prevent="navChange('/About')">关于恒盈</a>
                  <a @click.prevent="navChange('/Join')">加入我们</a>
                  <a @click.prevent="navChange('/Case')">案例介绍</a>
                  <a @click.prevent="navChange('/Article')">装修知识</a>
                  <!-- <router-link to="/About" @click="navChange('/About')">关于恒盈</router-link>
                  <router-link to="/Join" @click="navChange('/Join')">加入我们</router-link>
                  <router-link to="/Case" @click="navChange('/Case')">案例介绍</router-link>
                  <router-link to="/Article" @click="navChange('/Article')">装修知识</router-link> -->
            </div>
            <div class="footer_right">
                <!-- <img src="/themes/images/weixin.png"> -->
                <strong>关于我们</strong>
                <p>恒盈的企业文化核心内涵是“创造”和“责任”以“正身之德”为已，以“载民之生为任”，企业的价值观：厚德载物，臻于至善...  </p>
                <a class="qq" href="mqqwpa://im/chat?chat_type=wpa&uin=3396719517"></a>
                <a class="weibo" href="http://weibo.com/u/2472618664"></a>
            </div>
            <div class='ewm'>
              <img src="../assets/ewm.jpg" alt="">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
// let url="mqqwpa://im/chat?chat_type=wpa&uin=1445607009";
// startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
import { mapActions } from 'vuex'
export default {
  components: {
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
<style lang='less' scoped>
  .my-duoshuo {
    width: 100%;
    min-width: 1200px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 0 30px;
    overflow: hidden;
    h2{
      width: 100%;
      height: 60px;
      background: url(../assets/title-3.png) no-repeat center;
    }
  }
    /*底部*/
  .footer { float: left; width: 100%; height: auto; margin: 0 auto; background: #444a58; margin-top: 30px; position: relative;}

  .footer .footer_left { float: left; width: 190px; height: auto; padding: 40px 0; color: #fff; }

  .footer .footer_left strong { float: left; width: 190px; padding: 5px 0; font-size: 14px; }

  .footer .footer_left p { float: left; line-height: 140%; font-size: 12px; width: 190px; }

  .footer .footer_middle { float: left; width: 240px; height: auto; padding: 40px 0; color: #fff; margin-left: 100px; display: inline;}

  .footer .footer_middle strong { float: left; width: 240px; padding: 5px 0; font-size: 14px; }

  .footer .footer_middle a { float: left; font-size: 12px; text-decoration: none; width: 80px; line-height: 200%; color: #fff; }

  .footer .footer_right { float: left; width: 370px; height: auto; padding: 40px 0; color: #fff; margin-left: 100px; display: inline; }

  .footer .footer_right img { float: right; }
  .footer .ewm {
    position: absolute;
    right: 30px;
    top: 25px;
    img {
      width: 120px;
    }
  }

  .footer .footer_right strong { float: left; width: 250px; padding: 5px 0; font-size: 14px; margin-left: 10px; }

  .footer .footer_right p { float: left; font-size: 12px; width: 250px;   margin-left: 10px; line-height: 140%; }

  .footer .footer_right .weixin { float: left; width: 30px; height: 24px; background: url(../assets/icon_weixin.png) no-repeat; margin: 5px 0 0 10px; display: inline; }

  .footer .footer_right .qq { float: left; width: 30px; height: 24px; background: url(../assets/icon_qq.png) no-repeat; margin: 5px 0 0 5px; display: inline; }

  .footer .footer_right .weibo { float: left; width: 30px; height: 24px; background: url(../assets/icon_weibo.png) no-repeat; margin: 5px 0 0 5px; display: inline; }

  .footer_bottom { float: left; width: 100%; height: auto; background: #282828; }

  .footer_bottom .line { float: left;  height: auto; color: #fff; font-size: 12px; padding: 20px 0; }

  .footer_bottom .copyright strong { float: left; color: #fff; font-size: 12px; }

  .footer_bottom .line a { text-decoration: none; color: #fff; }

  .footer_bottom .copyright { float: left; width: 480px; height: auto; padding: 20px 0; }

  .footer_bottom .copyright span { float: left; color: #fff; font-size: 12px; }
/*幻灯*/
</style>
