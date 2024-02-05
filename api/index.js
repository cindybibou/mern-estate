import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB!')
    })
    .catch((err) => {
        console.log(err)
    })

const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
    }
)

app.get('/test', (req, res) => {
    res.json({
        message: 'Hello World!',
    })
})

//Toutes les routes doivent être définies dans ce fichier.


//Chaque fois que quelqu'un ira sur la route /api/user, il va checker toutes les routes de userRouter. Et la première d'entre elles est /test. Pour avoir le message, il faudra donc mettre le chemin api/user/test dans l'url.
app.use("/api/user", userRouter)