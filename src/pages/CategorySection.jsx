import { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";


const CategorySection = () => {
    const [categroyList, setCategoryList] = useState([]);
    useEffect(() => {
        fetch('https://artifex-server-brand-new-clone.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                const uniqueSubcategories = {};

                data.forEach(item => {
                    uniqueSubcategories[item.subcategory] = true;
                });

                const subcategoryList = Object.keys(uniqueSubcategories);

                setCategoryList(subcategoryList)
            });
    }, []);

    

    return (
        <div className="my-16">
            <h2 className="text-2xl font-bold md:text-4xl text-center my-8">Filter By Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    categroyList.map(item => <SingleCategory key={item._id} item={item}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default CategorySection;