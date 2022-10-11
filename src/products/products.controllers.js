const Products = require('../models/products.models')

const uuid = require('uuid')

const getAllProduct = () => {
  const data = Products.findAll()
  return data;
}

// console.log(getAllProduct());

const createProduct = async (data) => {
  const newProduct = await Products.create({
    id: uuid.v4(),
    name: data.name,
    category : data.category,
    price: data.price,
    isAvailable: data.isAvailable
  })

  return newProduct;
}
// createProduct({
//   name: 'camisa',
//   category : 'ropa',
//   price: 15,
//   isAvailable: true
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))

const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id:id
        }
    })
  return data
}

const editProduct = async (id, data) => {
  const dataUpdated = await Products.update(data, {
    where: {
        id
    }
  })
  return dataUpdated
}

const deleteProduct = async (id) => {
  const data = await Products.destroy({
        where: {
            id
        }
  })
  return data
}

module.exports = {
    getAllProduct,
    createProduct,
    getProductById,
    editProduct,
    deleteProduct
}

