<template>

  <div id="app-todos">
    
    <!-- <img src="@/assets/logo.png" alt=""> -->

    <div class="typed-group">
      <input type="text" v-model="typed">
      <button @click="onAddTodo">생성</button>
      <div><span>{{ msg }}</span></div>
    </div>
    
    <div class="todo-group mt-5">
      <ul class="list-group">
        <li v-for="(todo, index) in todos" :key="todo.id" class="list-group-item">
          
          <div v-if="!todo.isEdit">
            {{ index + 1 }}.
            <span>{{ todo.name }}</span>
            <a href="#" @click.stop="todo.isEdit = true">수정</a>
            <a href="#" @click.stop="deleteTodo">삭제</a>
          </div>

          <div v-if="todo.isEdit">
            {{ index + 1 }}.
            <input type="text" :value="todo.name" ref="todoEditInput">
            <a href="#" @click.stop="onEditComplete(todo)">완료</a>
            <a href="#" @click.stop="deleteTodo(todo)">삭제</a>
          </div>





          
        </li>
      </ul>

    </div>
  </div>


</template>

<script>
import todosService from '@/service/todos.service';
import { from , forkJoin } from 'rxjs';

export default {
  name: 'app-todos',
  data() {
    return {
      typed: '',
      msg: '',
      todos: []
    }
  },
  created() {

    // const todos = [
    //   { content: '프로토타입 작업', date: '20190721', priority: '높음', progress: '설계' },
    //   { content: '진행상태 보고', date: '20190722', priority: '높음', progress: '수정' },
    //   { content: '주관회의 참석 보고', date: '20190722', priority: '높음', progress: '수정' }
    // ];
    
    // for(let todo of todos) {
    //   this.$http.service.todoService.createTodo(todo);
    // }

    // for(let id = 0; id < 20 ; id ++ ){
    //   this.todos.push( { id: this.$uuid.v1(), name: `TODOS ${id+1} 회차`, isEdit: false } )
    // }
  },
  
  mounted() {
    this.$http.service.todoService.getTodos('20190722')
      .then(res => {

      }).catch(err => {
        
      });
  },

  methods: {
    onEditComplete(todo) {
      todo.isEdit = false;
      todo.name = this.$refs.todoEditInput[0].value;
      
    },
    onAddTodo() {
      if(this.typed == '') {
        alert('todo를 입력하세요');
        return;
      }

      this.todos.push( { id: this.$uuid.v1(), name: this.typed, isEdit: false });
      this.typed = '';
    },

    deleteTodo(todo) {
      let idx = 0;
      for(let i =0 ; i < this.todos.length ; i ++) {
        if(todo != this.todos[i]) continue;
        idx = i;
        break;
      }

      if(idx == -1) return;

      this.todos.splice(idx, 1);
    }
  }
}
</script>


<style scoped lang="scss">
  #app-todos {
    padding: 24px;
  }
  .typed-group {
    margin-bottom: 32px;
  }
  li.list-group-item {
    div {
      display: flex;
      flex-direction: row;
      span, input {
        flex: 7;
        margin: 0 12px;
      }
      a {
        flex: 1;
      }
    }
  }
  
</style>
