const todoList2 = [];

renderTodoList2();

// render means when through the input and press value, then this value go to disply
function renderTodoList2() {

    let todoList2HTML = '';
    for (let i = 0; i < todoList2.length; i++) {
        const todoObject = todoList2[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;
        const html = `
                <div class='name_value'>${name}</div>
                <div class='date_value'>${dueDate}</div>
                <button class='todo_onclick' onclick="
                    todoList2.splice(${i}, 1);
                    renderTodoList2();
                ">Delete</button>
                `;
        todoList2HTML += html;
    }

    // show result display
    document.querySelector('.js-todo-list2')
        .innerHTML = todoList2HTML;

}

// todo add button
// todo add button
    function addTodo2() {
    const inputElement = document.querySelector('#todo_add_btn2');
    const name = inputElement.value;

    const dueDateElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateElement.value;

    todoList2.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });

    inputElement.value = '';
    
    renderTodoList2();
}

