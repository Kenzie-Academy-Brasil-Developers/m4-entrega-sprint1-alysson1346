import deleteUserService from "../services/deleteUser.services";

const deleteUserController = (req, res) => {
  const { id } = req.params;

  const deleteUser = deleteUserService(id);

  return res.json(deleteUser);
};
export default deleteUserController;
