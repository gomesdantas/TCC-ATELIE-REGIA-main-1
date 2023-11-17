import 'dotenv/config'

import admcontroller from './src/Controller/AdmController.js';
import userController from './src/Controller/UserController.js';



import express from 'express'
import cors from 'cors'

const server = express ();
server.use(cors());
server.use(express.json());

server.use(admcontroller);
server.use(userController);



server.listen(process.env.PORT, ()=> console.log(`API Conectada na Porta ${process.env.PORT}`));
