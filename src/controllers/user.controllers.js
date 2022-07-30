import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import userProfileService from "../services/users/userProfile.service";

const createUserController = async (req, res) => {
  const user = req.body;
  const newUser = await createUserService(user);
  const currentData = new Date();
  newUser.createdOn = currentData;
  newUser.updatedOn = currentData;
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

  return res.json(user);
};

const updateUserController = (req, res) => {};

export { createUserController, listUserController, userProfileController };
