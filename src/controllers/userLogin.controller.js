import userLoginService from "../services/userLogin.services";

const userLoginController = (req, res) => {
  const { email, password } = req.body;
  const userLogin = userLoginService(email, password);
  return res.json(userLogin);
};
export default userLoginController;
