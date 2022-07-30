import users from "../../database";

const updateUserService = (userId, userData) => {
  const userIndex = users.findIndex((user) => user.uuid === userId);

  users[userIndex];
};

export default updateUserService;
