<template>
  <div class="">
    <div class="join">
      <div class='banner'>
        <img src="../assets/join/banner.jpg" alt="">
      </div>
    </div>
    <div class='descr'>
      <h2>业务员</h2>
      <ul>
        <!-- <li>
          <span><img src="../assets/join/limg25_2.png"></span>
          <p>招聘人数：3人(限女性)</p>
        </li> -->
        <li>
          <span><img v-lazy="banner"></span>
          <p>
              工作职责<br>
              岗位要求：<br>
          </p>
          <p>
          1.形象较好,工作心态好；
          </p>
          <p>2.有市场开拓能力,善于交际沟通,注重人际关系,能承受工作压力,上进心强；</p>
          <p>3.敢于挑自我,有一定的语言表达能力沟通能力；吃苦耐劳,敢于付出,有敬业精神,有团队合作精神</p>
          <p>4.上班时间: 9:00--6:00,午休90分钟!,一个月休息4天.</p>
        </li>
        <li>
          <span><img src="../assets/join/limg25_2.png"></span>

          <p>联 系 人：恒盈人事部 联系电话：020-29055283 电子邮箱：3396719517@qq.com （请将简历发送至此电子邮箱，并注明应聘的岗位）</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: require('../assets/join/limg15_1.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .fl{
    float: left;
  }
  .banner{
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .descr{
    width: 1200px;
    margin: 25px auto;
    text-align: left;
    line-height: 25px;
    color:#666;
    h2{
      width: 100%;
      text-align: left;
      font-size: 20px;
      color:#444;
      border-left: 3px solid #FDB324;
      padding-left: 10px;
    }
    li{
      position:relative;
      padding-left:35px;
      margin-bottom:25px;
      span{
        position:absolute;
        display:block;
        width:25px;
        height:21px;
        text-align:center;
        line-height:21px;
        left:0px;
        top:6px;
      }
      p{
        font-size:16px;
        line-height:30px;
        color:#565656;
      }
      a{
        display:block;
        width:138px;
        height:48px;
        line-height:48px;
        text-align:center;
        color:#fff;
        font-size:14px;
        background:#e15517;
      }
    }
  }
</style>
