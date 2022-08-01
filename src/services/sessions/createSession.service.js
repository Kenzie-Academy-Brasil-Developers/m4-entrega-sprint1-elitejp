import users from "../../database";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import "dotenv/config";

const createSessionService = async ({ email, password }) => {
  const user = await users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Email ou senha incorreta");
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Email ou senha incorreta");
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
      subject: user.uuid,
    }
  );
  return token;
};

export default createSessionService;
