import users from "../database";
import * as bcrypt from "bcryptjs";

const updateUserService = (id, name, email, password) => {
  const date = new Date();

  const userIndex = users.findIndex((user) => user.id === id);
  const update = { updatedOn: date };

  if (userIndex === -1) {
    return "User not found";
  }

  if (name) {
    update.name = name;
  }
  if (email) {
    update.email = email;
  }
  if (password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    update.password = hashedPassword;
  }

  users[userIndex] = { ...users[userIndex], ...update };

  return users[userIndex];
};
export default updateUserService;
