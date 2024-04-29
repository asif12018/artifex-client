import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../components/provider/AuthProvider';
import SingleItem from "./SingleItem";


const MyItems = () => {
    //const state to identify my item
    const [isMyItem, setIsMyItem] = useState(true)
    //context api data
    const {user} = useContext(AuthContext);
    const [items, setItem] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data =>{
            const filteredData = data.filter(data => data.email == user.email);
            setItem(filteredData);
        })
    },[])
    
    return (
        <div>
            <h1>this is my item page</h1>

            <div className="flex flex-col gap-3">
             {
                items.map((item, index) =><SingleItem key={index} item={item} isMyItem={isMyItem}></SingleItem>)
             }
        </div>
        </div>
    );
};

export default MyItems;