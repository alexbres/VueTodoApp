var app = new Vue({
    el: '#app',
    data: {
        message: 'Todo List'
    },
    methods: {
        displayTodoList: function () {
            todoList.display();
            todoList.add('555');
        }
    }
})