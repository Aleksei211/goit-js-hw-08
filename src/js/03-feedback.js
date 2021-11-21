// import  throttle  from 'lodash.throttle';

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
//      email: document.querySelector('.feedback-form input')
// }
// const STORAGE_KEY = 'feedback-form-state'
// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input',  throttle(onEmailInput, 500));
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// savedInform();


//  function onFormSubmit(evt) {
//      evt.preventDefault();

//         //  console.log('email:', localStorage.getItem('.feedback-form'),
//         //      'message:', localStorage.getItem(STORAGE_KEY)  
//         //  )
//      console.log(savedInform())
//      evt.currentTarget.reset();
//      localStorage.removeItem(STORAGE_KEY)
//  }

// function onEmailInput(evt) {
//     const email = evt.target.value;
//     localStorage.setItem('.feedback-form', email);

// }

//     function onTextareaInput(evt) {
//         const message = evt.target.value;
//         localStorage.setItem(STORAGE_KEY, message);
//     }

// function savedInform() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
//     const savedEmail = localStorage.getItem('.feedback-form') 
//     if (savedMessage || savedEmail) {
//         refs.textarea.value = savedMessage;
//         refs.email.value = savedEmail;
//     }
//     return {email:savedEmail, message:savedMessage}
// }


/////////
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea')
};

const localStorageValues = {
    email: '',
    message: '',
};

function onFormSubmit(evt) {
    evt.preventDefault();
    if (localStorage.getItem(STORAGE_KEY)) {
        console.log(localStorageValues)
    }
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
};

function onEmailInput(evt) {
    localStorageValues.email = evt.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValues))
};

function onTextareaInput(evt) {
    localStorageValues.message = evt.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValues))
};

function savedInform() {
    let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedMessage) {
        localStorageValues.email = savedMessage.email;
        localStorageValues.message = savedMessage.message;
        refs.email.value = localStorageValues.email;
        refs.textarea.value = localStorageValues.message;
    }
}

refs.form.addEventListener('submit', onFormSubmit)
refs.email.addEventListener('input', throttle(onEmailInput, 500))
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500))
savedInform()