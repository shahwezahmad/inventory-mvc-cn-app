import  express from 'express'
import dotenv from 'dotenv'
import expressLayouts from 'express-ejs-layouts'
import path from 'path'
import Products from './src/controllers/products.controller.js'
import {productMiddleware} from './src/middlewares/product.middleware.js'
import { upload } from './src/middlewares/file-upload.middleware.js'
import User from './src/controllers/user.controller.js'
import session from 'express-session'
import { auth } from './src/middlewares/auth.middleware.js'
import cookieParser from 'cookie-parser'
import { handleCookie } from './src/middlewares/cookie.middleware.js'

const app = express()


dotenv.config()
const port =  process.env.PORT ?? 3100
app.set("view engine", "ejs", )
app.set("views", path.join(path.resolve(), "src", "views"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(expressLayouts)
app.use(express.static('public'))

app.use(session({
    secret:'shahwez',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))
app.use(cookieParser())
app.use(handleCookie)


// user routes
app.get('/register', User.register)
app.post('/register', User.addUser)
app.get('/login', User.login)
app.post('/login', User.postLogin)
app.get('/logout', User.logout)




app.get('/', auth, Products.getProducts)
app.get('/getAddProduct', auth, Products.getddProduct )
app.get('/updateProduct/:id', auth, Products.updateProduct)
app.post('/', upload.single('imgUrl') , productMiddleware, Products.addNewProduct )
app.post('/updateProduct',auth, upload.single('imgUrl'),  Products.postUpdateProduct)
app.post('/deleteProduct/:id', auth, Products.deleteProduct)

app.listen(port, () => console.log(`project is running on PORT ${port}`))