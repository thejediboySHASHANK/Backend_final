import { PrismaClient } from '@prisma/client';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

const app = express ();

const PORT = 3000;

export const prisma = new PrismaClient ();

const cors = require ('cors') //NOICEEEE

// compresses all the responses 
app.use (compression)
// make the headers secure 
app.use(helmet())

// app.use (cors())
app.use (cors()); //CROSS ORIGIN RESOURCE SHARING

app.use (express.json())

app.use (express.urlencoded ({ extended: true}))

app.listen (PORT, () => {
    console.log (`Yoga server is running on port ${PORT}`)
})