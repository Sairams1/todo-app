function addTodo() {

  // 1. Read input value
  let text = document.getElementById("todoInput").value;

  // 2. Stop if input is empty
  if (text === "") {
    alert("Please enter a task");
    return;
  }

  // 3. Create list item
  let li = document.createElement("li");

  // 4. Put text inside list item
  li.innerText = text;

  // 5. Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  // 6. Delete functionality
  deleteBtn.onclick = function () {
    li.remove();
  };

  // 7. Add delete button to list item
  li.appendChild(deleteBtn);

  // 8. Add list item to list
  document.getElementById("todoList").appendChild(li);

  // 9. Clear input box
  document.getElementById("todoInput").value = "";
}
