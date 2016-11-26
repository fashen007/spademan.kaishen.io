<template>
  <div class="nav">
    <div class="container">
      <a href="/" class="logo" title="金煌装饰"></a>
      <a href="#" class="place" title="分站"></a>
      <a class="tel" href="/"></a>
      <ul class="menu">
        <!-- <li :class="{ active: !path}" v-on:click="navChange('')"><a v-link="{ path: '/' }">首页</a></li>
        <li :class="{ active: path =='/About' }" v-on:click="navChange('/About')"><a v-link="{ path: '/About' }">关于恒盈</a></li> -->
        <!-- <li><a v-link="{ path: '/Design' }">设计作品</a></li> -->
        <!-- <li :class="{ active: path =='/Case' }" v-on:click="navChange('/Case')"><a v-link="{ path: '/Case' }">案例介绍</a></li>
        <li :class="{ active: path =='/Article' }" v-on:click="navChange('/Article')"><a v-link="{ path: '/Article' }">装修知识</a></li>
        <li :class="{ active: path =='/Join' }" v-on:click="navChange('/Join')"><a v-link="{ path: '/Join' }">加入我们</a></li> -->

        <li :class="{ active: !currentPath}" @click="navChange('')"><router-link to="/">首页</router-link></li>
        <li :class="{ active: currentPath =='/About' }" @click="navChange('/About')"> <router-link to="/About">关于恒盈</router-link></li>
        <!-- <li><a v-link="{ currentPath: '/Design' }">设计作品</a></li> -->
        <li :class="{ active: currentPath =='/Case' || currentPath =='/CaseDetail' }" @click="navChange('/Case')"> <router-link to="/Case">案例介绍</router-link></li>
        <li :class="{ active: currentPath =='/Article' || currentPath =='/ArticleDetail' }" @click="navChange('/Article')"><router-link to="/Article">装修知识</router-link></li>
        <li :class="{ active: currentPath =='/Join' }" @click="navChange('/Join')"><router-link to="/Join">加入我们</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
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
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.nav{
  border-bottom: 2px solid #fafafa;
  .container {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    position: relative;
    clear: both;
  }
  .logo{
    float: left;
    width: 245px;
    height: 70px;
    background: url(../assets/logo.png) no-repeat center;
    margin-top: 20px;
  }
  .tel {
    display: block;
    width: 233px;
    height: 60px;
    float: right;
    background: url(../assets/tel_400.png) no-repeat center;
    margin-top: 20px;
  }
  .menu {
    float: right;
    margin-top: 30px;
    margin-right: 20px;
    li {
      float: left;
      width: 90px;
      height: 47px;
      text-align: center;
      margin-top: 15px;
      &.active{
        a {
          color: #ff3030;
          }
      }
      &:hover {
        color: #ff3030;
        /*border-bottom: 2px solid #ff3030;*/
      }
      a {
        color: #666666;
        text-decoration: none;
        font-size: 14px;
        &:hover {
          color: #ff3030;
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
