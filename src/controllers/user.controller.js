import UserModel from "../models/user.model.js"
import ProductModel from "../models/product.model.js"

const products = ProductModel.get()


 export default class User {
        static register(req, res) {
            res.render("user-register")
        }

        static login(req, res) {
            res.render("user-login")
        }

        static addUser(req, res) {
            let {name, email, password} = req.body
            UserModel.addUser({name, email, password})
            res.render("user-login", {products})
        }

        static postLogin(req, res) {
            let {email, password} = req.body 
            req.session.email = email
            let foundUser = UserModel.checkUser(email, password)
            if(foundUser) {
                res.render("products", {products, email: req.session.email})
            }else {
                return res.status(401).send("Unauthorized User")
            }
        }

        static logout(req, res)  {
            req.session.destroy((err) => {
                if(err) {
                    console.log(err)
                }else {
                    res.redirect('/login')
                }
            })
        }

         

 }