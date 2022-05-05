var _this = this;
window.onresize = _this.timerAction(function () {
  console.log('call resize...')
  _this.rootAction()
})

/**
 * < 定时器检测 >
 * @param {Function} fn 回调函数
 * @param {Number} delay 延迟时间
 * @return {string} val | val
 */
function timerAction(fn, delay = 500) {
  let lastTimes = 0
  return (...args) => {
    let nowTimes = new Date() - 0
    if (nowTimes - lastTimes < delay) {
      return
    }
    lastTimes = nowTimes
    fn(args)
  }
}

function rootAction() {
  const _this = this
  const defaultDesign = 1920
  setTimeout(() => {
    const deviceWidth = document.documentElement.clientWidth
    if (deviceWidth <= 1280) {
      var rootPixel = `${parseFloat(deviceWidth / defaultDesign).toFixed(2) * 16}`
      document.documentElement.style.fontSize = rootPixel + 'px'
    //   _this.rootPixel.number = rootPixel
      return
    }
    document.documentElement.style.fontSize = `16px`
  }, 250)
}


_this.rootAction()