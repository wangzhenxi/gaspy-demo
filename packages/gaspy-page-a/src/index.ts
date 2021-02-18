
import { createApp } from 'vue'

function render() {
  createApp({
    render() {
      return 'vue rendered'
    }
  }).mount('#app')
}

render()
