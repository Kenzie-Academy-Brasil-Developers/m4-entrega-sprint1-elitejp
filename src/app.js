import express from "express";
import userRoutes from "./router/user.routes";
import sessionRoutes from "./router/session.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);

app.listen(3000, () => {
  console.log("ihuu ");
});
