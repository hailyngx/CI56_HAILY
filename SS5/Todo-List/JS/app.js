import TaskContainer from '../TaskContainer.js'

let data =
[
    {id: 1, name: 'TASK 1', description: 'Describe your task', deadline: '2021/03/07', isCompleted: true},
    {id: 2, name: 'TASK 2', description: 'Describe your task', deadline: '2021/03/08', isCompleted: false},
    {id: 3, name: 'TASK 3', description: 'Describe your task', deadline: '2021/03/09', isCompleted: true},
    {id: 4, name: 'TASK 4', description: 'Describe your task', deadline: '2021/03/10', isCompleted: false},
    {id: 5, name: 'TASK 5', description: 'Describe your task', deadline: '2021/03/11', isCompleted: true},
    {id: 6, name: 'TASK 6', description: 'Describe your task', deadline: '2021/03/12', isCompleted: true},
    {
        id: 7,
        name: 'TASK 6', 
        description: 'Describe your task', 
        deadline: '2021/03/12', 
        isCompleted: true,
        subTasks: [
            {id: '7.1', name="Task 7.1", description: 'Description', isCompleted: true, deadline:'2021'},
            {id: '7.2', name="Task 7.2", description: 'Description', isCompleted: true, deadline:'2021'},
            {id: '7.3', name="Task 7.3", description: 'Description', isCompleted: true, deadline:'2021'},
            {id: '7.4', name="Task 7.4", description: 'Description', isCompleted: true, deadline:'2021'},
        ]
    },
];

// console.log(JSON.stringify(data));

let $app = document.getElementById('app');
for(let todoData of data) {
    //Method 1: not so efficient, gotta reset data 
    // $app.innerHTML += `
    //     <task-container 
    //         name ="${todoData.name}"
    //         description="${todoData.description}"
    //         deadline="${todoData.deadline}"
    //         isCompleted="${todoData.isCompleted}"
    // `;

    let $todoContainer = document.createElement('task-container');
    $todoContainer.setAttribute('name', todoData.name);
    $todoContainer.setAttribute('description', todoData.description);
    $todoContainer.setAttribute('deadline', todoData.deadline);
    $todoContainer.setAttribute('isCompleted', todoData.isCompleted);
    if(todoData.subTasks != undefined) {
    $todoContainer.setAttribute('sub-tasks', JSON.stringify(todoData.subTasks));
    }
    $app.appendChild($todoContainer);
}

