import Vue from 'vue'
import Vuex from 'vuex'
import HttpService from '../services/HttpService'

Vue.use(Vuex)
//const httpServiceInit: HttpService = new HttpService('http://localhost:8080');
const httpServiceInit: HttpService = new HttpService('');

export default new Vuex.Store({
  state: {
    // the global fields
    httpService: httpServiceInit
  },
  getters: {
    //getters
    getHttpService(state): HttpService {
      return state.httpService;
    }
  },
  mutations: {
    // setters, synchronous transactions
    message(state, message): void {
      window.alert(message);
    }
  },
  actions: {
    // Instead of mutating the state, actions commit mutations.
    // Actions can contain arbitrary asynchronous operations.  
  },
  modules: {
  }
})
