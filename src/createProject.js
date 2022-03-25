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

        //add style

        newProject.classList.add('projects');

        //push to array, and then forEach project, append and style
        const projectsArray = [];
        // projectsArray.id = 'projects-array';
        projectsArray.push(newProject);

        //our iterator variable for naming divs and newPanels

        let i = 0;

        projectsArray.forEach(proj => {
            const newDiv = document.createElement('div');
            // newDiv.id = proj.textContent + 'proj-id';
            
            //Set id to i 
            proj.id = `${proj.textContent}-proj-id`;
            ++i;
            
            newDiv.classList.add('new-project-div');
            newDiv.appendChild(proj);
            document.querySelector('#projects-wrapper').appendChild(newDiv);
            //pushing to project names array!
            projectNames.push(`${proj.textContent}`);
            console.log('projectNames array on next line')
            console.log(projectNames);
            
            



            //Create Panels: 
            //for each item in the array to which our divs push,
            //create a panel and attach its title and button, etc.

            projectNames.forEach(projName => {
            
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //<<<<<<<<<<<<<<<BEGIN HERE>>>>>>>>>>>>>>>>>>
            
            //make projects splash page:
            const mainPanel = document.querySelector('#main-panel-id');
            const newPanel = document.createElement('div');
            
            newPanel.classList.add('new-panel');
            
            
            const newPanelTitleDiv = document.createElement('div');
            newPanelTitleDiv.classList.add('new-panel-title-div');
            const newPanelTitle = document.createElement('p');
            newPanelTitle.classList.add('new-panel-title');
            ////////////////////PANEL HEADLINE GETS PROJECT NAME. 
            newPanelTitle.textContent = newProject.textContent;
            newPanelTitleDiv.appendChild(newPanelTitle);

            /////////////
            //Prevent repeats: if the new panel is empty, attach.

            

                newPanel.appendChild(newPanelTitleDiv);
                mainPanel.appendChild(newPanel);
                
            //make NEW TASK btn
            
            const newTaskBtn = document.createElement('button');
            newTaskBtn.classList.add('new-task-btn');
            newTaskBtn.id = 'new-task-btn-id';

            let k = 0;
            newPanel.id = 'new-panel-' + k;
            ++k;
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
            
            //<<<!!!!!!!THIS IS HOW WE RETRIEVE THE PANELS!!!!>>>
            //Depending on which project div you clicked,
            //either by its id or by its place on the array,
            //Just do mainPanel.appendChild(fragmentsArray[i]);

            fragmentsArray.push(newPanel);
            
            fragmentsArray.id = 'fragments-array';
            mainPanel.appendChild(newFragment);
            mainPanel.appendChild(fragmentsArray[fragmentsArray.length -1])
            
            console.log('fragmentsArray on next line');
            console.log(fragmentsArray);

            newTaskBtn.addEventListener('click', function() {
                createTask();
            })

            //HEY!!! Just put this inside of each div!
            //add it to the project div's event listener,
            //so that when we click it, it automatically erases
            //anything that is in the main panel, and immediately after,
            //also paste the testDocumentRepaste anonymous function,
            //which appends the currently clicked div!

            testDocumentFragments.addEventListener('click', function(){
                // let throwaway = mainPanel.removeChild(fragmentsArray[0]);
                const docCont = document.querySelector('#main-panel-id');
                let docChild = docCont.lastElementChild;
                while (docChild) {
                    docCont.removeChild(docChild);
                    docChild = docCont.lastElementChild;
                }
            })

            testDocumentRepaste.addEventListener('click', function() {
                // mainPanel.appendChild(newPanel);
                mainPanel.appendChild(fragmentsArray[0]);
            })


        });

            ///////////////////////<<<<<<<<<<<<<
            /////////////THIS REMOVES THE PROJECT SHOWN CURRENTLY
            //WE'RE CALLING THE FUNCTION OUTSIDE OF THIS BLOCK THO
            function divJam() {

                //using event delegation to select the parent element

                const wrappy = document.querySelector('#projects-wrapper');
                wrappy.addEventListener('click', function(e){
                    if(e.target.classList === 'projects'){
                        alert('I clicked a project div');
                    }
                })

                //WHAT THE FUUUUCKKKKKKKKKKKKKKK
                //WE HAD ALREADY SOLVED FOR THE i COUNTER
                //NOW IT'S AS IF WE NEVER TOUCHED IT
                //WHAT THE FUCK HAPPENED?????
                //

                // const newDiv = document.querySelector('.new-project-div');
                // newDiv.addEventListener('click', function() {
                //     alert('ok');
                //     let throwaway = mainPanel.removeChild(fragmentsArray[0]);
        
                //  })
            };
            
            
            divJam();

            let projectLinks = document.querySelectorAll('.new-project-div');
            projectLinks.forEach(function(check) {
                check.addEventListener('click', checkIndex);
            })

            function checkIndex(evt){
                // console.log( Array.from(projectLinks).indexOf(evt.target) );
                console.log(evt.target);
            }
        }
        );

        hideButtons();
    })

    // const newProjectTitle = document.createElement('p');
    // newProjectTitle.textContent = projectInput.value;
    // alert(newProjectTitle);

}