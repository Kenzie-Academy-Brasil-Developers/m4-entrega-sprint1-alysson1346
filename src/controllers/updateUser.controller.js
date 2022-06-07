import updateUserService from "../services/updateUser.services";

const updateUserController = (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;

  const update = updateUserService(id, name, email, password);

  return res.json(update);
};
export default updateUserController;
