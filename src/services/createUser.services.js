import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserServices = async (name, email, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const date = new Date();

  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    id: uuidv4(),
    createdOn: date,
    updatedOn: date,
  };
  users.push(newUser);
  return newUser;
};
export default createUserServices;
