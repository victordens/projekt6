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


window.onload = init
