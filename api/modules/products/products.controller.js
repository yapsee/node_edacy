

const products = [
  {
    id: 1,
    name: 'iphoneXR',
    manufacturer: 'Apple'
  },
  {
    id: 3,
    name: 'samsungs3',
    manufacturer: 'Samsung'
  },
  {
    id: 6,
    name: 'mi',
    manufacturer: 'Xiaomi'
  }
]

module.exports.products  = products ;

module.exports.listAllProduct = (req, res) => {
  res.json(products)
 } 

 module.exports.addProduct = (req, res) => {
 products.push(req.body)
 res.json(req.body)
 } 

 module.exports.deleteProduct = (req, res) => {
  index = products.findIndex((product) => product.id == req.params.id );
  products.splice(index,1)
  res.json({ status: true })
 } 

 module.exports.findProduct = (req, res) => {
  const id = req.params.id;
  product = products.find((product) =>product.id == id )
  res.json(product)
 } 

 module.exports.updateOne = (req, res) => {
  const productBody = req.body;
  index = products.findIndex((product) => product.id == req.params.id );
  product = products[index] = {...products[index], ...productBody}
  res.json(product)

 } 