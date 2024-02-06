import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const { username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10) //hashSync : ça attend le hash. Le salt est le nombre de tours d'encyptage
    const newUser = new User({ username, email, password: hashedPassword })
        try {
            await newUser.save() //Va attendre que l'opération d'enregistrement d'un nouvel utilisateur dans la base de données finisse avant de passer à la ligne suivante
            res.status(201).json("User created succesfully!") //Signifie que qqch a été créé. Puis message: "ton utilisateur a été crée "
        } catch (error) {
            res.status(500).json(error.message)  // Error 500: erreur au niveau du serveur. error.message pour renvoyer le message d'erreur au navigateur
        }
            
}