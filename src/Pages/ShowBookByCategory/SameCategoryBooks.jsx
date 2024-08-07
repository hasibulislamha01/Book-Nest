
import { useLoaderData } from "react-router-dom";
import SameCategoryCard from "./SameCategoryCard";

const SameCategoryBooks = () => {

    const similarBooks = useLoaderData()
    console.log(similarBooks)
    // const {image, name, author, category, rating} = similarBooks
    return (
        <div className="update-bg bg-center bg-cover">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 container mx-auto">
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