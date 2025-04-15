
import path from 'path'

// export  const getProduct = (req, res) => {
//     return res.sendFile(path.join(path.resolve(), "src","views","products.html"))
// }

export default class GetProducts {

    static getProducts(req, res)  {
        res.sendFile(path.join(path.resolve(), "src","views","products.html"))
    }
}

