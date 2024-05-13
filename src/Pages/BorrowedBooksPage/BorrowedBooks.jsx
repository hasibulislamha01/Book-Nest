import { useLoaderData } from "react-router-dom";
import BorrowedBooksCard from "./BorrowedBooksCard";

const BorrowedBooks = () => {
    const borrowedBooks = useLoaderData()
    console.log(borrowedBooks)
    return (
        <div className="pt-28">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    borrowedBooks.map(book =>
                        <BorrowedBooksCard
                            key={book?._id}
                            book={book}
                        ></BorrowedBooksCard>
                    )
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;