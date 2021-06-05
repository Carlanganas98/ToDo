function loadTasks() {
    return localStorage.getItem("tasks");
}

function saveTasks(alltasks) {
    localStorage.setItem("tasks", alltasks);
}

export { loadTasks, saveTasks }