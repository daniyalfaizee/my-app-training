import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const userId = req.query.id;
  if (req.method === 'DELETE') {
    const user = await prismaClient.Customer.delete({
      where: { id: userId },
    });
    res.json(user);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
