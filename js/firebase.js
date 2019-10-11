document.addEventListener('DOMContentLoaded', function () {

    auth.onAuthStateChanged(user => {
        if(user) {
            console.log('user logIn');
        } else {
            console.log('user logOut');
        }
    });

    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', addUser);

    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', logOut);

    const signinForm = document.querySelector('#signin-form');
    signinForm.addEventListener('submit', logInUser);
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
