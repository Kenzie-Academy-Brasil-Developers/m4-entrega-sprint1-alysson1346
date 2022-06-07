import users from "../database";

const verifyEmailMiddleware = (req, res, next) => {
  const { email } = req.body;
  const isAlready = users.find((user) => user.email === email);

  if (isAlready) {
    return res.status(400).json({ message: "Email já cadastrado!" });
  }
  next();
};
export default verifyEmailMiddleware;
