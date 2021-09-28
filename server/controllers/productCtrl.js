module.exports = {
  getAllProducts: async (req, res) => {
    const db = req.app.get('db');

    try {
      const products = await db.product.get_all_products();
      if (products.length !== 0) {
        res.status(200).send(products);
      } else {
        throw 'Not found';
      }
    } catch (error) {
      res.status(404).send('Products not found');
    }
  },

  getProduct: async (req, res) => {
    const db = req.app.get('db');

    try {
      const { id } = req.params;
      const foundProduct = await db.product.get_product_by_id({ id });
      if (foundProduct.length) {
        const product = foundProduct[0];
        res.status(200).send(product);
      } else {
        throw 'Not found';
      }
    } catch (error) {
      res.status(404).send('Product not found');
    }
  },

  getProductCategories: async (req, res) => {
    const db = req.app.get('db');
    const { category } = req.query;

    try {
      const products = await db.product.get_product_by_category({ category });
      if (products.length !== 0) {
        res.status(200).send(products);
      } else {
        throw 'Not found';
      }
    } catch (error) {
      res.status(404).send(`${category} not found`);
    }
  },

  createProduct: async (req, res) => {
    const db = req.app.get('db');
    const { category, price, description, name, count_in_stock } = req.body;

    try {
      const newProduct = await db.product.create_product({
        category,
        price,
        description,
        name,
        count_in_stock
      });
      const product = newProduct[0];

      res.status(201).send(product);

    } catch (error) {
      res.status(406).send('Invalid entry');
    }
  }
  
}