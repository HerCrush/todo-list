import { domThings } from './dom-things';
import { editNewTodo } from './todos';
import { dataStorage } from './data-storage';

let projects = [];
function updateProjects() {
    projects.forEach((e, index) => e.setKey(index));
    dataStorage.removeProject(projects.length);
    projects.forEach(e => dataStorage.storeProject(e.data));
}

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
        projects.splice(key, 1);
        updateProjects();
    }

    const data = { key, name };

    return { getKey, setKey, load, data };
}

function createProject(name) {
    const thisProject = project(name);
    thisProject.load();
    projects.push(thisProject);
    dataStorage.storeProject(thisProject.data);
}

export { project, createProject };