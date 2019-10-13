document.addEventListener('DOMContentLoaded', function () {

    auth.onAuthStateChanged(user => {
        if(user) {
            database.collection('tasks').onSnapshot(snapshot => {
                displayTasks(snapshot.docs);
                navDisplay(user);
            });
        } else {
            displayTasks([]);
            navDisplay();
        }
    });

    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', addUser);

    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', logOut);

    const signinForm = document.querySelector('#signin-form');
    signinForm.addEventListener('submit', logInUser);

    const newTaskForm = document.querySelector('#new-task-form');
    newTaskForm.addEventListener('submit', addNewTask);

    const deleteLastBtn = document.querySelector('.delete-last-btn');
    deleteLastBtn.addEventListener('click', deleteLast);

    const deleteAllBtn = document.querySelector('.delete-all-btn');
    deleteAllBtn.addEventListener('click', deleteAll);
});

const addUser = (e) => {
    e.preventDefault();

    const mail = document.querySelector('.signup-email').value;
    const password = document.querySelector('.signup-password').value;
    
    auth.createUserWithEmailAndPassword(mail, password).then(cred => {
        const signupForm = document.querySelector('#signup-form');
        $('#modalRegisterForm').modal('hide');
        signupForm.reset();
    });
};

const logOut = () => {
    auth.signOut().then(() => {
        $('#log-out-modal').modal('hide');
    })
};

const logInUser = (e) => {
    e.preventDefault();

    const mail = document.querySelector('.login-email').value;
    const password = document.querySelector('.login-password').value;

    auth.signInWithEmailAndPassword(mail, password).then(cred =>{
        const signinForm = document.querySelector('#signin-form');
        $('#modalLoginForm').modal('hide');
        signinForm.reset();
    })
};

const addNewTask = (e) => {
    e.preventDefault();
    const listLength = document.querySelectorAll('.task').length;
    database.collection('tasks').add({
        title: document.querySelector('.task-title-input').value,
        number: listLength + 1
    }).then(() => {
        const newTaskForm = document.querySelector('#new-task-form');
        $('#add-task-modal').modal('hide');
        newTaskForm.reset();
    });
};

const deleteTask = (e) => {
    taskId = e.target.parentElement.parentElement.getAttribute('data-id');
    database.collection('tasks').doc(taskId).delete();
};

const deleteLast = () => {
    const list = document.querySelectorAll('.task');
    const lastTask = list[list.length - 1].getAttribute('data-id');
    database.collection('tasks').doc(lastTask).delete();
};

const deleteAll = () => {
    const list = document.querySelectorAll('.task');
    list.forEach(el => {
        database.collection('tasks').doc(el.getAttribute('data-id')).delete();
    });
};
