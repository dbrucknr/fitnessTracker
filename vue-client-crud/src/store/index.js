import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module';
import dataServices from "../services/dataServices"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workouts: [],
    currentWorkout: {},
  },
  mutations: {
    setWorkouts(state, payload) {
      state.workouts = payload;
    }
  },
  actions: {
    retrieveWorkouts({ commit }) {
      dataServices.getAll()
        .then(response => {
          commit('setWorkouts', response.data);
        })
        .catch(error => {
          console.log(`Error: ${error}`);
        }
      );
    },
    removeAllWorkouts({ dispatch }) {
      dataServices.deleteAll()
        .then(response => {
          console.log(response.data);
          dispatch('retrieveWorkouts');
        })
        .catch(error => {
          console.log(error);
        }
      );
    },
  },
  modules: {
    auth
  }
})
