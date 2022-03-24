import createTask from "./components/Task";
import populateProjectsDiv from "./populateProjectsDiv";

export default function createProject() {
    const newProjectInput = document.querySelector('#new-project-input');
    const addProjectButton = document.querySelector('#add-project-btn');
    const cancelProjectButton = document.querySelector('#cancel-project-btn');
    const newProjectBtn = document.querySelector('#new-project-btn');

    function hideButtons() {
        cancelProjectButton.classList.add('invisible');
        addProjectButton.classList.add('invisible');
        newProjectInput.classList.add('invisible');
        newProjectBtn.classList.remove('invisible');
        newProjectInput.value = '';

    }

    //AN ARRAY THAT WE WILL PUSH ALL PROJECT NAMES TO
    //in plain text format, so that we can link the name 
    //in the array to the id element of the documentFragment  
    const projectNames = [];
    
    cancelProjectButton.addEventListener('click', function(){
        hideButtons();
    })

    addProjectButton.addEventListener('click', function(){

        if(newProjectInput.value.trim().length === 0) return;

        const newProject = document.createElement('p');
        newProject.textContent = newProjectInput.value;

        //append this newProject to the Projects Div and add style

        newProject.classList.add('projects');

        //or push to array, and then forEach project, append and style
        const projectsArray = [];
        projectsArray.id = 'projects-array';
        projectsArray.push(newProject);

        projectsArray.forEach(proj => {
            const newDiv = document.createElement('div');
            newDiv.id = proj.textContent + 'proj-id';
            newDiv.classList.add('new-project-div');
            newDiv.appendChild(proj);
            document.querySelector('#projects-wrapper').appendChild(newDiv);
            //pushing to project names array!
            projectNames.push(`${proj.textContent}-project`);
            console.log('projectNames array on next line')
            console.log(projectNames);

            //make projects splash page:
            const mainPanel = document.querySelector('#main-panel-id');
            const newPanel = document.createElement('div');
            newPanel.classList.add('new-panel');
            newPanel.id = 'new-panel-id';
            const newPanelTitleDiv = document.createElement('div');
            newPanelTitleDiv.classList.add('new-panel-title-div');
            const newPanelTitle = document.createElement('p');
            newPanelTitle.classList.add('new-panel-title');
            ////////////////////PANEL HEADLINE GETS PROJECT NAME. 
            newPanelTitle.textContent = newProject.textContent;
            newPanelTitleDiv.appendChild(newPanelTitle);

            /////////////
            //Prevent repeats: if the new panel is empty, attach.

            if(mainPanel.hasChildNodes() === false) {

                newPanel.appendChild(newPanelTitleDiv);
                mainPanel.appendChild(newPanel);
                
            //make NEW TASK btn
            
            const newTaskBtn = document.createElement('button');
            newTaskBtn.classList.add('new-task-btn');
            newTaskBtn.id = 'new-task-btn-id';
            newTaskBtn.innerHTML = 'Make new task';

            //make TEST DOCUMENT FRAGMENTS btn

            const testDocumentFragments = document.createElement('button');
            testDocumentFragments.innerHTML = 'TEST REMOVE DOCUMENT FRAGMENTS';

            const testDocumentRepaste = document.createElement('button');
            testDocumentRepaste.innerHTML = 'TEST REPASTE DOCUMENT FRAGMENT';

            //MAKE A DIV TO HOLD THE BUTTON AND NEW TASKS BAR
            const taskStationContainer = document.createElement('div');
            taskStationContainer.classList.add('task-station-container');
            taskStationContainer.id = 'task-station-container-id'


            taskStationContainer.appendChild(newTaskBtn);
            
            newProjectBtn.parentElement.appendChild(testDocumentFragments);

            newProjectBtn.parentElement.appendChild(testDocumentRepaste);
            //>>>>>>>>>>>>>>>>>>>

            //newPanel should be a new documentFragment
            //for each new project.
            //then put the documentFragments all in an array
            //and when we click a Project div, 
            //match the project's name from our projectNames array
            //to load its fragment, stored by the same name in our
            //fragments array. 
            const fragmentsArray = [];
            
            newPanel.appendChild(taskStationContainer)
            const newFragment = document.createDocumentFragment();
            newFragment.appendChild(newPanel);
            fragmentsArray.push(newPanel);

            mainPanel.appendChild(newFragment);
            mainPanel.appendChild(fragmentsArray[0])
            
            console.log('fragmentsArray on next line');
            console.log(fragmentsArray);

            newTaskBtn.addEventListener('click', function() {
                createTask();
            })

            testDocumentFragments.addEventListener('click', function(){
                let throwaway = mainPanel.removeChild(fragmentsArray[0]);
            })

            testDocumentRepaste.addEventListener('click', function() {
                // mainPanel.appendChild(newPanel);
                mainPanel.appendChild(fragmentsArray[0]);
            })

        }
        });

        hideButtons();

    })

    // const newProjectTitle = document.createElement('p');
    // newProjectTitle.textContent = projectInput.value;
    // alert(newProjectTitle);

}