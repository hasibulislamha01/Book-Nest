import { Rating } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import NestedModal from "../../Components/MuiNestedModal";
import { useState } from "react";

const Details = () => {
    const data = useLoaderData()
    const book = data[0]
    console.log(book)
    const [showContent, setShowcontent] = useState(false)

    return (
        <div>
            <div className="container mx-auto py-20 flex flex-col md:flex-row justify-between gap-10 md:gap-0 px-2 lg:px-0 ">
                <div className="w-full mx-auto md:w-2/5 space-y-5">
                    <img className="w-full min-h-[350px] max-h-screen" src={book?.image} alt="" />
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl text-[#6A5ACD] font-bold">{book?.category}</h3>
                        <div className="flex items-center gap-2">
                            <p className="">Rating: </p>
                            <Rating name="read-only" value={book?.rating} readOnly size="small" />
                        </div>
                        <p>Available copies: {book?.quantity}</p>
                    </div>
                </div>
                <div className="text-center w-full flex flex-col justify-evenly space-y-6">
                    <div className="">
                        <h1 className="text-3xl font-bold">
                            {book?.name}
                        </h1>


                        <p className=" font-medium text-lg">
                            {book?.author}
                        </p>
                        <p>
                            {book?.rating > 4 ?
                                <span className="mt-2 badge bg-rose-100 text-rose-500 font-semibold p-3">Top Rated</span>
                                : <></>
                            }
                        </p>
                    </div>

                    <div className="mx-auto">
                        <h1 className="text-lg font-bold">About the Book</h1>
                        <hr className="w-3/5 border-b-2 my-2 mx-auto" />
                        <p className="w-full px-6">
                            {book?.description}
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                        <Link to='/' className="btn bg-[#556B2F] text-[#F5F5DC]"> Back to home </Link>
                        {/* <BorrowModal bookName={book?.name} bookId={book?._id} quantity={book?.quantity}></BorrowModal> */}
                        <NestedModal bookCategory={book?.category} bookName={book?.name} bookId={book?._id} quantity={book?.quantity} image={book?.image}></NestedModal>
                        <button className="btn bg-[#556B2F] text-[#F5F5DC]" > Read Sample </button>
                    </div>
                </div>

            </div>
            {/* {
                showContent ?
                    <div>

                    </div>
            } */}
        </div>
    );
};

export default Details;