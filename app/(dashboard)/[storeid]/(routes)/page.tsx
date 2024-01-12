import prismadb from "@/lib/prismadb";

interface DashboadPageProps {
  params: { storeid: string };
}

const DashboardPage: React.FC<DashboadPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeid,
    },
  });
  return (
    <div>
      Active Store: <b>{store?.name}</b>
    </div>
  );
};

export default DashboardPage;
