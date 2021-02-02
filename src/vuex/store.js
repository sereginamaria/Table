import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";
/*import "db.json";*/

Vue.use(Vuex)

const store = new Vuex.Store( {
    state: {
        users: []
    },
    actions: {
        GET_USERS_FROM_API({commit}) {
            return axios('http://localhost:3000/user', {
                method: 'GET'
            })
                .then((response) => {
                commit('SET_USERS_TO_VUEX', response.data)
            }).catch(this.state.users=JSON.parse('db.json'))
        }
    },
    mutations: {
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users
        }
    },
    getters: {
        USERS(state){
            return state.users;
        }
    }
})

export default store;