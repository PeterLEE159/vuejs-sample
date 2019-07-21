import App from './App.vue';
import Page from './components/page.vue';
import Todos from './components/todos.vue';

export const routes = [
  { path: '', component:  App },
  { path: '/page/:uid', component:  Page, props: true },
  { path: '/todos', component:  Todos },
];