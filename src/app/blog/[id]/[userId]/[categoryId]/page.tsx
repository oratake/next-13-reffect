const Page = ({ params }: { params: { id: string, userId: string, categoryId: string } }) => {
  console.log(params);
  return <div className="m-4 font-bold">Blog ID: {params.id}, User ID: {params.userId}, Category ID: {params.categoryId}</div>;
};

export default Page;
