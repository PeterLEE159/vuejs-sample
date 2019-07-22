<template>

  <div id="app-todos">
    
  </div>


</template>

<script>
import todosService from '@/service/todos.service';
import { from , forkJoin } from 'rxjs';

export default {
  name: 'app-todos',
  
  data() {
    return {

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
        console.log(res);
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
  
</style>
