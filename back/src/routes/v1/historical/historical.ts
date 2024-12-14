import express from "express";
import Repo from "./historical.controller";
import schema from "./schema";
import validator from "../../../utils/validator";

const router = express.Router();

router.get(
  "/",
  validator(schema.queryParamValidation),
  Repo.VerifyIfPalindrome
);

export default router;
