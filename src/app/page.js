import Image from "next/image";
import Counter from "./Component/Counter";

// import myNextImage from "../assets/img20.jpg"
import myNextImage from "@/assets/img20.jpg";
import error from "./error";

const HomePage = () => {

  // console.log(data)

// throw new Error('error from home page');




  return (
    <div className="min-h-screen ">
      <h1 className="text-4xl text-center mt-[40vh]">
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
      </div>

    </div>
  );
};

export default HomePage;
