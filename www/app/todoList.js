define(function () {

    function todoList() { }

    var _groceryList = [
        { id: 0, text: 'test1' },
        { id: 1, text: 'test2' },
        { id: 2, text: 'test3' }
    ];

    Vue.component('todo-cont', {
        props: ['data'],
        template:
            '<div>\
             <ol>\
                 <todo-item v-for="item in data" v-bind:todo="item" v-bind:key="item.id">\
                 </todo-item>\
             </ol>\
        </div>'
    });

    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    });

    function display() {
        var todoCont = new Vue({
            el: 'todo-cont',
            data: {
                groceryList: _groceryList,
                message: 'Todo List'
            }
        })
    }

    function add(value){
        _groceryList.push({
            id: _groceryList.length + 1,
            text: value
        });
    }

    //todoList.display = display;
    //todoList.add = add;

    //window.todoList = todoList;
	
	return {
        display: display,
		add: add
    };
});