import  express from 'express'
import dotenv from 'dotenv'
const app = express()
import GetProducts from './src/controllers/products.controller.js'
import expressLayouts from 'express-ejs-layouts'
import path from 'path'

dotenv.config()
const port =  process.env.PORT ?? 3100
app.set("view engine", "ejs", )
app.set("views", path.join(path.resolve(), "src", "views"))

app.use(expressLayouts)




app.get('/', GetProducts.getProducts)

app.listen(port, () => console.log(`project is running on PORT ${port}`))