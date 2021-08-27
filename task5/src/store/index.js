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
      const obj = {};
      for (let i = 0; i < state.options.length; i++) {
          let sum = 0;
          for (let j = 0; j < state.paymentList.length; j++) {
              if (state.options[i] == state.paymentList[j].category) {
                  sum += +state.paymentList[j].value;
              }
              
          }
          obj[state.options[i]] = sum
      }

      return obj;
    },
    getCategories: state => state.options
  },
  actions: {
    fetchData({commit}) {
      if (this.state.paymentList.length) return;
      const item = [];

      for (let i = 0; i < localStorage.length; i++) {            
        item.push(JSON.parse(localStorage.getItem(i)))
      }
      return commit('setPaymentListData', item)
    },
    fetchCategoriesList({commit}) {
      return new Promise((res) => {
        setTimeout(() => {
          res(this.state.options);
        }, 1000)
      })
      .then(res => commit('setCategoriesListData', res));
    }
  }
})

