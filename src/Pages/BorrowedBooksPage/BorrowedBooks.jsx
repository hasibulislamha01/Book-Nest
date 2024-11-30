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
        <div className="py-12 md:py-20 container mx-auto">
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
            {
                borrowedBooks.length > 0 &&
                <div className="mx-2 text-center rounded-xl py-12 my-20 bg-red-400 dark:bg-ash text-lavender dark:text-red-400 space-y-4">
                    <h1 className="text-3xl font-bold">Warning</h1>
                    <p className="px-2 md:px-5 lg:px-20 font-semibold">
                        If you do not return the borrowed books on time you will be fined. <br /> Also, there is a possibility for a membership suspension. <br />
                        So, be a book lover and be honest.
                    </p>
                    <div className=" font-bold">
                        <h5>Regards</h5>
                        <hr className="border-b w-1/5 mx-auto font-light border-lavender dark:border-red-400" />
                        <p>team BookNest</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default BorrowedBooks;