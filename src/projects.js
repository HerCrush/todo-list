import { domThings } from './dom-things';
import { editNewTodo } from './todos';
import { dataStorage } from './data-storage';

let projects = [];
function project(name) {
    let key = projects.length;
    function getKey() {
        return key;
    }

    function setKey(newKey) {
        key = newKey;
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
    }

    const data = { key, name }; //find a way to change data.key when project.key does

    return { getKey, setKey, load, data };
}

function createProject(name) {
    const thisProject = project(name);
    thisProject.load();
    projects.push(thisProject);
    dataStorage.storeProject(thisProject.data);
}

export { project, createProject };