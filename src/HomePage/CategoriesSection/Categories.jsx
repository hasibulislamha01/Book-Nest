import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://booknest-phi.vercel.app/categories')
            .then(response => {
                setCategories(response.data)
            }).catch(error => {
                console.error(error)
            })
    }, [])
    console.log(categories)
    return (
        <div className="mt-12 md:mt-32 lg:mt-40">
            <h1 className="text-center text-3xl mb-6">Our Collections</h1>
            <div data-aos="fade-up" data-aos-duration="3000" className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center justify-items-stretch">
                {
                    categories?.map(category =>
                        <CategoryCard
                            key={category._id}
                            category={category}
                        ></CategoryCard>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;