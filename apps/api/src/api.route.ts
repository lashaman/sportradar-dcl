import express from "express";
import {SprDclRouter} from "./app/spr-dcl";

const router = express.Router();
router.use('/discrepancies', SprDclRouter);


export {router as ApiRouter};
