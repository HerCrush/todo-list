import { newProject } from './load-dom.js';

function project ( name ) {

    let num;

    const dom = newProject(name);

    let todos = [];

    return { num, dom, todos };

}

export {

    project

}