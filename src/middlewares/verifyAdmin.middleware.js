import users from "../database";
import jwt_decode from "jwt-decode";

const verifyAdminMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  let decoded = jwt_decode(token);
  const { email } = decoded;
  const user = users.find((user) => user.email === email);

  if (user.isAdm === false) {
    return res.status(400).json({ message: "Sem autorização!" });
  }
  next();
};

export default verifyAdminMiddleware;
