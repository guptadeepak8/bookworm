import { Router } from "express";

import { authRouter } from "./modules/auth";

const router = Router();

router.use("/auth", authRouter);
router.use("/books", bookRouter);

export default router;