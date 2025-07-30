export function updateUser(index, newName) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users[index] = newName;
  localStorage.setItem('users', JSON.stringify(users));
}