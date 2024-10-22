

const ProductPage = async () => {

  const res = await fetch("http://localhost:5000/shoes", {
    cache:"no-store",
   });
 
   const shoes = await res.json();


  return (
    <div>
      
    
      <div className="flex  flex-wrap  gap-10 w-[90%] mx-auto">
        {shoes?.map((shoe) => (
          <div key={shoe?.id} className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{shoe?.name}</h2>
              <p>{shoe?.title}</p>
              <p className="mt-3">{shoe?.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default ProductPage;
