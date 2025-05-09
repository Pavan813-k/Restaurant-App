function newwindow(url){
  openwindow = window.open(url, 'name', 'height=300, width=300');
}

function addTask() {
  const inputField = document.getElementById('taskInput');
  const dropdown = document.querySelector('select');
  const taskList = document.getElementById('taskList');

  const inputText = inputField.value.trim();
  const selectedItem = dropdown.value;

  const taskText = inputText !== '' ? inputText : (selectedItem !== 'Select Item' ? selectedItem : '');

  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span class="item-name">${taskText}</span>
      <button onclick="decreaseQty(this)">-</button>
      <span class="quantity">1</span>
      <button onclick="increaseQty(this)">+</button>
      <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(newTask);

    inputField.value = '';
    dropdown.selectedIndex = 0;
  }
}

function removeTask(element) {
  element.parentNode.remove();
}

function increaseQty(button) {
  const quantitySpan = button.previousElementSibling;
  let currentQty = parseInt(quantitySpan.textContent);
  quantitySpan.textContent = currentQty + 1;
}

function decreaseQty(button) {
  const quantitySpan = button.nextElementSibling;
  let currentQty = parseInt(quantitySpan.textContent);
  if (currentQty > 1) {
    quantitySpan.textContent = currentQty - 1;
  }
}
function pavan() {
  const taskList = document.getElementById('taskList');
  const orders = taskList.getElementsByTagName('li');

  if (orders.length > 0) {
    document.getElementById("result").innerHTML = "ORDER CONFIRMED..! ON THE WAY TO YOUR TABLE..!";
  } else {
    alert("Please add at least one item before placing the order.");
  }
}

