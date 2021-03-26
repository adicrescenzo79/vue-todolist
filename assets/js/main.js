var app = new Vue({
  el: '#root',
  data: {
    input: '',
    editing: false,
    indexEdit: '',
    todos: [
      {
        title: 'già fatto',
        status: 'done',
      },
      {
        title: 'ancora da fare',
        status: 'todo',
      },
      {
        title: 'ancora da fare tre volte',
        status: 'todo',
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
      if (!this.editing) {
        if (this.input != '') {
          let newTodo = {
            title: this.input,
            status: 'todo',
          }
          this.todos.push(newTodo);
          this.input = '';
        }
      } else {
        if (this.input != '') {

          this.todos[indexEdit].title = this.input
          this.input = '';
          this.editing = false;
        } else {
          this.editing = false;
        }

      }
    },

    fatto: function(todo){
      let index = this.todos.indexOf(todo);
      this.todos[index].status = 'done';
    },
    modifica: function(todo){
      indexEdit = this.todos.indexOf(todo);
      this.input = todo.title;
      this.editing = true;
    },
    remove: function(todo){
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1)
    }
  },

})
