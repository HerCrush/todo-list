import { newProject } from './load-dom.js';

function project ( name ) {

    let num;

    const dom = newProject(name);

    return { num, dom };

}

export {

    project

}