<template>

  <div id="app-todos">
    
  </div>


</template>

<script>

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
    
  }
}
</script>


<style scoped lang="scss">
  
</style>
