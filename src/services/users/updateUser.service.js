import users from "../../database";

const updateUserService = (userId, userData) => {
  const userIndex = users.findIndex((user) => user.uuid === userId);

  if (userIndex === -1) {
    return { message: "Usuario não encontrado" };
  }

  delete userData.isAdm;
  users[userIndex] = { ...users[userIndex], ...userData };

  const currentData = new Date();
  users[userIndex].updatedOn = currentData;

  return users[userIndex];
};

export default updateUserService;
