import { createTask } from './components/Task.js';
import printHome from './print.js';
import createProject from './createProject.js';
import populateProjectsDiv from './populateProjectsDiv.js';
import switchToProj from './switchToProject.js';

document.body.appendChild(printHome());

createProject();

