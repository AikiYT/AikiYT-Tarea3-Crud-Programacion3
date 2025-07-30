import { createUser } from './create-user.js';
import { getAllUsers } from './get-all-users.js';
import { updateUser } from './update-user.js';
import { deleteUser } from './delete-user.js';
import { isValidName } from './validation.js';

const userList = document.getElementById('userList');
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');

let editingIndex = null;

function renderUsers() {
  const users = getAllUsers();
  userList.innerHTML = '';
  users.forEach((user, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${user}
      <div>
        <button onclick="editUser(${index})">Editar</button>
        <button onclick="deleteUserHandler(${index})">Eliminar</button>
      </div>`;
    userList.appendChild(li);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = nameInput.value;
  if (!isValidName(name)) {
    alert("Nombre inválido");
    return;
  }

  if (editingIndex !== null) {
    updateUser(editingIndex, name);
    editingIndex = null;
  } else {
    createUser(name);
  }

  form.reset();
  renderUsers();
});

window.editUser = function(index) {
  const users = getAllUsers();
  nameInput.value = users[index];
  editingIndex = index;
};

window.deleteUserHandler = function(index) {
  deleteUser(index);
  renderUsers();
};

renderUsers();
