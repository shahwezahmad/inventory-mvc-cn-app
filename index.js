import  express from 'express'
import dotenv from 'dotenv'
const app = express()
import GetProducts from './src/controllers/products.controller.js'

dotenv.config()
const port =  process.env.PORT ?? 3100


// express.static()




app.get('/', GetProducts.getProducts)

app.listen(4000, () => console.log(`projec is running on PORT ${port}`))