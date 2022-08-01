import users from "../database";

const canEdit = (req, res, next) => {
  const { userId } = req.userId;
  const { uuid } = req.params;

  const user = users.find((user) => user.uuid === userId);

  if (userId !== uuid) {
    if (!user.isAdm) {
      return res.status(401).json({
        message: "Você não tem permissão",
      });
    }
  }

  next();
};

export default canEdit;
