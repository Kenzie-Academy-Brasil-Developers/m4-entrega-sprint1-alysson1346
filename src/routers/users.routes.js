import { Router } from "express";

import createUserControllers from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUserController from "../controllers/listUser.controller";
import profileUserController from "../controllers/profileUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import deleteMiddleware from "../middlewares/delete.middleware";
import patchMiddleware from "../middlewares/patch.middleware";
import verifyAdminMiddleware from "../middlewares/verifyAdmin.middleware";
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";

const router = Router();

router.post("/users", verifyEmailMiddleware, createUserControllers);
router.post("/login", userLoginController);
router.get(
  "/users",
  verifyTokenMiddleware,
  verifyAdminMiddleware,
  listUserController
);
router.get("/users/profile", verifyTokenMiddleware, profileUserController);
router.delete(
  "/users/:id",
  verifyTokenMiddleware,
  deleteMiddleware,
  deleteUserController
);
router.patch(
  "/users/:id",
  verifyTokenMiddleware,
  patchMiddleware,
  updateUserController
);

export default router;
