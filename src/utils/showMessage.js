import { getComponentRootDom } from '@/utils/index'
import Icon from '@/components/Icon/index.vue'
import style from '@/styles/showMessage.module.less'
/**
 *
 * @param {Object} options 配置对象
 */
export default function (options) {
  const content = options.content || '提示消息'
  const type = options.type || 'info'
  const duration = options.duration || 2000
  const container = options.container || document.body
  const div = document.createElement('div')
  const IconDom = getComponentRootDom(Icon, {
    type: 'success'
  })
  // console.log(IconDom.outerHTML)
  const contentStyle = style.content
  div.innerHTML = `${IconDom.outerHTML}<span class="${contentStyle}" >${content}</span>`
  div.classList.add(style.message)
  const messageTypeStyle = `message-${type}`
  div.classList.add(style[messageTypeStyle])
  if (options.container) {
    if (getComputedStyle(options.container).position === 'static') {
      options.container.style.position = 'relative'
    }
  }
  container.appendChild(div)

  const width = div.clientWidth
  console.log(width)
  div.style.opacity = 1
  div.style.transform = 'translate(-50%,-50%)'

  setTimeout(() => {
    div.style.opacity = 0// 过渡效果
    div.style.transform = 'translate(-50%,-50%) translateY(-15px)'

    div.addEventListener('transitionend', function () {
      div.remove()
      options.callback && options.callback()
    }, {
      once: true
    })
  }, duration)
}
