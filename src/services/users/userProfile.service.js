import users from "../../database";

const userProfileService = (email) => {
  const user = users.find((user) => user.email === email);

  return user;
};

export default userProfileService;
