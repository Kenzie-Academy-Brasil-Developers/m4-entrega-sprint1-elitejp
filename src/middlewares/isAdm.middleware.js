import users from "../database";

const isAdm = (req, res, next) => {
  const { userId } = req.userId;

  const user = users.find((user) => user.uuid === userId);

  if (!user.isAdm) {
    return res.status(401).json({
      message: "Você não tem permissão",
    });
  }

  next();
};

export default isAdm;
