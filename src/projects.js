import { domThings } from './load-dom';

function project ( name ) {

    const dom = domThings.newProject(name);

    let todos = [];

    return { dom, todos };

}

export { project };