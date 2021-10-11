import './reset.css';
import './style.css';
import { loadDOM } from './load-dom.js';
import { project } from './projects.js';

loadDOM.refresh();

let projects = [];

document.querySelector('#new-project').addEventListener( 'click' , newProject );

function newProject () {

    const input = loadDOM.addProject.input;
    const nameInput = input.value;
    const inputPlaceholder = input.placeholder;

    input.value = '';
    input.remove();
    document.querySelector('#new-project').remove();

    const index = projects.push( project( nameInput || inputPlaceholder ) )-1;

    const thisProj = projects[index];

    thisProj.num = projects.length;
    thisProj.dom.container.id = `project${projects.length}`;

    thisProj.dom.addTodoBtn.addEventListener( 'click' , newTodo );
    thisProj.dom.deleteBtn.addEventListener( 'click' , () => {

        thisProj.dom.container.remove();

        thisProj.dom.navBtn.remove();

        projects.splice(index,1);

    } )

    loadDOM.addProject.load();
    loadDOM.addProject.button.addEventListener( 'click' , newProject );

}

function newTodo () {

    

}