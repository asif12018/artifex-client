import { useEffect, useState } from "react";
import SingleItem from "./SingleItem";


const AllItems = () => {
    const [items, setItems] = useState([]);
    //getting data from database api
    useEffect(()=>{
       fetch('http://localhost:5000/items')
       .then(res => res.json())
       .then(data => setItems(data))
    },[])
      
    
    return (
        <div className="flex flex-col gap-3">
             {
                items.map((item, index) =><SingleItem key={index} item={item}></SingleItem>)
             }
        </div>
    );
};

export default AllItems;