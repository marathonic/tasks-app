import './modal-style.css';

export default function createModal() {
    const taskModal = document.createElement('div');
    taskModal.class = 'modal';
    taskModal.id = 'task-modal';
    
    //content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.innerHTML = '&times;';
    const p = document.createElement('p');
    p.innerHTML = 'Some text in the Modal';

    modalContent.appendChild(spanClose);
    modalContent.appendChild(p);
    taskModal.appendChild(modalContent);
    
}