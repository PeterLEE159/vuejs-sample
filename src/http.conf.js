import Vue from 'vue';
import axios from 'axios';
import { from, forkJoin, Observable } from 'rxjs';
import todoService from '@/service/todos.service';


axios.defaults.baseURL = 'https://vue-test-896f7.firebaseio.com/';


axios.interceptors.request.use(conf => {
  // interceptor before request
  return conf;
});

axios.interceptors.response.use(res => {
  // intercept after fetching
  return res.data;
}, err => {
  return err;
});


axios.parseF = ((data = {}) => {
  const parsed = [];
  for(let key in data) {
    parsed.push(data[key]);
  }
  return parsed;
});

axios.forkJoin = (oriThreads = []) => {
  const threads = [];
  for(let oriThread of oriThreads) {
    threads.push(from(oriThread));
  }
  return forkJoin(threads);
};

axios.service = {
  todoService
}



// Vue.prototype.$http = axios;

Observable.prototype.then = Observable.prototype.subscribe;