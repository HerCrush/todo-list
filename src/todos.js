import { domThings } from "./dom-things";

function todo(title, date, description, priority, projectKey) {
    const dom = domThings.todo(title, date, description, priority, projectKey);
    function load() {
        dom.load();
        dom.doneBtn.addEventListener('click', toggleDone);
        dom.editBtn.addEventListener('click', editTodo);
        dom.deleteBtn.addEventListener('click', deleteTodo);
    }

    let isDone = false;
    function toggleDone() {
        isDone = !isDone;
        dom.container.dataset.done = isDone;
    }

    function getIsDone() {
        return isDone;
    }

    function editTodo() {
        
    }
    
    function deleteTodo() {
        dom.bigContainer.remove();
    }

    return { load, toggleDone, getIsDone };
}

function editNewTodo(todosContainer, addTodoButton, projectKey) {
    addTodoButton.classList.add('hidden');
    const todoEdition = domThings.todoInput();
    todoEdition.load(todosContainer);
    function endEditing() {
        todoEdition.container.remove();
        addTodoButton.classList.remove('hidden');
    }

    todoEdition.acceptBtn.addEventListener('click', () => {
        createTodo(
            todoEdition.title.value,
            todoEdition.date.value,
            todoEdition.description.value,
            todoEdition.priority.getInput(),
            projectKey
        );
        endEditing();
    });

    todoEdition.cancelBtn.addEventListener('click', endEditing);
    todoEdition.deleteBtn.addEventListener('click', endEditing);
}

function createTodo(title, date, description, priority, projectKey) {
    const thisTodo = todo(title, date, description, priority, projectKey);
    thisTodo.load();
}

export {
    todo,
    editNewTodo
};