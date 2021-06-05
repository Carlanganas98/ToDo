

export function loadTasks() {
    return localStorage.getItem("tasks");
}

export function saveTasks(alltasks) {
    localStorage.setItem("tasks", alltasks);
}

