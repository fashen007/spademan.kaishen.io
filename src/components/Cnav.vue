<template>
  <div class="nav">
    <div class='top-nav'>
      <a href="/" class="logo" title="广州凯燊展览工程有限公司"></a>
      <img class="logo-right" :src="logoRightImg" alt="广州凯燊展览工程有限公司">
      <ul class='intro'>
        <li>您好，欢迎来到广州凯燊展览官方网站</li>
        <!-- <a href="javascript:;" @click.prevent='addFavorite'>加入收藏</a> |  -->
        <li>
          <a class="tel" href="/"></a>
        </li>
      </ul>
    </div>
    <div class="container">
      <ul class="menu">
        <li :class="{ active: !currentPath}" @click="navChange('')"><router-link to="/">首页</router-link></li>
        <li :class="{ active: currentPath =='/About' }" @click="navChange('/About')"> <router-link to="/About">关于凯燊</router-link></li>
        <!-- <li><a v-link="{ currentPath: '/Design' }">设计作品</a></li> -->
        <li :class="{ active: currentPath =='/Case' || currentPath =='/CaseDetail' }" @click="navChange('/Case')"> <router-link to="/Case">相关案例</router-link></li>
        <li :class="{ active: currentPath =='/Article' || currentPath =='/ArticleDetail' }" @click="navChange('/Article')"><router-link to="/Article">行业知识</router-link></li>
        <li :class="{ active: currentPath =='/Join' }" @click="navChange('/Join')"><router-link to="/Join">加入我们</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      logoRightImg: require('../assets/right-logo.png')
    }
  },
  computed: {
    ...mapState({
      currentPath: state => {
        console.log('state.routePath.currentPath', state.routePath.currentPath)
        return state.routePath.currentPath
      }
    })
  },
  methods: {
    navChange: function (path) {
      this.updateRoutePath(path)
    },
    ...mapActions([
      'updateRoutePath'
    ]),
    addFavorite: function () {
      let tempsUrl = encodeURI(window.location)
      let sTitle = document.title
      let that = this
      try {
        window.external.addFavorite(tempsUrl, sTitle)
      } catch (e) {
        try {
          window.sidebar.addPanel(sTitle, tempsUrl, '')
        } catch (e) {
          that.$alert('加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.nav{
  border-bottom: 2px solid #fafafa;
  .container {
    width: 100%;
    height: 50px;
    background-color: #999;
  }
  .top-nav{
    width: 1100px;
    margin: 0 auto;
    height: 100px;
    padding-top: 20px;
    overflow: hidden;
    .logo{
      float: left;
      width: 245px;
      height: 70px;
      background: url(../assets/logo.jpg) no-repeat center;
      -webkit-background-size: contain;
      background-size: contain;
    }
    .logo-right{
      height: 100%;
    }
    .intro{
      float: right;
      line-height: 30px;
      text-align: center;
    }
  }
  .tel {
    display: inline-block;
    width: 233px;
    height: 20px;
    background: url(../assets/tel_400.png) no-repeat center;
    -webkit-background-size: contain;
    background-size: contain;
  }
  .menu {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    position: relative;
    clear: both;
    text-align: center;
    li {
      float: left;
      cursor: pointer;
      width: 150px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      &.active{
        background-color: #666;
        a {
          color: #fff;
        }
      }
      &:hover {
        background-color: #666;
      }
      a {
        display: inline-block;
        height: 100%;
        width: 100%;
        color: #ffffff;
        text-decoration: none;
        font-size: 16px;
        &:hover {
          color: #fff;
        }
      }
      &.sp {
        width: 1px;
        height: 100px;
        background-color: #eee;
        float: left;
      }
    }
  }
}
</style>
