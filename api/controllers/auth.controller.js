import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10) //hashSync : ça attend le hash. Le salt est le nombre de tours d'encyptage
    const newUser = new User({ username, email, password: hashedPassword })
        try {
            await newUser.save() //Va attendre que l'opération d'enregistrement d'un nouvel utilisateur dans la base de données finisse avant de passer à la ligne suivante
            res.status(201).json("User created succesfully!") //Signifie que qqch a été créé. Puis message: "ton utilisateur a été crée "
        } catch (error) {
            next(error)  // Error 500: erreur au niveau du serveur. error.message pour renvoyer le message d'erreur au navigateur
        }
            
}

export const signin = async (req, res, next) =>{
    const {email, password } = req.body
    try {
        const validUser = await User.findOne({email})
        if (!validUser) return next(errorHandler(404, 'User not found!'))
        const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'))
    const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET, )
    const { password: pass, ...rest} = validUser._doc
    res
        .cookie('access_token', token, { httpOnly: true})
        .status(200)
        .json(rest)
    } catch (error) {
        next(error)
    }
} 