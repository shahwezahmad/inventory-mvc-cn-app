import path from "path";
import ProductModel from "../models/product.model.js";

// export  const getProduct = (req, res) => {
//     return res.sendFile(path.join(path.resolve(), "src","views","products.html"))
// }

export default class Products {
  static getProducts(req, res) {
    const products = ProductModel.get();
    // res.sendFile(path.join(path.resolve(), "src","views","products.ejs"))
    res.render("products", { products });
  }

  static getddProduct(req, res) {
    res.render("new-product", { errorMessage: null });
  }

  static addNewProduct(req, res) {
    let { productName, productDesc, productPrice, imgUrl } = req.body;
    ProductModel.add({ productName, productDesc, productPrice, imgUrl });
    const products = ProductModel.get();
    res.render("products", { products });
  }

  static updateProduct(req, res) {
    // check product
    // const {id ? id : 2} = req.body

    let product = ProductModel.checkProduct(Number(req.params.id));
    if (product) {
      res.render("update-product", { errorMessage: null, product });
    } else {
      res.status(404).send("Product not found");
    }
  }

  static postUpdateProduct(req, res) {
    ProductModel.update(req.body);
    let products = ProductModel.get();
    res.render("products", { products });
  }

  static deleteProduct(req, res) {
    const productFound = ProductModel.checkProduct(req.params.id)
    if(productFound) {
            ProductModel.deleteProduct(productFound.id)
            let products = ProductModel.get()
            res.render("products",{products})
    }else {
        res.status(404).send('Product not found')
    }
  }
}
