const tasksList = document.querySelector('.tasks-list');

const displayTasks = (items) => {
    
    if (items.length > 0) {
        const listItems = items.map(item => {
            const task = item.data();
    
            const li = document.createElement('div');
            const taskHeader = document.createElement('div');
            const taskContent = document.createElement('p');
            const btn = document.createElement('button');
    
            li.setAttribute('class', 'list-group-item list-group-item-action flex-column align-items-start task');
            li.setAttribute('data-id', item.id);
            taskHeader.setAttribute('class', 'd-flex w-100 justify-content-between task-header');
            taskContent.setAttribute('class', 'mb-2 task-content');
            btn.innerText = 'Delete';
            btn.addEventListener('click', deleteTask);
            btn.setAttribute('class', 'btn delete-btn');
            
            taskHeader.innerHTML = `
                                    <h5 class="mb-2 h5">Task number: ${task.number}</h5>
                                    <small>${task.date}</small>  
                                    `;
            taskContent.innerText = task.title;
            
            li.appendChild(taskHeader);
            li.appendChild(taskContent);
            taskHeader.appendChild(btn);
    
            return listItem = li;
        });
        tasksList.innerHTML ='';
        listItems.forEach(item => {
            tasksList.appendChild(item);
        })
    } else {
        tasksList.innerHTML = `
                <h3 class="text-center">
                    There is nothing
                    <small class="text-muted">Log in and add new tasks.</small>
                </h3>
            `;
    }  
};

const navDisplay = (user) => {
    const loggedNav = document.querySelectorAll('.logged');
    const notLoggedNav = document.querySelectorAll('.not-logged');
    const userName = document.querySelector('.user-name');

    if(user) {
        loggedNav.forEach(link => link.style.display = 'block');
        notLoggedNav.forEach(link => link.style.display = 'none');
        userName.innerHTML = user.email;
    } else {
        loggedNav.forEach(link => link.style.display = 'none');
        notLoggedNav.forEach(link => link.style.display = 'block');
        userName.innerHTML = '';
    }
}; 
