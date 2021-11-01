import { domThings } from './dom-things';
import { deleteTodosOfProject, editNewTodo } from './todos';
import { dataStorage } from './data-storage';

let projects = [];

function updateProjectsKeys() {
    projects.forEach((project, index) => {
        project.setKey(index);
        dataStorage.storeProject(project.data);
    });
}

function project(name) {
    let key = projects.length;
    const data = { key, name };
    const dom = domThings.project(name, key);
    function getKey() {
        return key;
    }

    function setKey(newKey) {
        key = newKey;
        data.key = newKey;
        dom.container.id = `project${newKey}`;
        dom.navBtn.setAttribute('href', `#project${newKey}`);
    }

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
        deleteTodosOfProject(key);
        updateProjectsKeys();
    }

    return { getKey, setKey, load, data };
}

function createProject(name) {
    const thisProject = project(name);
    thisProject.load();
    projects.push(thisProject);
    dataStorage.storeProject(thisProject.data);
}

export { project, createProject };