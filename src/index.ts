import express, { Request, Response } from 'express';
import cors from 'cors';
import db from './config/dbConfig';
import Users from './models/userModel';
import { env } from '../env'
import userRoutes from './routes/userRoutes'
const PORT = env.PORT
const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("Db connection working")
});
app.listen(PORT, () => {
    console.log("servidor rodando na porta ", + PORT)
})




