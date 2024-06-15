import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardContainerNew from "./CardContainerNew";


const FilterByCategory = () => {
    const[loading, setloading] = useState(false);
    const shortName = useParams()
    
    const [filterData, setFilterData] = useState([]);
    useEffect(()=>{
        fetch('https://artifex-server-brand-new-clone.vercel.app/items')
        .then(res => res.json())
        .then(data =>{
            const shortedData = data.filter(data => data.subcategory == shortName.category);
            setFilterData(shortedData);
            console.log(shortedData)
            setTimeout(()=>{
                setloading(true);
            },[2000])
        })
        
    },[])
    
    return (
        <div>
          
          <h2 className="text-xl md:text-3xl font-bold">Items Shorted By Category: {shortName.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                filterData.map((item, index) => <CardContainerNew key={index} item={item}></CardContainerNew>)
            }
            </div>
        </div>
    );
};

export default FilterByCategory;