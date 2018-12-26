// 引入各种组件
import ClickSlider from './components/click-slider'
import Button from './components/button'
import DataPanel from './components/data-panel'


const components = [
  ClickSlider,
  Button,
  DataPanel
]

const install = function (Vue) {
  if (install.installed) return
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...components
}
