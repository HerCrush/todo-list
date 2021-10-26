import './reset.css';
import './style.css';
import { domThings } from './dom-things';
import { createProject } from './projects';
import { dataStorage } from './data-storage';

if(localStorage.length !== 0) dataStorage.loadStoredData();
domThings.projectInput.load();
domThings.projectInput.button.addEventListener( 'click' , () => {
    createProject(domThings.projectInput.input.value || domThings.projectInput.input.placeholder)
    domThings.projectInput.input.value = '';
});