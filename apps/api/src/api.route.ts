import express from "express";
import {SprDclRouter} from "./app/spr-dcl";

const router = express.Router();
router.use('/spr-dcl', SprDclRouter);


export {router as ApiRouter};
