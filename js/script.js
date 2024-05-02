const theForm = document.querySelector('.form-case');
const add = document.querySelector('.add');
const email = document.querySelector('#email');
const message = document.querySelector('.message');
const exclamation = document.querySelector('i.fa-solid.fa-circle-exclamation.hide');

theForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value.match(/^([a-z\d-\.]+)@([a-z]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i)) {
        email.value = "";
        email.classList.remove('surround');
        message.classList.add('hide');
        exclamation.classList.add('hide');
    } else {
        message.classList.remove('hide');
        exclamation.classList.remove('hide');
        email.classList.add('surround');
    } 
});