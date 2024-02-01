import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDatabase } from './config/database.js'
import { userRouter } from './routes/auth.js'
import { projectRouter } from './routes/project.js'
import { contactRouter } from './routes/contact.js'


const app = express();

dotenv.config({ path: './config/config.env' })


const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            "http://localhost:5173",
        ];
        const isAllowed = allowedOrigins.includes(origin);
        callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json())


app.use('/auth', userRouter)
app.use('/project', projectRouter)
app.use('/contact', contactRouter)


const PORT = process.env.PORT || 3000;


connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on the Port http://localhost:${PORT}/`)
    })
})
