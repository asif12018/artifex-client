import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CraftItems = () => {
    useEffect(() => {
        
        AOS.init();
      }, []); 
    const [items, setItems] = useState([]);
    //getting data from database api
    useEffect(()=>{
       fetch('http://localhost:5000/items')
       .then(res => res.json())
       .then(data => setItems(data))
    },[])
    return (
        <div className="my-10"  data-aos="fade-down">
            <h2 className="text-2xl font-bold md:text-4xl text-center my-8">Our Crafted Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                items.map((item, index) => <CardContainer key={index} item={item}></CardContainer>)
            }
            </div>
        </div>
    );
};

export default CraftItems;