import { Router } from "express";
import {
  createUserController,
  listUserController,
  userProfileController,
} from "../controllers/user.controllers";
import userSchema from "../database/schemas/user.schema";
import authenticationMiddleware from "../middlewares/authentication.middleware";
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

userRoutes.patch("/:uuid", authenticationMiddleware);

userRoutes.delete("/:uuid", authenticationMiddleware);

export default userRoutes;
