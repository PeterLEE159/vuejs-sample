<template>

  <div id="app-todo-page">
    nested-page
    <!-- <div class="date-selector">
      <app-date-selector></app-date-selector>
    </div>
    <div class="todos">
      <div class="todos-option">
        <div class="mode">
          <button :class="['btn btn-default', { 'btn-primary':  isCreateMode }]" @click.stop="isCreateMode = true">생성</button>
          <button :class="['btn btn-default', { 'btn-primary':  !isCreateMode }]" @click.stop="isCreateMode = false">검색</button>
        </div>
        
        <input class="form-control" type="text" v-model="typed">
        <button class="btn btn-primary" @click.stop="onAddTodo">{{ isCreateMode ? '생성' : '검색' }}</button>
      </div>
      
      <app-todos></app-todos>
    </div> -->
  </div>


</template>

<script>
import AppDateSelector from './DateSelector.vue';
import AppTodos from './Todos.vue';
import { Todo } from '@/model/Todo';


export default {
  name: 'app-todo-page',
  
  data() {
    return {
      typed: '',
      isCreateMode: true
    }
  },
  components: {
    AppTodos,
    AppDateSelector
  },
  methods: {
    onAddTodo() {
      if(this.typed == '') {
        alert('입력');
        return;
      }
      
      const todo = new Todo();
      todo.content = this.typed;
      this.$http.service.todoService.createTodo(todo)
        .then((res) => {

        }
      );

      // const todo = new Todo();
      // this.$http.service.todoService.createTodo()
    }
  }
}
</script>


<style scoped lang="scss">
  #app-todo-page {
    display: flex;
    div {
      
    }
  }
  .date-selector {
    width: 200px;
    height: 100vh;
  }
  .todos {
    margin: 32px 0;
    padding: 12px;
    width: calc(100% - 600px);
    height: 100vh;
    .todos-option {
      button {
        border-radius: 0;
      }

      input {
        width: 150px;
        margin-top: 12px;
        transition: all 0.2s;
        position: relative;
        display: inline-block;
        border-radius: 0;
        &:focus {
          width: 50%;
          
        }
      }

    }
    
  }
  
</style>
