import Vue from 'vue';
import { createStore } from 'vuex';

export default createStore({

  state: {
    todo: {
      id_todolist: '',
      title: '',
      description: '',
      time: 0,
    },
  },

  mutations: {  //Funciones para cambiar el valor de las variables
    actualizartodo(state, newtodo) {
      state.todo = newtodo;
    },
  },

  actions: {  //Funciones para realizar acciones asincronas y llamar a mutaciones
    actualizartodo({ commit }, newtodo) {
      commit('actualizartodo', newtodo);
    },
  }

});
