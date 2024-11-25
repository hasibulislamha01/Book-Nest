
import { useLoaderData } from "react-router-dom";
import SameCategoryCard from "./SameCategoryCard";

const SameCategoryBooks = () => {

    const similarBooks = useLoaderData()
    similarBooks && console.log(similarBooks?.category)
    // const {image, name, author, category, rating} = similarBooks
    return (
        <div className="min-h-screen update-bg dark:bg-gray bg-center bg-cover py-32">
            <h1 className="text-white text-center textt-3xl">{similarBooks?.category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-stretch py-20 container mx-auto">
                {
                    similarBooks?.map(book=>
                        <SameCategoryCard
                            key={book?._id}
                            book={book}
                        ></SameCategoryCard>
                    )
                }
            </div>
        </div>
    );
};

export default SameCategoryBooks;