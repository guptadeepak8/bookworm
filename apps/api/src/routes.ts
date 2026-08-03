import { Router } from "express";

import { authRouter } from "./modules/auth";
import { bookRouter } from "./modules/books";


const router = Router();

router.use("/auth", authRouter);
router.use("/books", bookRouter);

export default router;