export default class ProductModel {
  constructor(id, product_name, desc, price, imgUrl) {
    this.id = id;
    this.product_name = product_name;
    this.desc = desc;
    this.price = price;
    this.imgUrl = imgUrl;
  }

  static get() {
    return products;
  }

  static add(product) {
    product.id = products.length + 1;

    products.push(
      new ProductModel(
        products.length + 1,
        product.productName,
        product.productDesc,
        product.productPrice,
        product.imgUrl
      )
    );
  }

  static update({id, productName, productDesc, productPrice, imgUrl }) {
    const updatedProduct = new ProductModel( Number(id),
      productName,
      productDesc,
      productPrice,
      imgUrl
    )
     products = products.map((item) => item.id == (id) ? updatedProduct : item)
    
  }

  static checkProduct(id) {
    return products.find((product) => parseInt(product.id) === parseInt(id));
  }

  static deleteProduct(id) {

    products = products.filter(product => product.id != id)
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
];
