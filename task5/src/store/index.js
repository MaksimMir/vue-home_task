import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    options: ['Sport', 'Food', 'Education', 'Internet', 'Games', 'Others']
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentList = payload;
    },
    addDataToPaymentsList(state, payload) {
      state.paymentList.push(payload);
    },
    setCategoriesListData(state, payload) {
      state.options = payload;
    },
    addCategoryToList(state, payload) {
      state.options.push(payload);
  }
  },
  getters: {
    getPaymentList: state => state.paymentList,
    getFullPay: state => {
      return state.paymentList.reduce((acc, val) => acc += val.value, 0)
    },
    getCategories: state => state.options
  },
  actions: {
    fetchData({commit}) {
      if (this.state.paymentList.length) return;
      return new Promise((res) => {
        setTimeout(() => {
          const item = [];
          const max = this.state.options.length;
          for (let i = 0; i < 20; i++) {
            const n = Math.floor(Math.random() * max);
            item.push({
              date: '31.01.2021',
              category: this.state.options[n],
              value: +Math.floor(Math.random() * 1000),
              id: i + 1
            })
          }
          res(item);
        }, 1000)
      })
      .then(res => commit('setPaymentListData', res));
    },
    fetchCategoriesList({commit}) {
      return new Promise((res) => {
        setTimeout(() => {
          res(this.state.options);
        }, 1000)
      })
      .then(res => commit('setCategoriesListData', res));
    }
  },
  modules: {
  }
})

