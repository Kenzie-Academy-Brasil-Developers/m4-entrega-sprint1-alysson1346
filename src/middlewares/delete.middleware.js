import users from "../database";
import jwt_decode from "jwt-decode";

const deleteMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  let decoded = jwt_decode(token);
  const { id } = req.params;

  const { email } = decoded;
  const user = users.find((user) => user.email === email);

  if (user.isAdm === true || (user.isAdm === false && user.id === id)) {
    next();
  } else {
    return res.status(400).json({ message: "sem autorização" });
  }
};

export default deleteMiddleware;
