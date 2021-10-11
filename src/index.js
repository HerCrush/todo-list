import './reset.css';
import './style.css';
import { loadDOM, addProjectInput } from './load-dom.js';
import { project } from './projects.js';

loadDOM();

let projects = [];

document.querySelector('#new-project').addEventListener( 'click' , newProject );

function newProject () {

    const input = document.querySelector('#project-input');
    const nameInput = input.value;
    const inputPlaceholder = input.placeholder;

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

    addProjectInput().addEventListener( 'click' , newProject );

}

function newTodo () {

    

}