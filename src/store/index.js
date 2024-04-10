import { createStore } from "vuex";

const store = createStore({
  state: {
    userName: "",
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName;
    },
  },
  actions: {
    initDemoUser({ commit }, payload) {
      commit("setUserName", payload);
    },
  },
  getters: {},
  modules: {},
});

export default store;
