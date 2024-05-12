import { Rating } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import NestedModal from "../../Components/MuiNestedModal";

const Details = () => {
    const data = useLoaderData()
    const book = data[0]
    console.log(book)

    return (
        <div className="mt-12 flex flex-col md:flex-row justify-between gap-10 md:gap-0 px-2 lg:px-0 ">
            <div className="w-full mx-auto md:w-2/5 border border-red-400">
                <img className="w-full min-h-[350px] max-h-screen" src={book?.image} alt="" />
            </div>
            <div className="text-center border border-red-400 w-full flex flex-col justify-evenly">
                <div className="">
                    <h1 className="text-3xl font-bold">
                        {book?.name}
                    </h1>


                    <p className=" font-medium text-lg">
                        {book?.author}
                    </p>
                    <p>
                        {book?.rating > 4 ?
                            <span className="mt-2 badge bg-red-200 text-red-600 font-semibold p-3">Top Rated</span>
                            : <></>
                        }
                    </p>
                </div>
                <div className="">
                    <h3 className="text-xl text-sky-400 font-bold">{book?.category}</h3>
                    <div className="flex items-center justify-center gap-2">
                        <p className="">Rating: </p>
                        <Rating name="read-only" value={book?.rating} readOnly size="small" />
                    </div>
                    <p>Available copies: {book?.quantity}</p>
                </div>
                <div className="mx-auto">
                    <h1 className="text-lg font-bold">About the Book</h1>
                    <hr className="w-3/5 border-b-2 my-2 mx-auto" />
                    <p className="w-full px-6">
                        {book?.description}
                    </p>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <button className="btn bg-purple-100"> Back to home </button>
                    {/* <BorrowModal bookName={book?.name} bookId={book?._id} quantity={book?.quantity}></BorrowModal> */}
                    <NestedModal bookName={book?.name} bookId={book?._id} quantity={book?.quantity}></NestedModal>
                    <button className="btn bg-violet-100"> Read Sample </button>
                </div>
            </div>

        </div>
    );
};

export default Details;