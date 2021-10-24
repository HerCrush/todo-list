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
        dom.container.classList.add('hidden');
        dom.doneBtn.classList.add('hidden');
        dom.editBtn.classList.add('hidden');
        dom.deleteBtn.classList.add('hidden');
        const todoEdition = domThings.todoInput();
        todoEdition.load(dom.bigContainer);
        todoEdition.title.value = title;
        todoEdition.date.value = date;
        todoEdition.description.value = description;
        switch(priority) {
            case 'not-important':
                todoEdition.priority.notImportant.checked = true;
                break;
            case 'important':
                todoEdition.priority.important.checked = true;
                break;
            case 'very-important':
                todoEdition.priority.veryImportant.checked = true;
                break;
        }

        todoEdition.acceptBtn.addEventListener('click', () => {
            title = todoEdition.title.value;
            date = todoEdition.date.value;
            description = todoEdition.description.value;
            priority = todoEdition.priority.getInput();
            dom.setContent(
                title,
                date,
                description,
                priority
            );
            todoEdition.container.remove();
            dom.container.classList.remove('hidden');
            dom.doneBtn.classList.remove('hidden');
            dom.editBtn.classList.remove('hidden');
            dom.deleteBtn.classList.remove('hidden');
        });

        todoEdition.cancelBtn.addEventListener('click', () => {
            todoEdition.container.remove();
            dom.container.classList.remove('hidden');
            dom.doneBtn.classList.remove('hidden');
            dom.editBtn.classList.remove('hidden');
            dom.deleteBtn.classList.remove('hidden');
        });

        todoEdition.deleteBtn.addEventListener('click', deleteTodo);
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