import express from "express";
import usersRoutes from "./routers/users.routes";

const app = express();
app.use(express.json());

app.use("", usersRoutes);

const port = 3001;

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`);
});
