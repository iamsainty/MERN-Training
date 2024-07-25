let task = document.querySelector('#task');
let tasks= document.querySelector('.tasks');

function createtask(){
    let newtask= document.createElement('div');

    newtask.className='task';

    newtask.innerHTML=task.value;

    tasks.appendChild(newtask);

    task.value='';
}