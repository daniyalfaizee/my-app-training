import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { email, name, phone } = req.body;

  const result = await prismaClient.Customer.create({
    data: {
        email: email,
        name: name,
        phone: phone
    },
  });
  res.json(result);
}
