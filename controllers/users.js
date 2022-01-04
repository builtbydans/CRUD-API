import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUser = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { id: userId, ...user };

  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to the database.`);
};

export const findUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.send(`User with the ID ${id} has been updated.`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with the ID ${id} deleted from the database.`);
};
