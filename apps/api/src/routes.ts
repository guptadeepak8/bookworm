import { Router } from "express";

import { authRouter } from "./modules/auth";

const router = Router();

router.use("/auth", authRouter);

// Future
// router.use("/books", bookRouter);
// router.use("/reviews", reviewRouter);
// router.use("/users", userRouter);

export default router;