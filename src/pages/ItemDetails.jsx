import { useLoaderData } from "react-router-dom";


const ItemDetails = () => {
    const cardData = useLoaderData();
    const {name, photo, subcategory, description, price, rating, customize, process, stock, itemName, email, _id} = cardData;
    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={photo}
            />
            
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME: ARTIFEX
              </h2>
              <div className="badge bg-[#2d8e82] text-white p-2">{subcategory}</div>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {itemName}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  {/* Additional rating stars */}
                </span>
                <span className="text-gray-600 ml-3">{rating} Ratings</span>
              </div>
              <p className="leading-relaxed">
                {description}
              </p>

              <div>
                
               
                <p><span className="font-bold">Customizable:</span>{customize}</p>
                <p><span className="font-bold">Time to Process:</span>{process}</p>
                <p><span className="font-bold">Stock:</span>{stock}</p>
                <p><span className="font-bold">Seller:</span>{name}</p>
                <p><span className="font-bold">Seller Email:</span>{email}</p>
                </div>
              
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                {/* Color selection buttons */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Buy
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ItemDetails;