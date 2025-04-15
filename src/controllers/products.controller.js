
import path from 'path'
import ProductModel from '../models/product.model.js'

// export  const getProduct = (req, res) => {
//     return res.sendFile(path.join(path.resolve(), "src","views","products.html"))
// }

export default class GetProducts {
    static getProducts(req, res)  {
    console.log(ProductModel.get())
        res.sendFile(path.join(path.resolve(), "src","views","products.html"))
    }
}

