

import express from 'express';
import path from 'path';
import {readJsonFile} from "../../../libs/common/src/lib/utils/read-json.util";
import {ApiRouter} from "./api.route";

const app = express();

app.use('/api', ApiRouter)

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
