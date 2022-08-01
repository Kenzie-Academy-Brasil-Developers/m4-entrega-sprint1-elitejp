import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
  userProfileController,
} from "../controllers/user.controllers";
import userSchema from "../database/schemas/user.schema";
import authenticationMiddleware from "../middlewares/authentication.middleware";
import canEdit from "../middlewares/canEdit.middleware";
import emailExists from "../middlewares/emailExists.middleware";
import isAdm from "../middlewares/isAdm.middleware";
import schemaValidation from "../middlewares/schemaValidation.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  schemaValidation(userSchema),
  emailExists,
  createUserController
);

userRoutes.get("", authenticationMiddleware, isAdm, listUserController);

userRoutes.get("/profile", authenticationMiddleware, userProfileController);

userRoutes.patch(
  "/:uuid",
  authenticationMiddleware,
  canEdit,
  updateUserController
);

userRoutes.delete(
  "/:uuid",
  authenticationMiddleware,
  canEdit,
  deleteUserController
);

export default userRoutes;
