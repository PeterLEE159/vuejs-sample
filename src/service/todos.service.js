
import axios from 'axios';
import store from '@/store';

export default {

    path: 'todos.json',

    getTodos(date = '') {
        
        const path = `${this.path}?orderBy="date"&equalTo="${date}"`;
        
        return axios.get(path).then((res) => {
            res = axios.parseF(res);
            store.state.todos = res;
            return res;
        });
    },

    

    createTodo(todo) {

        return axios.post(this.path, todo).then((res) => {
            return res;
        });
    }
}