import { domThings } from './dom-things';
import { editNewTodo } from './todos';
import { dataStorage } from './data-storage';

let projects = [];
function addTodoToProject(projectKey, todo) {
    projects[projectKey].addTodo(todo);
}

function updateProjectsKeys() {
    projects.forEach((project, index) => {
        project.setKey(index);
        dataStorage.storeProject(project.data);
    });
}

function project(name) {
    const todos = [];
    let key = projects.length;
    const data = { key, name };
    function getKey() {
        return key;
    }

    function setKey(newKey) {
        key = newKey;
        data.key = newKey;
        todos.forEach(todo => todo.setProjectKey(newKey));
    }

    const dom = domThings.project(name, key);
    function load() {
        dom.load();
        dom.deleteBtn.addEventListener('click', deleteProject);
        dom.addTodoBtn.addEventListener('click', () => {
            editNewTodo(dom.todosContainer, dom.addTodoBtn, key);
        });
    }

    function deleteProject() {
        dom.container.remove();
        dom.navBtn.remove();
        projects.forEach(project => dataStorage.removeProject(project.getKey())); 
        projects.splice(key, 1);
        todos.forEach(todo => todo.deleteTodo());
        updateProjectsKeys();
    }

    function addTodo(todo) {
        todos.push(todo);
    }

    return { getKey, setKey, load, data, addTodo };
}

function createProject(name) {
    const thisProject = project(name);
    thisProject.load();
    projects.push(thisProject);
    dataStorage.storeProject(thisProject.data);
}

export { project, createProject, addTodoToProject };