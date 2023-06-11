import Image from 'next/image'
import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const user = await prismaClient.Customer.findUnique({
      where: {
        id: String(params?.id),
      },
      include: {
        orders: {
            select: { orderNum: true },
        },
      },
    });
    return {
      props: user,
    };
  };