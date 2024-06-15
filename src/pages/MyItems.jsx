import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../components/provider/AuthProvider';
import SingleItem from "./SingleItem";
import Swal from 'sweetalert2/dist/sweetalert2.js'

const MyItems = () => {
    //confirm state for deletation
    const [confirm, setConfirm] = useState(false)
    //const state to identify my item
    const [isMyItem, setIsMyItem] = useState(true)
    //context api data
    const {user} = useContext(AuthContext);
    const [items, setItem] = useState([]);
    const [originalItems, setOriginalItems] = useState([]);
    //delete function
    const handleDeletItem = (id) =>{
        //sweet alert
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            //sending data to delete

            if (result.isConfirmed) {
              //sending data to delete
              fetch(`https://artifex-server-brand-new-clone.vercel.app/delete/${id}`,{
                method:'DELETE',
                headers: {
                    'content-type':'application'
                },
                
            })
            .then(res => res.json())
            .then(data => console.log(data))
              

              //filtering deleted items
              const newFilterData = items.filter(data => data._id != id);
              setItem(newFilterData);
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
    }
    useEffect(()=>{
        fetch('https://artifex-server-brand-new-clone.vercel.app/items')
        .then(res => res.json())
        .then(data =>{
            const filteredData = data.filter(data => data.email == user.email);
            setItem(filteredData);
            setOriginalItems(filteredData)
        })
    },[])

     // Customization filter
     function handleFilterCustomization(data) {
      if (data === 'yes' || data === 'no') {
          const filteredData = originalItems.filter(item => item.customize === data);
          setItem(filteredData);
      }
  }
    
    return (
        <div>
            <h1 className="text-2xl font-bold">User total items: {items.length}</h1>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Filter By:</h2>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">All</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleFilterCustomization('yes')}>Yes</a></li>
                        <li><a onClick={() => handleFilterCustomization('no')}>No</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-3">
             {
                items.map((item, index) =><SingleItem key={index} item={item} isMyItem={isMyItem} handleDeletItem={handleDeletItem} setItem={setItem}></SingleItem>)
             }
        </div>
        </div>
    );
};

export default MyItems;