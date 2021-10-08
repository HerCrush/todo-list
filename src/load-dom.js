function project (title) {
    const container = document.createElement('div');
    const header = document.createElement('h3');
    const button = document.createElement('button');

    header.textContent = title;
    button.textContent = title;

    container.classList.add('project');

    container.appendChild(header);
    document.querySelector('main').appendChild(container);
    document.querySelector('nav').appendChild(button);

    return {container};
};

function task (title, date, description, priority, project) {
    const bigContainer = document.createElement('div');
    const container = document.createElement('div');
    const titleH = document.createElement('h4');
    const dateH = document.createElement('h4');
    const descriptionP = document.createElement('p');
    const editB = document.createElement('button');
    const deleteB = document.createElement('button');

    titleH.textContent = title;
    dateH.textContent = date;
    descriptionP.textContent = description;
    editB.textContent = 'EDIT';
    deleteB.textContent = 'DELETE';

    bigContainer.classList.add('task');
    container.classList.add('task-card');
    editB.classList.add('task-edit');
    deleteB.classList.add('task-delete');

    container.append(titleH, dateH, descriptionP);
    bigContainer.append(container, editB, deleteB);
    project.container.appendChild(bigContainer);
}

export {
    project,
    task
};