import users from "../database";

const emailExists = (req, res, next) => {
  const { email } = req.body;
  const emailExists = users.find((user) => user.email === email);

  if (emailExists) {
    return response.status(400).json({
      message: "Email ja existente",
    });
  }

  next();
};

export default emailExists;
