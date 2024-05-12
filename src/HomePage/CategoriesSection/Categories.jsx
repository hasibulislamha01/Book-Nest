import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/categories')
        .then(response=>{
            setCategories(response.data)
        }).catch(error=>{
            console.error(error)
        })
    },[])
    console.log(categories)
    return (
        <div className="container mx-auto mt-12 px-2 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {
                categories?.map(category=>
                    <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>
                )
            }
        </div>
    );
};

export default Categories;