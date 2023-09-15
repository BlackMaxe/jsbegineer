// 第一部分 侧栏滚动隐藏
(function() {
  const elevator = document.querySelector('.xtx-elevator')
  const xtx_entry = document.querySelector('.xtx_entry')
  window.addEventListener('scroll', function() {
    const n = document.documentElement.scrollTop
      // if (n > 300) {
      //   elevator.style.opacity = 1
      // } else {
      //   elevator.style.opacity = 0
      // }
      // elevator.style.opacity = n >= 300 ? 1 : 0
    elevator.style.opacity = n >= xtx_entry.offsetTop ? 1 : 0
  })

  const backTop = document.querySelector('#backTop')
  backTop.onclick = function() {
    window.scrollTo(0, 0)
  }
})();

// 第二部分 点击位移
(function() {
  const list = document.querySelector('.xtx-elevator-list')
  list.addEventListener('click', function(e) {
      // console.log(e.target.tagName)
      if (e.target.tagName === 'A' && e.target.dataset.name) {
        // console.log(e.target.dataset.name)
        const old = document.querySelector('.xtx-elevator-list .active')
        if (old) old.classList.remove('active')
        e.target.classList.add('active')
        const dis = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
        document.documentElement.scrollTop = dis
      }
    })
    // 第三部分 滚动案件active
  window.addEventListener('scroll', function() {

    const old = document.querySelector('.xtx-elevator-list .active')
    if (old) old.classList.remove('active')

    const news = document.querySelector('.xtx_goods_new')
    const popular = document.querySelector('.xtx_goods_popular')
    const brand = document.querySelector('.xtx_goods_brand')
    const topic = document.querySelector('.xtx_goods_topic')
    const n = document.documentElement.scrollTop
    if (n >= news.offsetTop && n < popular.offsetTop) {
      // 选择第一个小盒子
      document.querySelector('[data-name=new]').classList.add('active')
    } else if (n >= popular.offsetTop && n < brand.offsetTop) {
      document.querySelector('[data-name=popular]').classList.add('active')
    } else if (n >= brand.offsetTop && n < topic.offsetTop) {
      document.querySelector('[data-name=brand]').classList.add('active')
    } else if (n >= topic.offsetTop) {
      document.querySelector('[data-name=topic]').classList.add('active')
    }

  })


})()