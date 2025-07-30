export function createUser(name) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(name);
  localStorage.setItem('users', JSON.stringify(users));
}