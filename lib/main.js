'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

window.openModal = function (name) {
  console.log('modal', name);
  var elm = document.getElementById(name);
  elm.className += " is-active";
  return false;
};

window.closeModal = function (name) {
  console.log('modal', name);
  var elm = document.getElementById(name);
  elm.className = elm.className.replace("is-active", "");
  return false;
};