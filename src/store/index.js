import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMail: '',
   },
   
   getters : {
     getterMail: state => state.userMail,
 },

 mutations:{
    mutateEmail: (state, userMail) => state.userMail = userMail
  },
  actions: {

  }
})
