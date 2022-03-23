import './style.css';
import createProject from './createProject';

export default function printHome() {


    //Creating custom events 

    
    //create main webpage elements
    const mainContainer = document.createElement('div');
    const mainHeader = document.createElement('header');
    const sidebar = document.createElement('div');

    //create default sidebar items
    
    const sidebarContentWrapper = document.createElement('div');
    const projectsWrapper = document.createElement('div');
    projectsWrapper.id = 'projects-wrapper';
    const tasksWrapper = document.createElement('div');
    
    const tasksHeadline = document.createElement('p');
    tasksHeadline.innerHTML = 'Tasks';

    const projectsHeadline = document.createElement('p');
    projectsHeadline.innerHTML = 'Projects';

    const miscellaneousBtn = document.createElement('button');
    miscellaneousBtn.innerHTML = 'miscellaneous';


    const newProjectBtn = document.createElement('button');
    newProjectBtn.innerHTML = '+ add new';
    newProjectBtn.id = 'new-project-btn';

    //make input for creating project


    const projCreationInput = document.createElement('input');
    projCreationInput.type = 'text';
    projCreationInput.name = 'project-creation';
    projCreationInput.placeholder = 'new project';
    projCreationInput.id = 'new-project-input';

    //make buttons for submitting newly created object;
    const projectOkBtn = document.createElement('button');
    const projectCancelBtn = document.createElement('button');
    projectOkBtn.innerHTML = 'add';
    projectOkBtn.id = 'add-project-btn';
    projectCancelBtn.innerHTML = 'cancel';
    projectCancelBtn.id = 'cancel-project-btn';

    //put those buttons in their own div so they don't wrap
    const projectButtonsDiv = document.createElement('div');
    projectButtonsDiv.appendChild(projCreationInput);
    projectButtonsDiv.appendChild(projectOkBtn);
    projectButtonsDiv.appendChild(projectCancelBtn);

    //glue together sidebar content
    projectsWrapper.appendChild(projectsHeadline);
    projectsWrapper.appendChild(miscellaneousBtn);
    projectsWrapper.appendChild(projectButtonsDiv);
    
    
    tasksWrapper.appendChild(tasksHeadline);
    
    sidebarContentWrapper.appendChild(projectsWrapper);
    
    sidebarContentWrapper.appendChild(projectButtonsDiv);
    
    
    sidebarContentWrapper.appendChild(newProjectBtn);
    sidebarContentWrapper.appendChild(tasksWrapper);

    sidebar.appendChild(sidebarContentWrapper);

    //create text elements
    

    //create header sections 

    const headerLeftSection = document.createElement('div');
    const headerRightSection = document.createElement('div');



    //create individual header elements
    
    const headerTitle = document.createElement('p');
    headerTitle.textContent = 'logotype';


    //Should input be here or in the app logic module?


    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.name = 'search';


    //put individual elements in their section divs
    headerLeftSection.appendChild(headerTitle);
    headerRightSection.appendChild(searchBar);


    

    //put header elements in boxes

    //append header boxes
    mainHeader.appendChild(headerLeftSection);
    mainHeader.appendChild(headerRightSection);


    //right side main window
    const mainPanel = document.createElement('div');
    mainPanel.classList.add('main-panel');
    mainPanel.id = 'main-panel-id';

    //put the elements inside the main container
    mainContainer.appendChild(mainHeader);
    mainContainer.appendChild(sidebar);
    mainContainer.appendChild(mainPanel);

    //add classLists
    mainContainer.classList.add('main-container');
    mainHeader.classList.add('main-header');
    sidebar.classList.add('sidebar');
    headerTitle.classList.add('header-title');
    searchBar.classList.add('search-bar');
    headerLeftSection.classList.add('header-section');
    headerRightSection.classList.add('header-section');

    sidebarContentWrapper.classList.add('sidebar-wrapper');
    projectsHeadline.classList.add('sidebar-section-headline');
    tasksHeadline.classList.add('sidebar-section-headline');
    projectsWrapper.classList.add('projects-wrapper');
    miscellaneousBtn.classList.add('projects');
    newProjectBtn.classList.add('new-project-btn');
    projCreationInput.classList.add('project-creation-input');
    projCreationInput.classList.add('invisible');
    projectOkBtn.classList.add('project-confirm-btn');
    projectOkBtn.classList.add('invisible');
    projectCancelBtn.classList.add('project-cancel-btn');
    projectCancelBtn.classList.add('invisible');
    projectButtonsDiv.classList.add('project-buttons-div');
    
    //add id
    searchBar.id = 'search-bar-id';
    searchBar.name = 'search-bar-name';

    //add style to any future Projects listed in sidebar
    //maybe get the data with JSON or something?

    //event listeners

    //display our input bar to register a new project
    newProjectBtn.addEventListener('click', function() {
        
        newProjectBtn.classList.toggle('invisible');
        projCreationInput.classList.toggle('invisible');
        projectOkBtn.classList.toggle('invisible');
        projectCancelBtn.classList.toggle('invisible');

    })    

    


    //testing if we get shared variables from imported js 


    return mainContainer;
}
