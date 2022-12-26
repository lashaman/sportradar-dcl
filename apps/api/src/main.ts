import express from 'express';
import {ApiRouter} from "./api.route";
import cors from 'cors';
const app = express();
app.use(cors())
app.use('/api', ApiRouter)


const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
