document.addEventListener('DOMContentLoaded', function () {

    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', addUser);
});

const addUser = (e) => {
    e.preventDefault();

    const mail = document.querySelector('.signup-email').value;
    const password = document.querySelector('.signup-password').value;
    
    auth.createUserWithEmailAndPassword(mail, password).then(cred => {
        console.log(cred.user);
        const signupForm = document.querySelector('#signup-form');
        $('#modalRegisterForm').modal('hide')
        signupForm.reset();
    });
};
