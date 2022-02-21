const {  ProductNotFound } = require("../errors")
const Product = require("../models/Product")

function parseQuery(query){
  const page = +query.page || 1
  let pageSize = +query.pageSize || 10
  
  pageSize = pageSize > 10 ? 10 : pageSize
  pageSize = pageSize < 1 ? 1 : pageSize
  return {page, pageSize}
}

module.exports = {
  async create(req, res){
    const product = await Product.create(req.body)
    res.json({product})
  },
  
  async getAll(req, res){
    const {page,pageSize} = parseQuery(req.query)
    const {category} = req.query
    const products = await Product.findAll({
      limit: pageSize,
      offset: (page-1)*pageSize,
      where: {
        ...(category && {category})
      }
    })
    res.json({products})
  },
  
  async getOne(req, res, next){
    const {id} = req.params
    const post = await Product.findOne({where:{id}})
    
    if(!post){ throw new ProductNotFound(id) }
    
    res.json({post})
  },
  
  async update(req, res, next){
    const {id} = req.params
    const post = await Product.findByPk(id)
    
    if(!post){ throw new ProductNotFound(id) }
    
    await Product.update(req.body, {where: {id}})    
    
    res.json({message: 'Product updated'})
  },
  
  async delete(req, res, next){
    try{
      const {id} = req.params
      const product = await Product.findOne({where:{id}})
      
      await product.destroy()
      res.json({message: 'Product annihilated!'})
    }catch(error){ next(error) }
  },
}