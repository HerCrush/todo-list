import './reset.css';
import './style.css';
import { domThings } from './dom-things';
import { createProject } from './projects';
import { todo } from './todos';

domThings.projectInput.load();
domThings.projectInput.button.addEventListener( 'click' , () => {
    createProject(domThings.projectInput.input.value || domThings.projectInput.input.placeholder)
    domThings.projectInput.input.value = '';
});

// function newTodo ( thisProj ) {

//     thisProj.dom.addTodoBtn.remove();
//     const thisTodoInput = domThings.todoInput();
//     thisTodoInput.load(thisProj.dom.container);

//     thisTodoInput.acceptBtn.addEventListener( 'click' , makeNewTodo );

//     function makeNewTodo () {

//         thisProj.todos.push(todo(
//             thisTodoInput.title.value,
//             thisTodoInput.date.value,
//             thisTodoInput.description.value,
//             thisTodoInput.priority.getInput(),
//             thisProj.dom.container
//         ));

//         const index = thisProj.todos.length-1;
//         const thisTodo = thisProj.todos[index];

//         thisTodo.dom.container.addEventListener( 'click', showHideDescription);

//         function showHideDescription () {

//             if (window.getSelection().type != 'Range') {
//                 this.classList.toggle('expanded');
//             }
        
//         }

//         thisTodo.dom.deleteBtn.addEventListener( 'click' , () => {

//             thisTodo.dom.bigContainer.remove();
//             thisProj.todos.splice(index,1);

//         });

//         thisTodoInput.container.remove();
//         thisProj.dom.container.appendChild(thisProj.dom.addTodoBtn);

//     }

//     thisTodoInput.cancelBtn.addEventListener( 'click' , () => {

//         thisTodoInput.container.remove();
//         thisProj.dom.container.appendChild(thisProj.dom.addTodoBtn);

//     });

//     thisTodoInput.deleteBtn.addEventListener( 'click' , () => {

//         thisTodoInput.container.remove();
//         thisProj.dom.container.appendChild(thisProj.dom.addTodoBtn);

//     });

// }