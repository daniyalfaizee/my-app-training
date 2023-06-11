import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { id, email, name, phone } = req.body;
  const user = await prismaClient.Customer.update({
    where: { id: id },
    data: { email: email, name: name, phone: phone },
  });
  res.json(user);
}
