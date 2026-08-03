import { Router } from "express";

import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  getDashboard,
  updateBook,
} from "./book.controller";
import { authenticate } from "../../middleware/auth.middleware";

const router = Router();

router.use(authenticate);

router.get("/dashboard", getDashboard);

router.post("/", createBook);

router.get("/", getBooks);

router.get("/:id", getBookById);

router.patch("/:id", updateBook);

router.delete("/:id", deleteBook);

export default router;