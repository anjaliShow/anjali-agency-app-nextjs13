import { mongooseConnect } from '@/lib/dbConnect';
import { Contact } from '@/models/Contact';

export default async function handler(req, res) {
  //   res.json(req.method);
  //   res.status(200).json(req.method);
  await mongooseConnect();
  const { method } = req;

  if (method === 'POST') {
    // Create single Product
    // console.log('req.body', req.body);
    const { name, email, description, budget, timeframe } = req.body;
    const contactDoc = await Contact.create({
      name,
      email,
      description,
      budget,
      timeframe,
    });
    res.status(201).json(contactDoc);
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
