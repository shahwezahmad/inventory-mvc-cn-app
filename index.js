import  express from 'express'
import dotenv from 'dotenv'
const app = express()
import Products from './src/controllers/products.controller.js'
import expressLayouts from 'express-ejs-layouts'
import path from 'path'

dotenv.config()
const port =  process.env.PORT ?? 3100
app.set("view engine", "ejs", )
app.set("views", path.join(path.resolve(), "src", "views"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(expressLayouts)




app.get('/', Products.getProducts)

app.get('/getAddProduct', Products.getddProduct )

app.post('/', Products.addNewProduct )

app.listen(port, () => console.log(`project is running on PORT ${port}`))