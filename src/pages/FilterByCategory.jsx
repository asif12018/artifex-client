import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardContainer from "./CardContainer";


const FilterByCategory = () => {
    const shortName = useParams()
   
    const [filterData, setFilterData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data =>{
            const shortedData = data.filter(data => data.subcategory == shortName.category);
            setFilterData(shortedData);
        })
    })
    
    return (
        <div>
            <h2 className="text-xl md:text-3xl font-bold">Items Shorted By Category: {shortName.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                filterData.map((item, index) => <CardContainer key={index} item={item}></CardContainer>)
            }
            </div>
        </div>
    );
};

export default FilterByCategory;