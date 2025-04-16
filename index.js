import  express from 'express'
import dotenv from 'dotenv'
import expressLayouts from 'express-ejs-layouts'
import path from 'path'
import Products from './src/controllers/products.controller.js'
import {productMiddleware} from './src/middlewares/product.middleware.js'
import { upload } from './src/middlewares/file-upload.middleware.js'
const app = express()


dotenv.config()
const port =  process.env.PORT ?? 3100
app.set("view engine", "ejs", )
app.set("views", path.join(path.resolve(), "src", "views"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(expressLayouts)
app.use(express.static('public'))




app.get('/', Products.getProducts)
app.get('/getAddProduct', Products.getddProduct )
app.get('/updateProduct/:id', Products.updateProduct)
app.post('/', upload.single('imgUrl') , productMiddleware, Products.addNewProduct )
app.post('/updateProduct', upload.single('imgUrl'),  Products.postUpdateProduct)
app.post('/deleteProduct/:id', Products.deleteProduct)

app.listen(port, () => console.log(`project is running on PORT ${port}`))