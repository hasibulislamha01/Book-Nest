
import { useLoaderData } from "react-router-dom";
import SameCategoryCard from "./SameCategoryCard";
import { useEffect, useState } from "react";

const SameCategoryBooks = () => {

    const [loading, setLoading] = useState(true)
    const similarBooks = useLoaderData()

    useEffect(() => {
        if (similarBooks) {
            setLoading(false)
        }
    }, [similarBooks])

    return (
        <div className="min-h-screen bg-offWhite dark:bg-neutral bg-center bg-cover py-32">
            <h1 className="text-white text-center textt-3xl">{similarBooks?.category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center justify-stretch gap-y-5 py-20 container mx-auto">
                {
                    similarBooks?.map(book =>
                        <SameCategoryCard
                            key={book?._id}
                            book={book}
                            loading={loading}
                        ></SameCategoryCard>
                        
                    )
                }
            </div>
        </div>
    );
};

export default SameCategoryBooks;