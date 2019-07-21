<template>

  <div id="app-todos">
    
    <div class="typed-group">
      <input type="text" v-model="typed">
      <button @click="onAddTodo">생성</button>
      <span>{{ msg }}</span>
    </div>
    
    <button class="btn btn-default" @click="show = !show">toggle</button>

    <transition name="fade">
      <div v-if="show" class="alert alert-info">This is example</div>
    </transition>

    <transition name="slide">
      <div v-if="show" class="alert alert-info">This is example</div>
    </transition>

    <div v-if="show" class="slidein alert alert-info" :class="{slideout: !show}">This is example</div>

    <p>username</p>
    <input type="text" class="form-control" v-model="user.username">
    <p>email</p>
    <input type="email" class="form-control" v-model="user.password">
    <input type="text" class="form-control" v-model="node">
    <button class="btn btn-default" @click="submit">send</button>

    <button class="btn btn-default" @click="fetch">fetch</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users" :key="user.username">
        {{ user.username }} - {{ user.password }}
      </li>
    </ul>

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
      todos: [],
      show: true,
      user: {
        username: '',
        password: ''
      },
      users: [],
      resources: {},
      node: 'data'
    }
  },
  created() {
    // for(let id = 0; id < 20 ; id ++ ) {
    //   this.todos.push( { id: this.$uuid.v1(), name: 'TODOS' } )
    // }
    // 

    const customAction = {
      saveAlt: { method: 'POST', url: 'alt.json' },
      getData: { method: 'GET' }
    };

    this.resources = this.$resource('{node}.json', {}, customAction);
  },

  methods: {
    submit() {
      
      
      // this.$http.post('data.json', this.user)
      //   .then(res => {
      //     console.log(res);
      //   }, err => {
      //     console.err(err);
      //   });
      
      // this.resources.save({}, this.user);
      this.resources.saveAlt(this.user);

      
        
    },
    fetch() {
      this.resources.get({ node: this.node })
        .then(res => {
          return res.json();
          
        })
        .then(data => {
          const users = [];
          for(let key in data) {
            users.push(data[key]);
          }

          this.users=  users;

        }, err => {

        });
      // this.$http.get('data.json')
        // .then(res => {
        //   return res.json();
          
        // })
        // .then(data => {
        //   const users = [];
        //   for(let key in data) {
        //     users.push(data[key]);
        //   }

        //   this.users=  users;

        // }, err => {

        // });
    },
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
  
  .slidein {
    animation: slide-in 1s ease-out forwards, fade-in 0.5s ease-out forwards;
  }
  .slideout {
    animation: slide-out 1s ease-out forwards, fade-out 0.5s ease-out forwards;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
    // opacity: 1;
  }

  .fade-leave {
    
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity 1s;
  }

  // ##########################################################

  .slide-enter {
    // transform: translateY(-20px);
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 0.5s ease-out forwards, fade-in 0.2s ease-out forwards;
    // transition: opacity 0.2s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards, fade-out 0.2s ease-out forwards;
    // transition: opacity 0.2s;
    // opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .alert {
    margin-top: 3rem;
  }
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
