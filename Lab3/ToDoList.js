function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button onclick="removeTask(this)">❌</button>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function toggleComplete(element) {
    element.classList.toggle("completed");
}

function removeTask(button) {
    button.parentElement.remove();
}
