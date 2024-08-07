import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const EditProduct = () => {
    const item = useLoaderData();
    
    //edit item function
    const handleEditItem = (e) =>{
        e.preventDefault();
        const form = e.target;
        let itemName = form.item_name.value;
        if(!itemName){
            itemName = item.itemName;
        }
        let photo = form.photo.value;
        if(!photo){
            photo = item.photo;
        }
        let subcategory = form.subcategory_name.value;
        if(!subcategory){
            subcategory = item.subcategory;
        }
        let description = form.description.value;
        if(!description){
            description = item.description;
        }
        let price = form.price.value;
        if(!price){
            price = item.price;
        }
        let rating = form.rating.value;
        if(!rating){
            rating = item.rating;
        }
        let customize = form.customization.value;
        if(!customize){
            customize = item.customize;
        }
        let process = form.process.value;
        if(!process){
            process = item.process;
        }
        
        let stock = form.stock.value;
        if(!stock){
            stock = item.stock;
        }
        const email = item.email;
        const name = item.displayName;
       
        const itemData = { photo, subcategory, description, price, rating, customize, process, stock, itemName, email, name}
        fetch(`https://artifex-server-brand-new-clone.vercel.app/edit/${item._id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(itemData)
        })
        .then(res => res.json())
        .then(data => {
            form.reset();
            console.log(data)
            Swal.fire({
                title: "Updated",
                text: "item updated successfully",
                icon: "success"
              });
        })
    }
    return (
        <div>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <a href="#" className="text-2xl font-bold text-gray-800">Edit Items</a>
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </a>
                                <span className="font-semibold text-gray-900">login</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
                                <span className="font-semibold text-gray-900">provide details</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
                                <span className="font-semibold text-gray-500">confirm</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://i.postimg.cc/bN98R0Mw/pexels-cottonbro-3094018.jpgphoto-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">Our premium product</span>
                                <span className="float-right text-gray-400">conditions: new</span>

                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://i.postimg.cc/SxVSmL7v/pexels-cottonbro-3094033.jpg" alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">checkout our latest product</span>
                                <span className="float-right text-gray-400">condition: new</span>

                            </div>
                        </div>
                    </div>



                </div>
                <form onSubmit={handleEditItem } className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Add Item Details</p>
                    <p className="text-gray-400">Complete this form to add items</p>
                    <div className="">
                        <label className="mt-4 mb-2 block text-sm font-medium">item name</label>
                        <div className="relative">
                            <input type="text" name="item_name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the item name" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

                            </div>
                        </div>
                        <label className="mt-4 mb-2 block text-sm font-medium">item image url</label>
                        <div className="relative">
                            <input type="text" name="photo" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the image url" />

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">subcategory_name</label>
                        <div className="relative">
                            <input type="text" name="subcategory_name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the subcategory_name" />

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">short description</label>
                        <div className="relative">
                            <input type="text" name="description" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the subcategory_name" />

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">price</label>
                        <div className="relative">
                            <input type="text" name="price" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the price" />

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">rating</label>
                        <div className="relative">
                            <input type="text" name="rating" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the rating" />

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">customization possible ? yes or no</label>
                        <div className="relative">
                            <input type="text" name="customization" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the customization" />

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">process time</label>
                        <div className="relative">
                            <input type="text" name="process" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the process time" />

                        </div>

                        <label className="mt-4 mb-2 block text-sm font-medium">stock status</label>
                        <div className="relative">
                            <input type="text" name="stock" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter the stock status" />

                        </div>

                        







                        {/* Total */}


                    </div>
                    <button type="submit" className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;