import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import userProfileService from "../services/users/userProfile.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = async (req, res) => {
  const user = req.body;
  const newUser = await createUserService(user);
  const { name, email, createdOn, updatedOn, uuid, isAdm } = newUser;

  return res
    .status(201)
    .json({ name, email, createdOn, updatedOn, uuid, isAdm });
};

const listUserController = (req, res) => {
  const users = listUserService();

  return res.json(users);
};

const userProfileController = (req, res) => {
  const user = userProfileService(req.userEmail);
  const { name, email, createdOn, updatedOn, uuid, isAdm } = user;

  return res.json({ name, email, createdOn, updatedOn, uuid, isAdm });
};

const updateUserController = (req, res) => {
  const { uuid } = req.params;
  const user = updateUserService(uuid, req.body);
  const { password, ...userRest } = user;

  return res.json(userRest);
};

const deleteUserController = (req, res) => {
  const { uuid } = req.params;
  const result = deleteUserService(uuid);

  return res.json(result);
};

export {
  createUserController,
  listUserController,
  userProfileController,
  updateUserController,
  deleteUserController,
};
