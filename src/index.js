import './reset.css';
import './style.css';
import { domThings } from './load-dom';
import { project } from './projects';
import { todo } from './todos';

domThings.newProjectInput.load();

let projects = [];

document.querySelector('#new-project').addEventListener( 'click' , newProject );

function newProject () {

    const input = domThings.newProjectInput.input;
    const nameInput = input.value;
    const inputPlaceholder = input.placeholder;

    input.value = '';
    input.remove();
    document.querySelector('#new-project').remove();

    const index = projects.push( project( nameInput || inputPlaceholder ) )-1;

    const thisProj = projects[index];

    thisProj.dom.addTodoBtn.addEventListener( 'click' , () => newTodo( thisProj ) );
    thisProj.dom.deleteBtn.addEventListener( 'click' , () => {

        thisProj.dom.container.remove();

        thisProj.dom.navBtn.remove();

        projects.splice(index,1);

    } )

    domThings.newProjectInput.load();
    domThings.newProjectInput.button.addEventListener( 'click' , newProject );

}

function newTodo ( thisProj ) {

    thisProj.dom.addTodoBtn.remove();
    const thisTodoInput = domThings.todoInput();
    thisTodoInput.load(thisProj.dom.container);

    thisTodoInput.acceptBtn.addEventListener( 'click' , makeNewTodo );

    function makeNewTodo () {

        thisProj.todos.push(todo(
            thisTodoInput.title.value,
            thisTodoInput.date.value,
            thisTodoInput.description.value,
            thisTodoInput.priority.getInput(),
            thisProj.dom.container
        ));

        const index = thisProj.todos.length-1;
        const thisTodo = thisProj.todos[index];

        thisTodo.dom.container.addEventListener( 'click', showHideDescription);

        function showHideDescription () {

            if (window.getSelection().type != 'Range') {
                this.classList.toggle('expanded');
            }
        
        }

        thisTodoInput.container.remove();
        thisProj.dom.container.appendChild(thisProj.dom.addTodoBtn);

    }

    thisTodoInput.cancelBtn.addEventListener( 'click' , () => {

        thisTodoInput.container.remove();
        thisProj.dom.container.appendChild(thisProj.dom.addTodoBtn);

    });

    thisTodoInput.deleteBtn.addEventListener( 'click' , () => {

        thisTodoInput.container.remove();
        thisProj.dom.container.appendChild(thisProj.dom.addTodoBtn);

    });

}