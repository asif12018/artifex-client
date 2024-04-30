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
              fetch(`http://localhost:5000/delete/${id}`,{
                method:'DELETE',
                headers: {
                    'content-type':'application'
                },
                
            })
            .then(res => res.json())
            .then(data => console.log(data))
              

              
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
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data =>{
            const filteredData = data.filter(data => data.email == user.email);
            setItem(filteredData);
        })
    },[handleDeletItem])
    
    return (
        <div>
            <h1>this is my item page</h1>

            <div className="flex flex-col gap-3">
             {
                items.map((item, index) =><SingleItem key={index} item={item} isMyItem={isMyItem} handleDeletItem={handleDeletItem}></SingleItem>)
             }
        </div>
        </div>
    );
};

export default MyItems;