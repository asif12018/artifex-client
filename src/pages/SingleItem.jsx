import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleItem = ({ item }) => {
    const { name, photo, subcategory, description, price, rating, customize, process, stock, itemName, email, _id } = item;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-[300px]" src={photo}  /></figure>
            <div className="card-body">
                <h2 className="card-title">{itemName}</h2>
                <div className="badge bg-[#2d8e82] text-white p-2">{subcategory}</div>
                <div>
                <p><span className="font-bold">Price:</span>{price}$</p>
                <p className="flex items-center">
                    <span className="font-bold">Rating:</span>{rating}
                    <CiStar className="text-orange-400 text-xl"/>
                </p>
                <p><span className="font-bold">Customizable:</span>{customize}</p>
                <p><span className="font-bold">Time to Process:</span>{process}</p>
                <p><span className="font-bold">Stock:</span>{stock}</p>
                <p><span className="font-bold">Seller:</span>{name}</p>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`}  className="btn bg-[#2d8e82] w-full text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;