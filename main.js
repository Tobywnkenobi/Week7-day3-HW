function addTodo() {
    var titleInput = document.getElementById('titleInput');
    var descInput = document.getElementById('descInput');
    var todoList = document.getElementById('todoList');

    var listItem = document.createElement('li');
    listItem.textContent = titleInput.value + ': ' + descInput.value;

    listItem.addEventListener('click', function() {
        listItem.style.textDecoration = 'line-through';
    });

    todoList.appendChild(listItem);

    titleInput.value = '';
    descInput.value = '';
}
