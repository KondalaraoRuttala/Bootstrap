<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap To-List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<style>
    .rk{
    margin-top:200px;
    }
</style>
<body>
   <div class="rk">
     <div class="container mt-5">
        <h1 class="text-center" mb-4>My to-do-list</h1>
        <div class="input-group mb-3">
<input type="text" id="taskInput" class="form-control" placeholder="add a new text....." aria-label="Add a new task">
<button class="btn btn-primary" type="submit" id="submitBtn">submit</button>
        </div>
        <ul id="tasklist" class="list-group">

        </ul>
    </div>
   </div>
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded',() =>{
            const todoInput =document.getElementById('todoInput');
            const addTask =document.getElementById('addTask');
            const todoList =document.getElementById('todoList');

            addTaskBtn.addEventListener('click',addTask);
            function addTask() {
                   const taskText = todoInput.value.trim();
                  if (taskText !== "") {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            `;

            todoList.appendChild(listItem);
            todoInput.value = ''; 
            const deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', () => {
                listItem.remove();
            })
            
        }
    }
});

    </script>
</body>
</html>