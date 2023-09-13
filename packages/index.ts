import './base.scss'
import AnyButton from './button/index.vue'
import AnySpace from './space/index.vue'
import AnyIcon from './icon/index.vue'

export {
  AnyButton,
  AnySpace,
  AnyIcon,
}

export default {
  install(app){
    app.component('AnyButton', AnyButton)
    app.component('AnySpace', AnySpace)
    app.component('AnyIcon', AnyIcon)
  }
}
