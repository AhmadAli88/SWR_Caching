// api.js

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch users
export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};

// Add a new user
export const addUser = async (newUser) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) throw new Error('Failed to add user');
  return response.json();
};

// Update user
export const updateUser = async (updatedUser) => {
  const response = await fetch(`${API_URL}/${updatedUser.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser),
  });
  if (!response.ok) throw new Error('Failed to update user');
  return response.json();
};

// Delete user
export const deleteUser = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete user');
};
