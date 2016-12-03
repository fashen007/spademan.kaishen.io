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
        广州凯燊展览工程有限公司成立于2010年，是一家专业从事展览设计、展台搭建、展厅策划设计及工程制作的公司。<br/>
        一直以来，公司本着以专业化、国际化、市场化为发展方向，使客户企业品牌得到成长。<br/>
        不断进行探索创新，帮助客户提升品牌及项目影响力。广州凯燊展览工程有限公司时刻关注客户需求，与客户共发展、共创造，成就全球最具实力的会展领先企业。<br/>
        我们的理念: 以客户需求为根本，以专业为核心，以创新为精神，以诚信、务实为经营理念。<br/>
        我们的目标：在众多的品牌中让您公司形象独树一格，让您公司的宣传与业绩如鲲鹏展翅，大展宏图。<br/>
     </p>
      <h2>展台特装设计原则</h2>
      <p>
        展台形象代表着企业的形象，企业的实力的高低，就看公司的展台设计效果如何，它是企业品牌形象的具体体现。<br/>
        一个公司在不同的展览会上，展台的形式是各种各样的，但展台代表着企业标志，但核心内容是不会发生改变。<br/>
        这些核心的标志通常是由标准图形、标准色彩、标准字体等三部分组成。这些核心标志代表着企业独特的经营理念和企业使命，让人们一看见这些标志就能在大脑中反映出这是一家什么公司。<br/>
        所以，如何将企业标志融和到展台特装设计中去，这是体现企业特性、突出展台设计效果的一个关键。<br/>
        为了在众多的参展商中一支独秀，展台设计还必须有较强的视觉冲击力，在展台特装设计的形式上要有创新，要给观众和买家带来新鲜感和吸引力。<br/>
        随着特装设计软件的普遍应用，加上各种形式的展示材料的开发，独具创意的展台展现在人们面前时，能使人产生豁然开朗、耳目一新的感觉。<br/>
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
