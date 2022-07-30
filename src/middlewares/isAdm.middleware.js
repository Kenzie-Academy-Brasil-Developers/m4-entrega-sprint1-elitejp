import users from "../database";

const isAdm = (req, res, next) => {
  const { email } = req.userEmail;

  const user = users.find((user) => user.email === email);

  if (!user.isAdm) {
    return res.status(401).json({
      message: "Você não tem permissão",
    });
  }

  next();
};

export default isAdm;
