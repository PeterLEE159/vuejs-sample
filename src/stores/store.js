import Vue from 'vue';
import Vuex, { mapGetters } from 'vuex';

Vue.use(Vuex);


// export default new Vuex().Store({
//     state: {
//         counter: 0
//     }
// })

export const store = new Vuex.Store({
    state: {
        counter: 0,
        typed: ''
    },
    getters: {
        double(state) {
            return state.counter * 2;
        }
        
    },
    mutations: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        }
    },
    // actions: {
  
    // }
  });

// const allGetters = [];
// for(let key in store.getters) {
//     allGetters.push(key);
// }
// console.log(allGetters);
// export const getters = mapGetters(...allGetters);
// console.log(getters);



