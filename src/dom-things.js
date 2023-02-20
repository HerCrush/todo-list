const domThings = (() => {

    const projectInput = (() => {
        const input = document.createElement('input');
        const button = document.createElement('button');
        const load = () => {
            input.placeholder = 'New Project';
            input.id = 'project-input';
            button.textContent = '+';
            button.id = 'new-project';
            document.querySelector('main').append( input, button );
        }
    
        return { input, button, load };
    })();

    function project (title, key) {
        const container = document.createElement('div');
        const headDiv = document.createElement('div');
        const header = document.createElement('h3');
        const deleteBtn = document.createElement('button');
        const todosContainer = document.createElement('div');
        const addTodoBtn = document.createElement('button');
        const navBtn = document.createElement('a');
        function load() {
            headDiv.classList.add('project-header');
            header.textContent = title;
            deleteBtn.textContent = '+';
            addTodoBtn.textContent = '+';
            navBtn.textContent = title;
            container.classList.add('project');
            container.id = `project${key}`;
            deleteBtn.classList.add('delete-project');
            todosContainer.dataset.project = key;
            todosContainer.classList.add('todos-container');
            addTodoBtn.classList.add('new-todo');
            navBtn.setAttribute('href', `#project${key}`);
            headDiv.append(header, deleteBtn);
            container.append(headDiv, todosContainer, addTodoBtn);
            document.querySelector('#projects-container').appendChild(container);
            document.querySelector('nav').appendChild(navBtn);
        }

        return { container, deleteBtn, todosContainer, addTodoBtn, navBtn, load };
    }

    function todoInput() {
        const container = document.createElement('div');
        const headContainer = document.createElement('div');
        const title = document.createElement('input');
        const date = document.createElement('input');
        date.setAttribute('type', 'date');
        const description = document.createElement('input');
        const notImportantLabel = document.createElement('label');
        const ImportantLabel = document.createElement('label');
        const veryImportantLabel = document.createElement('label');
        const priority = (() => {
            const container = document.createElement('div');
            const notImportant = document.createElement('input');
            const important = document.createElement('input');
            const veryImportant = document.createElement('input');
            container.classList.add('priority-container')
            notImportant.setAttribute('type', 'radio');
            notImportant.setAttribute('name', 'priority');
            notImportant.id = 'not-important';
            important.setAttribute('type', 'radio');
            important.setAttribute('name', 'priority');
            important.id = 'important';
            veryImportant.setAttribute('type', 'radio');
            veryImportant.setAttribute('name', 'priority');
            veryImportant.id = 'very-important';
            function getInput () {
                switch(true) {
                    case notImportant.checked:
                        return notImportant.value;
                        break;
                    case important.checked:
                        return important.value;
                        break;
                    case veryImportant.checked:
                        return veryImportant.value;
                        break;
                }
            }

            return { container, notImportant, important, veryImportant, getInput };
        })();

        const buttonsContainer = document.createElement('div');
        const acceptBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');
        const load = (projContainer) => {
            title.placeholder = 'Title...';
            description.placeholder = 'Description...';
            acceptBtn.textContent = '✓';
            cancelBtn.textContent = 'cancel';
            notImportantLabel.textContent = 'not important';
            ImportantLabel.textContent = 'important';
            veryImportantLabel.textContent = 'very important';
            description.setAttribute('maxlenght', '280');
            notImportantLabel.setAttribute('for', 'not-important');
            ImportantLabel.setAttribute('for', 'important');
            veryImportantLabel.setAttribute('for', 'very-important');
            priority.notImportant.value = 'not-important';
            priority.important.value = 'important';
            priority.veryImportant.value = 'very-important';
            container.classList.add('todo-input');
            headContainer.classList.add('input-head-container');
            title.classList.add('title-input');
            date.classList.add('date-input');
            description.classList.add('description-input');
            priority.notImportant.classList.add('priority');
            priority.important.classList.add('priority');
            priority.veryImportant.classList.add('priority');
            buttonsContainer.classList.add('buttons-container');
            acceptBtn.classList.add('accept');
            cancelBtn.classList.add('cancel');
            headContainer.append(title, date);
            container.append(
                headContainer,
                description,
                priority.container,
                buttonsContainer
            );
            priority.container.append(
                priority.notImportant,
                notImportantLabel,
                priority.important,
                ImportantLabel,
                priority.veryImportant,
                veryImportantLabel
            );
            buttonsContainer.append(
                cancelBtn,
                acceptBtn,
            );

            projContainer.appendChild(container);
        };

        return {
            container,
            title,
            date,
            description,
            priority,
            acceptBtn,
            cancelBtn,
            load
        }

    };

    function todo(title, date, description, priority, projectKey) {
        const bigContainer = document.createElement('div');
        const container = document.createElement('div');
        const titleH = document.createElement('h4');
        const dateH = document.createElement('h4');
        const descriptionP = document.createElement('p');
        const doneBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        function setContent(newTitle, newDate, newDescription, newPriority) {
            titleH.textContent = newTitle;
            dateH.textContent = newDate;
            descriptionP.textContent = newDescription;
            container.dataset.priority = newPriority;
        }

        function load() {
            setContent(title, date, description, priority);
            doneBtn.textContent = 'DONE';
            editBtn.textContent = 'EDIT';
            deleteBtn.textContent = 'DELETE';
            bigContainer.classList.add('task');
            container.classList.add('task-card');
            container.classList.add('collapsed');
            titleH.classList.add('title');
            dateH.classList.add('date');
            doneBtn.classList.add('task-done');
            doneBtn.dataset.done = false;
            editBtn.classList.add('task-edit');
            deleteBtn.classList.add('task-delete');
            container.append(titleH, dateH, descriptionP);
            bigContainer.append(container, doneBtn, editBtn, deleteBtn);
            document.querySelector(`div[data-project="${projectKey}"]`).appendChild(bigContainer);
        }

        return { bigContainer, container, doneBtn, editBtn, deleteBtn, setContent, load };
    }

    return { projectInput, project, todoInput, todo };
})();

export { domThings };