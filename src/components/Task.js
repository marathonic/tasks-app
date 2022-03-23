export class Task {
    constructor(title, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}


export default function createTask() {
    const taskForm = document.createElement('form')
    taskForm.classList.add('form-new-task');
    const taskLegend = document.createElement('legend');
    taskLegend.classList.add('legend-new-task');
    const taskFieldset = document.createElement('fieldset');
    taskFieldset.classList.add('fieldset-new-task');
    const pInput = document.createElement('p');
    const pLabel = document.createElement('p');
    const newTaskInput = document.createElement('input');
    newTaskInput.classList.add('input-new-task');
    newTaskInput.type = 'textarea';
    newTaskInput.placeholder = 'new task...';

    const newTaskLabelTitle = document.createElement('label');
    newTaskLabelTitle.htmlFor = 'task-input-id';
    newTaskInput.id = 'task-input-id;'

    pLabel.appendChild(newTaskLabelTitle);
    pInput.appendChild(newTaskInput);
    taskFieldset.appendChild(pLabel);
    taskFieldset.appendChild(pInput);
    
    taskForm.appendChild(taskLegend);
    taskForm.appendChild(taskFieldset);

    const myTaskBtn = document.querySelector('#new-task-btn-id');
    const taskStationContainer = document.querySelector('#task-station-container-id');
    taskStationContainer.appendChild(taskForm);

    taskStationContainer.insertBefore(taskForm,myTaskBtn);

    
    //maybe what they mean by separating DOM and Logic is
    //saying to return the result instead of appending it here?
    //and then append it on the index file?
    return taskForm;
}


export function getTaskInfo() {
    //get the form info upon detecting a submit event. Put into array?
    
    FormData

}

export function passTaskToDiv() {
    //for each key, make div that holds key:value.
    //style everything in CSS 
}