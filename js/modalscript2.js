const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
    resetTasks()
  })
})

function openModal(modal) {
  if (modal == null) return           // if else er missing fordi vinduet skal poppe op uanset
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function resetTasks(){
  document.getElementById("task1").checked = false;
  document.getElementById("task2").checked = false;
  document.getElementById("task3").checked = false;
  document.getElementById("task4").checked = false;
  document.getElementById("task5").checked = false;
  init();
}

function init () {
    let value = 0;

    setProgression();
}


function setProgression() {
    const tasks = Array.from(document.querySelectorAll('.task'));
    const progressBar = document.querySelector('.progressBar');

    // Set max value to the progress bar
    const max = 100;
    progressBar.setAttribute('max', max);

    tasks.forEach(task => task.addEventListener('click', function() {
        const tasksChecked = tasks.filter(task => task.checked);
        // Set current value to the progress bar
        const value  = (tasksChecked.length / tasks.length) * 100
        progressBar.setAttribute('value', value)
    }))
}


window.onload = init();
