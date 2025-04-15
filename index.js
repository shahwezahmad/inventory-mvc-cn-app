import  express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port =  process.env.PORT ?? 4000

app.get('/', (req, res) => {
    res.send('welcome to inventory app')
})

app.listen(4000, () => console.log(`projec is running on PORT ${port}`))