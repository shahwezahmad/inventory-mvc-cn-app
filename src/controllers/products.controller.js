
import path from 'path'
import ProductModel from '../models/product.model.js'

// export  const getProduct = (req, res) => {
//     return res.sendFile(path.join(path.resolve(), "src","views","products.html"))
// }

export default class Products {
    static getProducts(req, res)  {
    const products = (ProductModel.get())
        // res.sendFile(path.join(path.resolve(), "src","views","products.ejs"))
        res.render("products", {products})
    }

    static  getddProduct(req, res) {
        res.render("new-product")
    }

    static addNewProduct(req, res) {
        

        let {productName, productDesc, productPrice, imgUrl} = req.body


        ProductModel.add({productName, productDesc, productPrice, imgUrl})
         const products = (ProductModel.get())
        res.render("products", {products})
    }
}


