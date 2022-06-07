import listUsersServices from "../services/listUser.services";

const listUserController = (req, res) => {
  const users = listUsersServices();
  return res.status(200).json(users);
};
export default listUserController;
