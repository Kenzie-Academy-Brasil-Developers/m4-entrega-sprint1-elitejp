import users from "../../database";

const deleteUserService = (userId) => {
  const userIndex = users.findIndex((user) => user.uuid === userId);

  if (userIndex === -1) {
    return { message: "Usuario não encontrado" };
  }

  users.splice(userIndex, 1);

  return { message: "Usuario deletado com sucesso" };
};

export default deleteUserService;
