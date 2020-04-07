import Vue from 'vue'
import Vant, { Lazyload } from 'vant'

Vue.use(Vant)
Vue.use(Lazyload)

Vue.filter('money', (value) => {
  const val = parseFloat(value)
  if (isNaN(val)) {
    return val
  } else {
    return `¥${val.toFixed(2)}`
  }
})
