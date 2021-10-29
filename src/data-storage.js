import { createProject } from "./projects";
import { createTodo } from "./todos";

const dataStorage = (() => {
    let projectCounter = 0;
    let todoCounter = 0;
    function storeProject(data) {
        const storageBefore = localStorage.length;
        localStorage.setItem(`project${data.key}`, JSON.stringify(data));
        const storageAfter = localStorage.length;
        if(storageBefore !== storageAfter) {
            projectCounter += 1;
            localStorage.setItem('projectCounter', projectCounter);
        }
    }

    function removeProject(key) {
        localStorage.removeItem(`project${key}`);
        projectCounter -= 1;
        localStorage.setItem('projectCounter', projectCounter);
    }

    function storeTodo(data) {
        const storageBefore = localStorage.length;
        localStorage.setItem(`todo${data.key}`, JSON.stringify(data));
        const storageAfter = localStorage.length;
        if(storageBefore !== storageAfter) {
            todoCounter += 1;
            localStorage.setItem('todoCounter', todoCounter);
        }
    }

    function removeTodo(key) {
        localStorage.removeItem(`todo${key}`);
        todoCounter -= 1;
        localStorage.setItem('todoCounter', todoCounter);
    }

    function loadStoredData() {
        projectCounter = JSON.parse(localStorage.getItem('projectCounter'));
        todoCounter = JSON.parse(localStorage.getItem('todoCounter'));
        for(let projectIndex = 0; projectIndex < projectCounter; projectIndex += 1) {
            const data = JSON.parse(localStorage.getItem(`project${projectIndex}`));
            createProject(data.name);
        }
        for(let todoIndex = 0; todoIndex < todoCounter; todoIndex += 1) {
            const data = JSON.parse(localStorage.getItem(`todo${todoIndex}`));
            createTodo(data.title, data.date, data.description, data.priority, data.projectKey, data.isDone);
        }
    }

    return { storeProject, removeProject, storeTodo, removeTodo, loadStoredData };
})();

export { dataStorage };