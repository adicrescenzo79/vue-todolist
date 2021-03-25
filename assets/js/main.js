var app = new Vue({
  el: '#root',
  data: {
    input: '',
    todos: [
      {
        title: 'già fatto',
        status: 'done',
        editing: false,
      },
      {
        title: 'ancora da fare',
        status: 'todo',
        editing: false,
      },
      {
        title: 'ancora da fare tre volte',
        status: 'todo',
        editing: false,
      },


    ],
  },
  computed: {
    todosOrdered: function (){
      let todosTodo = this.todos.filter((todo) => todo.status == 'todo');
      let todosDone = this.todos.filter((todo) => todo.status == 'done');

      return [...todosTodo, ...todosDone]
    }
  },
  methods: {
    submit: function(){

      if (this.input != '') {
        let newTodo = {
          title: this.input,
          status: 'todo',
        }
        this.todos.push(newTodo);
        this.input = '';
      }
    },

    fatto: function(todo){
      let index = this.todos.indexOf(todo);
      this.todos[index].status = 'done';
    },
    modifica: function(todo){
      let index = this.todos.indexOf(todo);
      this.input = todo.title;
      this.todos.splice(index, 1);

    },
    remove: function(todo){
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1)
    }
  },

})
