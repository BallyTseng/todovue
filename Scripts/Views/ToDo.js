var app4 = new Vue({
    el: '#app',
    data: {
        todoText: '',
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
    ,
    methods: {
        addTodo: function () {
            this.todos.push({ text: this.todoText }); 
            this.todoText = ''; 
        },
        delTodo: function (index) {
            this.todos.splice(index, 1);
        },
        clearAll: function () {
            this.todos = []; 
        }
    }
})
