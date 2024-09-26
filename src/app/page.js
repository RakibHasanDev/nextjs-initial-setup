import Image from "next/image";
import Counter from "./Component/Counter";

// import myNextImage from "../assets/img20.jpg"
import myNextImage from "@/assets/img20.jpg"

const HomePage = async () => {

  const res = await fetch ('http://localhost:5000/shoes');
  const shoes = await res.json();


  // console.log(data)

  return (
    <div className="min-h-screen ">
      {/* <h1 className="text-4xl text-center mt-[40vh]">
        Welcome to Next.js with cottage Home care
      </h1>
      <Counter />
      <div className="my-5">
      <h1 className="text-center"> regular image tag </h1>
        <div className="flex justify-center my-5  text-center">
            
          <img
            src="https://cottagehomecare.com/static/media/img4.10f3227733cd7101ee02.jpg"
            alt=""
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-center"> external Image with image component</h1>
        <div className="flex justify-center my-5 text-center">
            
          <Image
            src="https://cottagehomecare.com/static/media/img4.10f3227733cd7101ee02.jpg"
            alt="image"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-center"> internal image with image compopnnet</h1>
        <div className="flex justify-center my-5 text-center ">
                   
          <Image
            src={myNextImage}
            alt="image"
            width={200}
            height={200}
          />
        </div>
      </div> */}

        <div className="flex  flex-wrap  gap-10 w-[90%] mx-auto">

        {


shoes?.map(shoe=><div
  key={shoe?.id}

className="card bg-base-100 w-96 shadow-xl ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{shoe?.name}</h2>
    <h3 className="card-title">${shoe?.price}</h3>
    <p>{shoe?.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)



        }

        </div>



    </div>
  );
};

export default HomePage;
