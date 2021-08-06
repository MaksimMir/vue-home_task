import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    options: []
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
          for (let i = 0; i < 20; i++) {
            item.push({
              date: '31.01.2021',
              category: 'Sport',
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
          const options = ['Sport', 'Food', 'Education', 'Internet', 'Games', 'Others'];
          res(options);
        }, 1000)
      })
      .then(res => commit('setCategoriesListData', res));
    }
  },
  modules: {
  }
})
