import express from 'express';
import {SprDclController} from "./spr-dcl.controller";

const router = express.Router();
const controller = new SprDclController();

router.get('/get', controller.getDiscrepancies);

export {router as SprDclRouter};
