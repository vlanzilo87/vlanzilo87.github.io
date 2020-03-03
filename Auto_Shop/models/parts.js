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
    description: 'front body protection',
    img: 'https://static.summitracing.com/global/images/prod/xlarge/bdy-bm1100119_xl.jpg?rep=False',
    price: 150,
    qty: 5
  },
  {
    name: 'brake calipers',
    description: 'front and rear brake pads for both sides',
    img: 'https://assets2.fcpeuro.com/public/assets/products/329601/large/open-uri20190731-19928-19qnxji.?1564602414',
    price: 75,
    qty: 20
  },
  {
    name: 'fuel pump',
    description: 'delivers fuel from tank to engine',
    img: 'https://www.partsgeek.com/assets/dimage/fulln/07416274-1801383.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'steering wheel',
    description: 'allows driver to turn vehicle',
    img: 'https://i.ebayimg.com/images/g/6iYAAOSw5rBbNGz1/s-l300.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'wheel set',
    description: 'all 4 rims, no tires',
    img: 'https://www.hubcaphaven.com/mm5/graphics/00000001/aly59168.jpg',
    price: 50,
    qty: 10
  },
  {
    name: 'headlight',
    description: 'includes housing, wiring and bulb',
    img: 'https://assets3.fcpeuro.com/public/assets/products/122253/large/open-uri20140226-13157-qz2owh.?1496428846',
    price: 50,
    qty: 10
  },
  {
    name: 'maf sensor',
    description: 'helps measure air intake',
    img: 'https://assets2.fcpeuro.com/public/assets/products/113340/large/13627547981.jpg?1496426372',
    price: 50,
    qty: 10
  },
  {
    name: 'timing belt kit',
    description: 'replaces worn belt, includes pulley and tensioner',
    img: 'https://assets2.fcpeuro.com/public/assets/products/271580/large/open-uri20170601-15288-ryvtm7.?1496507720',
    price: 50,
    qty: 10
  },
  {
    name: 'driveshaft',
    description: 'measures unburned oxygen in exhaust',
    img: 'https://assets4.fcpeuro.com/public/assets/products/275245/large/open-uri20170829-15408-1eedvrd.?1504039332',
    price: 50,
    qty: 10
  },
  {
    name: 'valve cover',
    description: 'https://assets2.fcpeuro.com/public/assets/products/154551/large/11127526445-1.jpg?1496435612',
    img: 'https://assets2.fcpeuro.com/public/assets/products/154551/large/11127526445-1.jpg?1496435612',
    price: 50,
    qty: 10
  },
  {
    name: 'radiator',
    description: 'helps regulate engine temp',
    img: 'https://www.autohausaz.com/images/17111468079.jpg',
    price: 50,
    qty: 10
  }
]

module.exports = parts
