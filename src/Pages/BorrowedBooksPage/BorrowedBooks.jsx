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
            {
                borrowedBooks.length > 0 &&
                <div className="text-center rounded-xl py-12 my-20 bg-red-400 space-y-4">
                    <h1 className="text-3xl text-white font-bold">Warning</h1>
                    <p className="px-20 text-rose-50 font-semibold">
                        If you do not return the borrowed books on time you will be fined. <br /> Also, there is a possibility for a membership suspension. <br />
                        So, be a book lover and be honest.
                    </p>
                    <div className="text-white font-bold">
                        <h5>Regards</h5>
                        <hr className="border-b w-1/5 mx-auto font-light" />
                        <p>team BookNest</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default BorrowedBooks;