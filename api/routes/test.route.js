import express from "express";
import { ShouldBeAdmin, ShouldBeLoggedIn } from "../controllers/test.controlller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/should-be-logged-in", verifyToken , ShouldBeLoggedIn);

router.get("/should-be-admin" , ShouldBeAdmin);

export default router; 