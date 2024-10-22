
"use client"

const error = ({error, reset}) => {
  return (
    <div>

    <h1 className="text-4xl text-red-500 text-center">Something Went Wrong !!! 

        <br />

        {error?.message}

    </h1>


    </div>
  )
}

export default error