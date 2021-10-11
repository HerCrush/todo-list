function loadDOM () {

    addProjectInput();
    
}

function addProjectInput () {

    const addProjInput = document.createElement('input');
    const addProjBtn = document.createElement('button');

    addProjInput.placeholder = 'New Project';
    addProjInput.id = 'project-input';
    addProjBtn.textContent = '+';
    addProjBtn.id = 'new-project';

    document.querySelector('main').append( addProjInput, addProjBtn );

    return addProjBtn;

}

function newProject (title) {

    const container = document.createElement('div');
    const header = document.createElement('h3');
    const deleteBtn = document.createElement('button');
    const addTodoBtn = document.createElement('button');
    const navBtn = document.createElement('button');

    header.textContent = title;
    deleteBtn.textContent = 'X';
    addTodoBtn.textContent = 'New Task';
    navBtn.textContent = title;

    container.classList.add('project');
    deleteBtn.classList.add('delete-project');
    addTodoBtn.classList.add('new-todo');

    container.append( header, deleteBtn, addTodoBtn );
    document.querySelector('main').appendChild(container);
    document.querySelector('nav').appendChild(navBtn);

    return { container, deleteBtn, addTodoBtn, navBtn };

}

// function newTodo (title, date, description, priority, project) {

//     const bigContainer = document.createElement('div');
//     const container = document.createElement('div');
//     const titleH = document.createElement('h4');
//     const dateH = document.createElement('h4');
//     const descriptionP = document.createElement('p');
//     const doneB = document.createElement('button');
//     const editB = document.createElement('button');
//     const deleteB = document.createElement('button');

//     titleH.textContent = title;
//     dateH.textContent = date;
//     descriptionP.textContent = description;
//     doneB.textContent = 'DONE';
//     editB.textContent = 'EDIT';
//     deleteB.textContent = 'DELETE';

//     bigContainer.classList.add('task');
//     container.classList.add('task-card');
//     doneB.classList.add('task-done');
//     editB.classList.add('task-edit');
//     deleteB.classList.add('task-delete');
//     container.classList.add(priority);

//     container.addEventListener( 'click', showHideDescription);
//     doneB.addEventListener( 'click', toggleTaskDone);
//     editB.addEventListener( 'click', editTask);
//     deleteB.addEventListener( 'click', deleteTask);

//     container.append(titleH, dateH, descriptionP);
//     bigContainer.append(container, editB, deleteB);
//     project.container.appendChild(bigContainer);

// }

// function showHideDescription () {

//     if (window.getSelection().type != 'Range') {
//         this.classList.toggle('expanded');
//     }

// }

export {

    loadDOM,
    addProjectInput,
    newProject
    
};