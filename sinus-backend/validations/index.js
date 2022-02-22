const {
  check, 
  body, 
  validationResult, 
  query,
} = require('express-validator')
const {ORDER_STATUSES, PRODUCT_CATEGORIES} = require('../constants')

const validator = (validations) => async (req,res,next) => {
  for (let validation of validations) {
    const result = await validation.run(req);
    if (result.errors.length) break;
  }

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }


  res.status(400).json({ errors: errors.array()});
  
}

module.exports = {
  login: validator([
    check('email').exists()
      .withMessage('Missing email'),
    check('password').exists()
      .withMessage('Missing password')
  ]),

  register: validator([
    check('email')
      .isEmail()
      .withMessage('Invalid e-mail format'),
    check('name')
      .isLength({min:2, max: 50})
      .withMessage('Name must be between 2 and 50 characters'),
    check('password')
      .exists()
      .withMessage('Password missing'),
    check('address')
      .exists()
      .withMessage('Missing address'),
    check('address.zip')
      .exists()
      .withMessage('Missing zip'),
    check('address.street')
      .exists()
      .withMessage('Missing street'),
    check('address.city')
      .exists()
      .withMessage('Missing city'),
  ]),

  getProducts: validator([
    query('category')
      .optional()
      .isIn(PRODUCT_CATEGORIES)
      .withMessage('Category must be one of '+PRODUCT_CATEGORIES.join(","))
      .bail()
      .if(query('exclude').exists())
      .not().exists().withMessage('category cannot be used together with exclude'),
    query('exclude')
      .optional()
      .custom(value => value.split(",").every(val => PRODUCT_CATEGORIES.includes(val)))      
      .withMessage('Categories must be list of '+PRODUCT_CATEGORIES.join(","))
      .bail()
      .if(query('category').exists())
      .not().exists().withMessage('category cannot be used together with exclude'),
    query('search')
      .optional()
      .isLength({min: 3})
      .withMessage('Search terms must be at least 3 characters')
    // oneOf([
    //   [
    //     query('exclude').not().exists()
    //       .withMessage('exclude cannot be used together with category')
    //       .bail(),
    //     query('category').isIn(PRODUCT_CATEGORIES)
    //       .bail()
    //   ],
    //   [
    //     query('exclude').isIn(PRODUCT_CATEGORIES)],
    //   [
    //     query('search').isLength({min:3})
    //   ]
    // ])
  ]),

  createProduct: validator([
    body('title').isLength({min:3, max: 50})
      .withMessage('Title must be between 3 and 50 characters'),
    body('shortDesc').exists()
      .withMessage('Short description missing'),
    body('longDesc').exists()
      .withMessage('Long description missing'),
    body('imgFile').exists()
      .withMessage('Image file name missing'),
    body('category').isIn(PRODUCT_CATEGORIES)
      .withMessage('Category must be one of '+PRODUCT_CATEGORIES.join(",")),
    body('price').isInt()
      .withMessage('Price must be an integer'),
  ]),

  updateProduct: validator([
    body('title').isLength({min:3, max: 50})
      .withMessage('Title must be between 3 and 50 characters'),
    body('shortDesc').exists().optional()
      .withMessage('Short description missing'),
    body('longDesc').exists().optional()
      .withMessage('Long description missing'),
    body('imgFile').exists().optional()
      .withMessage('Image file name missing'),
    body('category').optional()
      .isIn(['cap', 'hoodie', 'wheel','tshirt', 'totebag', 'skateboard', 'socks'])
      .withMessage('Category must be one of ' + PRODUCT_CATEGORIES.join(",")),
    body('price').isInt().optional()
      .withMessage('Price must be an integer'),
  ]),

  createOrder: (req,res,next) => {
    if(!req.body.shippingAddress){
      validator([
        check('items').isArray({min: 1})
          .withMessage('Missing item IDs, must be an array with at least one ID')
      ])(req,res,next)
    }else{
      validator([
        check('items').isArray({min: 1})
          .withMessage('Missing item IDs, must be an array with at least one ID'),
        check('shippingAddress').exists()
          .withMessage('Missing shipping address'),
          check('shippingAddress.city').exists()
          .withMessage('Missing shipping city'),
          check('shippingAddress.street').exists()
          .withMessage('Missing shipping street'),
          check('shippingAddress.zip').exists()
          .withMessage('Missing shipping zip'),
      ])(req,res,next)
        
    }
  },

  updateOrder: validator([
    check('status').isIn(ORDER_STATUSES)
      .withMessage('Invalid status, must be one of ' + ORDER_STATUSES.join(","))
  ]),

  updateProfile: validator([
    check('email').optional().isEmail()
      .withMessage('Invalid e-mail format')
  ])
}