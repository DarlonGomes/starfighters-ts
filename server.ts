import express from 'express';
import cors from 'cors';
import './dbstrategy/config/config'
import { router } from './routers/routes';
const app = express();

app.use(express.json());
app.use(cors());
app.use(router)
app.listen(process.env.PORT);