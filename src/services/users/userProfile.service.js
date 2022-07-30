import users from "../../database";

const userProfileService = (email) => {
  const user = users.find((user) => user.email === email);
  delete user.password;

  return user;
};

export default userProfileService;
