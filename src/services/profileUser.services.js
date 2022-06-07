import users from "../database";

const profileUserServices = (email) => {
  return users.find((user) => user.email === email);
};
export default profileUserServices;
