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
  const listItems = items.map(item => {
      const task = item.data();

      const li = document.createElement('div');
      const taskContent = document.createElement('p');

      li.setAttribute('class', 'list-group-item list-group-item-action flex-column align-items-start');
      taskContent.setAttribute('class', 'mb-2');

      taskContent.innerText = task.title;

      li.appendChild(taskContent);

      return listItem = li;
  });
//   tasksList.innerHTML ='';
        listItems.forEach(item => {
            tasksList.appendChild(item);
        })
};
