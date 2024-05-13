import { useLoaderData } from "react-router-dom";
import BorrowedBooksCard from "./BorrowedBooksCard";
import { Toaster } from "react-hot-toast";
import EmptySvg from "../../Components/EmptySvg";
// import { useLottie } from "lottie-react";

const BorrowedBooks = () => {
    const borrowedBooks = useLoaderData()
    console.log(borrowedBooks)
    if (borrowedBooks.length === 0) {
        return (
            <div className="pt-20">
                <EmptySvg></EmptySvg>
                <h1 className="text-xl text-center my-12 text-[#34d399]">Currently you have no books borrowed</h1>
            </div>
        )
    }
    return (
        <div className="pt-28 container mx-auto">
            <Toaster></Toaster>
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