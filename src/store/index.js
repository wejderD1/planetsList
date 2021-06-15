import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    planets: {},
    pageNumber: 1,
    error: null,
    next: '',
    prev: '',
    planet: {}
  },
  mutations: {
    'CLEAR_PLANETS_DATA' (state) {
      state.planets = {}
    },
    'CLEAR_PLANET' (state) {
      state.planet = {}
    },
    'SET_PLANETS_LIST' (state, planets) {
      state.planets = planets
    },
    'SET_PLANET' (state, planet) {
      state.planet = planet
    },
    'SET_ERROR' (state, error) {
      state.error = error
    },
    'SET_NEXT' (state, next) {
      state.next = next
    },
    'SET_PREV' (state, prev) {
      state.prev = prev
    },
    'INC' (state) {
      if (state.next == null) {
        return
      }
      state.pageNumber++
    },
    'DEC' (state) {
      if (state.prev === null) {
        return
      }
      state.pageNumber--
    },
    'DEFAULT_PAGE' (state) {
      state.pageNumber = 1
    }
  },
  getters: {
    planets: state => state.planets,
    planet: state => state.planet,
    pageNumber: state => state.pageNumber

  },
  actions: {
    async getPlanetsData (context) {
      try {
        const req = await axios.get('https://swapi.dev/api/planets/?page=' + this.state.pageNumber)
        context.commit('SET_PLANETS_LIST', req.data.results)
        context.commit('SET_NEXT', req.data.next)
        context.commit('SET_PREV', req.data.previous)
      } catch (error) {
        console.log(error.message)
        context.commit('SET_ERROR', error.message)
      }
    },
    async getPlanetFromId (context, id) {
      try {
        const req = await axios.get('https://swapi.dev/api/planets/' + id)
        context.commit('SET_PLANET', req.data)
      } catch (error) {
        context.commit('SET_ERROR', error.message)
      }
    }
  }
})
