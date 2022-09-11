const buttonAdd = document.querySelector('.add');
buttonAdd.addEventListener('click', addClass);

const buttonRemove = document.querySelector('.remove');
buttonRemove.addEventListener('click', removeClass);

const buttonToggle = document.querySelector('.toggle');
buttonToggle.addEventListener('click', toggleClass);

function addClass(){
  const element = document.querySelector('.demo');
  element.classList.add('new-class');
}

function removeClass(){
  const element = document.querySelector('.demo');
  element.classList.remove('new-class');
}

function toggleClass(){
  const element = document.querySelector('.demo');
  element.classList.toggle('new-class');
}

