import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import CategoryCardSkeleton from "../../Components/UI/Skeleton/CategoryCardSkeleton";

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://booknest-phi.vercel.app/categories')
            .then(response => {
                setCategories(response?.data)
                setLoading(false)
            }).catch(error => {
                console.error(error)
            })
    }, [])
    console.log(categories)
    return (
        <div className="mt-12 md:mt-32 lg:mt-40">
            <h1 className="text-center text-3xl mb-6">Our Collections</h1>
            <div data-aos="fade-up" data-aos-duration="3000" className="px-1 md:px-0 mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center justify-items-stretch">

                {
                    loading ?
                        <>
                            <CategoryCardSkeleton />
                            <CategoryCardSkeleton />
                            <CategoryCardSkeleton />
                            <CategoryCardSkeleton />
                        </>
                        :

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