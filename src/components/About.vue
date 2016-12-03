<template>
  <div class="">
    <div class="about">
      <div class='banner'>
        <img v-lazy="banner" alt="">
      </div>
    </div>
    <div class='descr'>
      <h2>公司简介</h2>
      <p>
        广州凯燊展览工程有限公司是一家专门从事展厅展览，设计施工的团队。<br/>
        自公司成立伊始，始终本着以人为本的科学态度。在以人品创作的企业精神指引下诚信务实，以质取胜。在工程设计上，我们密切关注世界设计潮流，但不苟同。
        <br/>我们的设计理念是：“设计源于生活，创作源于创新”。随着我国经济的快速发展，世界经济一体化的步伐加快，来自国内外装修行业的竞争将更趋激烈，为此我们制定了更加长远的发展战略，在同等的质量下，我们价格更实惠，在同等的价格下，我们服务更周到。<br/>
        为此全体广州凯燊人将团结一致众志成城，将最好的质量与服务奉献给千家万户。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: require('../assets/de_banner.jpg')
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

    img{
      width: 100%;
    }
  }
  .descr{
    width: 1200px;
    margin: 100px auto;
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
    .course{
      padding-left: 10px;
      h5{
        font-weight: bold;
      }
    }
  }
</style>
