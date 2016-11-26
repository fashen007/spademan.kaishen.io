import Masonry from 'masonry-layout'
import Imagesloaded from 'imagesloaded'
export default {
  bind: function (el, binding) {
    new Imagesloaded(el, () => {
      new Masonry(el, {
    // options
        itemSelector: '.grid-item',
        columnWidth: 210,
        percentPosition: true,
        gutter: 30,
        initLayout: true
      })
    })
    // // console.log('scrollHeight-' + this.el.scrollHeight)
    // el.on('scroll', () => {
    //   let height = parseFloat(el.height())
    //   let scrollTop = parseFloat(el.scrollTop())
    //   let totalHeight = height + scrollTop
    //   console.log(el.height() + '-' + el.scrollTop() + '-' + totalHeight + '-' + el[0].scrollHeight)
    //   if (el[0].scrollHeight - totalHeight <= 3) {
    //     console.log(el.height() + '-' + el.scrollTop() + '-' + el[0].scrollHeight)
    //     this.vm[this.expression]()
    //   }
    // })
  }
}
