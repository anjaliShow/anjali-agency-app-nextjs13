import { mongooseConnect } from '@/lib/dbConnect';
import { Blog } from '@/models/Blog';

export default async function handler(req, res) {
  //   res.json(req.method);
  //   res.status(200).json(req.method);
  const { method } = req;
  await mongooseConnect();

  if (method === 'GET') {
    if (req.query?.id) {
      // Get single product by ID
      const productDoc = await Blog.findOne({ _id: req.query.id });
      res.status(200).json(productDoc);
    } else {
      // Get all products
      const productDoc = await Blog.find();
      res.status(200).json(productDoc);
    }
  } else if (method === 'POST') {
    // Create single Product
    const { title, description, price, images } = req.body;
    const productDoc = await Blog.create({
      title,
      description,
      price,
      images,
    });
    res.status(201).json(productDoc);
  } else if (method === 'GET') {
    //Get all Products
    const productDoc = await Blog.find();
    res.status(200).json(productDoc);
  } else if (method === 'PUT') {
    //update Product
    const { title, description, price, images, _id } = req.body;
    await Blog.updateOne({ _id }, { title, description, price, images });
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
    });
  } else if (method === 'DELETE') {
    //delete Product
    if (req.query?.id) {
      await Blog.deleteOne({ _id: { _id: req.query.id } });
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
      });
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
