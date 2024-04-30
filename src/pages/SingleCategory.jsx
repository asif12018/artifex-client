import { useEffect, useState } from "react";
import ParticlesBg from 'particles-bg'
import { Link } from "react-router-dom";

const SingleCategory = ({item}) => {
    const [newType, setNewType] = useState()
    const color = ['ball', 'circle', 'square', 'fountain']
    useEffect(()=>{
        const index = Math.round(Math.random() * 4)
        setNewType(color[index])
    },[])
    return (
        <Link to={`/filter/${item}`} className="card  shadow-xl">
            <div className="card-body">
                
                <p className="text-xl text-center font-bold">{item}</p>
                
            </div>
            <ParticlesBg type={newType} bg={true} />
        </Link>
    );
};

export default SingleCategory;