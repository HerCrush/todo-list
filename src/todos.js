import { domThings } from "./load-dom";

function todo (title, date, description, priority, project) {


    function setInfo (newTitle, newDate, newDescription, newPriority) {
        title = newTitle;
        date = newDate;
        description = newDescription;
        priority = newPriority;
    }

    const dom = domThings.newTodo(title, date, description, priority, project);

    return { setInfo, dom };

}

export {

    todo

}