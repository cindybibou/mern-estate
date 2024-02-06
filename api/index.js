import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
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

app.use(express.json())

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
app.use('/api/auth', authRouter)

app.use((err, req, res, next ) => {
    const statusCode =  err.statusCode || 500
    const message = err.message || 'Internal server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
    //status code vient de l'input du middleware. S'il n'y a pas d'erreur de statusCode, utiliser 500.
}) 

//err est erreur qui vient de l'input du middleware, que nous envoyons vers la requête du middleware. req est la données venant du navigateur, res: la réponse du serveur vers le client, next pour aller au prochain middleware