import App from '../App.vue'
import { mount } from '@vue/test-utils'

describe('App', () => {
    it('renders in App', () => {
      const $route = { path: './components/HelloWorld.vue' }
      const wrapper = mount(App, {
        mocks: {
          $route
        }
      })
      expect(wrapper.vm.$route.path).toBe($route.path)
    })
  })