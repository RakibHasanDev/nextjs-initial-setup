const DynamicPage = ({ params, searchParams }) => {
  console.log(params);
  return (
    <div>
      <h1>This is dynamic product. the product id is {params?.productId}</h1>
      <h1>
        This is dynamic product. the product category is:{" "}
        {searchParams?.category}
      </h1>
    </div>
  );
};

export default DynamicPage;
