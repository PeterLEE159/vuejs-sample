<template>

  <div id="app-todos">
    
    <div class="typed-group">
      <input type="text" v-model="typed">
      <button @click="onAddTodo">생성</button>
      <span>{{ msg }}</span>
    </div>
    
    <div class="todo-group">
      <ul>
        <li 
          v-for="(todo, index) in todos"
          :key="todo.id">
          {{ index + 1 }}회차 {{ todo.name }}
        </li>
      </ul>

    </div>
  </div>


</template>

<script>
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
    for(let id = 0; id < 20 ; id ++ ){
      this.todos.push( { id: this.$uuid.v1(), name: 'TODOS' } )
    }
  },

  methods: {
    onAddTodo() {
      if(this.typed == '') {
        this.msg = 'TODOS를 입력해주세요';
        return;
      }

      this.todos.push( { id: this.$uuid.v1(), name: this.typed} );
      this.typed = '';
    }
  }
};
</script>


<style scoped lang="scss">
  #app-todos {
    margin: 12px;
  }
  .todo-group {
    li {
      padding: 2px 0;
      
    }
  }
  .typed-group {
    display: flex;
    align-items: stretch;

    span {
      color: #f55;
      font-size: 12px;
    }
    input {
      width: 200px;
      border: 0;
      outline: 1px solid #ccc;
      
    }
    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: 0;
      background: white;
      outline: 1px solid #ccc;
      border: 0;
    }
  }
  
</style>
