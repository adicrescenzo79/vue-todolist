var app = new Vue({
  el: '#root',
  data: {
    input: '',
    todos: [
      {
        title: 'ciao',
        status: 'todo',
      },
    ],
  },

  methods: {
    submit: function(){
      let newTodo = {
        title: this.input,
        status: 'todo',
      }
      this.todos.push(newTodo);
      this.input = ''
    }
  },
  mounted () {
  }

})
