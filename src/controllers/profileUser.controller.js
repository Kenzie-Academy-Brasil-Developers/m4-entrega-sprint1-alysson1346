import jwt_decode from "jwt-decode";

import profileUserServices from "../services/profileUser.services";

const profileUserController = (req, res) => {
  let token = req.headers.authorization;
  let decoded = jwt_decode(token);
  const { email } = decoded;
  const profileUser = profileUserServices(email);

  return res.status(200).json(profileUser);
};
export default profileUserController;
