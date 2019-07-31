document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

window.openModal = (name) => {
  console.log('modal', name);
  const elm = document.getElementById(name);
  elm.className += " is-active";
  return false;
}

window.closeModal = (name) => {
  console.log('modal', name);
  const elm = document.getElementById(name);
  elm.className =elm.className.replace("is-active",""); 
  return false;
}