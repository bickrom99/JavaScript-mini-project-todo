const todoList = [];

renderTodoList();

// render means when through the input and press value, then this value go to disply
function renderTodoList() {

    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<li>${todo}</li>`;
        todoListHTML += html;
    }

    // show result display
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

// todo add button
// todo add button
    function addTodo() {
    const inputElement = document.querySelector('#todo_add_btn');

    const input_value = inputElement.value;

    todoList.push(input_value);

    inputElement.value = '';
    
    renderTodoList();
}





    // for loop learn here (most very important)

    // step-1
    /*for (let i = 0; i<=5; i++){
        console.log(i);*/

    // step-2
    /*const todoLists = [
        'make dinner', 
        'wash dinner', 
        'watch youtube'
    ];

    for (let i = 0; i < todoLists.length; i++) {
        const todo_value = todoLists[i];
        console.log(todo_value);
    } */


    // step-3

   /* const nums = [1,1,3];
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        total += num;
    }

    const numDouble = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        numDouble.push(element * 2);
    }
    console.log(numDouble); */