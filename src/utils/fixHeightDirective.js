const fixHeightDirective = Vue => {
  Vue.directive('fixheight', {
      inserted: function (el) {
        el.style.minHeight = document.documentElement.clientHeight - 64 - 150 + 'px'
      }
    }
  )
}
export default fixHeightDirective
