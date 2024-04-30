import { useEffect, useState } from "react";
import SingleItem from "./SingleItem";

const AllItems = () => {
    const [items, setItems] = useState([]);
    const [originalItems, setOriginalItems] = useState([]);

    // Getting data from database API
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setOriginalItems(data);
            });
    }, []);

    // Customization filter
    function handleFilterCustomization(data) {
        if (data === 'yes' || data === 'no') {
            const filteredData = originalItems.filter(item => item.customize === data);
            setItems(filteredData);
        }
    }

    return (
        <div className="flex flex-col gap-3">
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
            {
                items.map((item, index) => <SingleItem key={index} item={item}></SingleItem>)
            }
        </div>
    );
};

export default AllItems;
