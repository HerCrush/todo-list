import { domThings } from "./dom-things";
import { format, add } from "date-fns";
import { dataStorage } from "./data-storage";

let todos = [];
function todo(title, date, description, priority, projectKey) {
    let key = todos.length;
    function setKey(newKey) {
        key = newKey;
    }

    const dom = domThings.todo(title, date, description, priority, projectKey);
    function load() {
        dom.load();
        dom.container.addEventListener('click', () => {
            if ((window.getSelection().type != 'Range') && (description !== '')) {
                dom.container.classList.toggle('collapsed');
            }
        });
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
        if(date !== ''){
            todoEdition.date.value = format(new Date(date), 'yyyy-MM-dd');
        }
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
            if(todoEdition.date.value !== '') {
                date = format(add(new Date(todoEdition.date.value), {days: 1}), 'd / MMM / y (E)');
            }
            else {
                date = '';
            }
            description = todoEdition.description.value;
            priority = todoEdition.priority.getInput();
            dataStorage.storeTodo(data);
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

    const data = { key, title, date, description, priority, isDone, projectKey };

    return { setKey, load, toggleDone, getIsDone, data };
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
        let dateInput;
        if(todoEdition.date.value !== '') {
            dateInput = format(add(new Date(todoEdition.date.value), {days: 1}), 'd / MMM / y (E)');
        }
        else {
            dateInput = '';
        }

        createTodo(
            todoEdition.title.value,
            dateInput,
            todoEdition.description.value,
            todoEdition.priority.getInput(),
            projectKey
        );
        endEditing();
    });

    todoEdition.cancelBtn.addEventListener('click', endEditing);
    todoEdition.deleteBtn.addEventListener('click', endEditing);
}

function createTodo(title, date, description, priority, projectKey, isDone = false) {
    const thisTodo = todo(title, date, description, priority, projectKey);
    thisTodo.load();
    if(isDone) thisTodo.toggleDone();
    todos.push(thisTodo);
    dataStorage.storeTodo(thisTodo.data);
}

export {
    todo,
    editNewTodo,
    createTodo
};