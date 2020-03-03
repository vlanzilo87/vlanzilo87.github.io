// const mongoose = require('mongoose')
//
// const itemzSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: String,
//     img:  String,
//     price:  Number,
//     qty:  Number,
// })
//
// const Item = mongoose.model('Item', itemSchema);
//
// module.exports = Item

const parts = [
  {
    name: 'front bumper',
    description: 'front end body part, color as shown',
    img: 'https://cdn11.bigcommerce.com/s-a4990/images/stencil/1280x1280/products/1319/4023/Dorfman_Pacific_Tall_Top_Hat__53481.1501715473.jpg?c=2',
    price: 150,
    qty: 5
  },
  {
    name: 'brake pads',
    description: 'front and rear brake pads for both sides',
    img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572275827-nautica-peacoat-1572275806.jpg',
    price: 75,
    qty: 20
  },
  {
    name: 'fuel pump',
    description: 'delivers fuel from tank to engine',
    img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'steering wheel',
    description: 'allows driver to turn vehicle',
    img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'tire set',
    description: 'all 4 tires, all-season',
    img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'headlight',
    description: 'includes housing, wiring and bulb',
    img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'maf sensor',
    description: 'helps measure air intake',
    img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'timing belt kit',
    description: 'replaces worn belt, includes pulley and tensioner',
    img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'O2 sensor',
    description: 'measures unburned oxygen in exhaust',
    img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'valve cover',
    description: 'protects top of engine',
    img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'radiator',
    description: 'helps regulate engine temp',
    img: 'https://m.media-amazon.com/images/I/71kYYu4lngL._SX700_.jpg',
    price: 50,
    qty: 10
  }
]

module.exports = parts
