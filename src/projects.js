import { domThings } from './dom-things';
import { editNewTodo } from './todos';

let projectCounter = 0;

function project(name) {
    const key = projectCounter;
    function getKey() {
        return key;
    }

    const dom = domThings.project(name, key);
    function load() {
        dom.load();
        dom.deleteBtn.addEventListener('click', removeFromDom);
        dom.addTodoBtn.addEventListener('click', () => {
            editNewTodo(dom.todosContainer, dom.addTodoBtn, key);
        });
    }

    function removeFromDom() {
        dom.container.remove();
        dom.navBtn.remove();
    }

    return { load, getKey };
}

function createProject(name) {
    const thisProject = project(name);
    thisProject.load();
    projectCounter += 1;
}

export { project, createProject };