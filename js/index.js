const tasksList = document.querySelector('.tasks-list');

const displayTasks = (items) => {
    //     <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start active">
    //     <div class="d-flex w-100 justify-content-between">
    //       <h5 class="mb-2 h5">Task number 1</h5>
    //       <small>3 days ago</small>
    //     </div>
    //     <p class="mb-2">Do something.</p>
    //     <small>Added by XYZ</small>
    //   </a>
    if (items.length > 0) {
        const listItems = items.map(item => {
            const task = item.data();
    
            const li = document.createElement('div');
            const taskHeader = document.createElement('div');
            const taskContent = document.createElement('p');
    
            li.setAttribute('class', 'list-group-item list-group-item-action flex-column align-items-start task');
            taskHeader.setAttribute('class', 'd-flex w-100 justify-content-between');
            taskContent.setAttribute('class', 'mb-2');
            
            taskHeader.innerHTML = `
                                    <h5 class="mb-2 h5">Task number: ${task.number}</h5>
                                    <small>3 days ago</small>  
                                    `;
            taskContent.innerText = task.title;
            
            li.appendChild(taskHeader);
            li.appendChild(taskContent);
    
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

    if(user) {
        loggedNav.forEach(link => link.style.display = 'block');
        notLoggedNav.forEach(link => link.style.display = 'none');
    } else {
        loggedNav.forEach(link => link.style.display = 'none');
        notLoggedNav.forEach(link => link.style.display = 'block');
    }
}; 
