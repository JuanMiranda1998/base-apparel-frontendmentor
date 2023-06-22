const formInput = document.querySelector('#formInput');
const buttonSubmit = document.querySelector('#buttonSubmit');
const errorIcon = document.querySelector('#errorIcon');
const notif = document.querySelector('#notif');
let email;

function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(email) && email!=='') {
      return true; 
    }
    return false;
};  
buttonSubmit.addEventListener('click',e=>{
    e.preventDefault();
    email = formInput.value;
    if (validateEmail(email)) {
      formInput.style.border = '1px solid hsl(0, 74%, 74%)';
      errorIcon.style.visibility = 'hidden';
      notif.innerHTML = 'Email submitted. Thank you!';
      notif.style.display = 'block';
    } 
    else {
      formInput.style.border = '3px solid var(--clr-soft-red)';
      errorIcon.style.visibility = 'visible';
      notif.innerHTML = 'Please provide a valid email';
      notif.style.display = 'block';
    }
});