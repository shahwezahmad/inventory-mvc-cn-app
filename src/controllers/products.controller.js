
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
        res.render("new-product", {errorMessage: null})
    }

    static addNewProduct(req, res) {
    
        let {productName, productDesc, productPrice, imgUrl} = req.body
        let errors = []
        if(!productName || !productName.trim())  errors.push('Enter Product name')
        if(!productDesc || !productDesc.trim()) errors.push('Enter product description')
        if( parseFloat(productPrice) < 1) {
           
            errors.push('Price cannot be less than 1')
        }
        if(!imgUrl) errors.push('Enter image url')
            try {
                 let validUrl = new URL(imgUrl)
                } catch (error) {
                errors.push('Enter valid URL')
            }

            if(errors.length > 0) {
               return res.render('new-product', {errorMessage: errors[0]})
            }

        ProductModel.add({productName, productDesc, productPrice, imgUrl})
         const products = (ProductModel.get())
        res.render("products", {products})
    }
}


