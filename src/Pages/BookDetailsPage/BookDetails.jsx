import { Rating } from "@mui/material";
import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import bookmark from '../../assets/bookmark.svg'
import NestedModal from "../../Components/MuiNestedModal";

const BookDetails = () => {
    const detailsRef = useRef(null);
    const bookRef = useRef(null);
    const [showSample, setShowSample] = useState(false)
    const [book] = useLoaderData()
    console.log(book);
    const description = book?.description
    const trimmedDescription = description.split(' ')?.slice(0, 30)?.join(' ')

    const scrollToShowSampleSection = () => {
        setTimeout(() => {
            if (detailsRef.current) {
                const elementTop = detailsRef.current.getBoundingClientRect().top; // Get the position of the section
                const offset = window.innerHeight / 4; // Desired offset (center of screen)
                window.scrollBy({
                    top: elementTop - offset, // Adjust scroll to center the section
                    behavior: 'smooth', // Smooth scroll
                });
            }
        }, 100);
    }

    const scrollToBookSection = () => {
        // Scroll back to the main section
        setTimeout(() => {
            if (bookRef.current) {
                const elementTop = bookRef.current.getBoundingClientRect().top; // Get the position of the section
                const offset = window.innerHeight / 4; // Desired offset (center of screen)
                window.scrollBy({
                    top: elementTop - offset, // Adjust scroll to center the section
                    behavior: 'smooth', // Smooth scroll
                });
            }
        }, 100);
    }

    const handleShowSample = () => {
        setShowSample(true)
        scrollToShowSampleSection()
    }

    const handleHideSample = () => {
        setShowSample(false)
        scrollToBookSection()
    }

    return (
        <div className="min-h-screen py-12 md:py-20 lg:py-32 px-1 md:px-2 lg:px-0 container mx-auto text-black dark:text-offWhite spacey-6 md:space-y-10">


            {/* book details displaly section*/}
            <div
                ref={bookRef}
                className=" p-6 lg:p-12 bg-white dark:bg-ash flex flex-col md:flex-row items-center justify-evenly gap-4  shadow-xl rounded-lg">

                {/* image container */}
                <div className="">
                    <img src={book?.image} alt="book image" className="h-80 rounded-md" />
                </div>

                {/* details container */}
                <div className="md:w-3/5 space-y-2">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-purple  text-xl lg:text-2xl font-semibold">{book?.name}</h1>
                            <h3 className="text-olive font-bold">
                                <span className="text-black text-xs mr-2">by</span>
                                {book?.author}
                            </h3>
                        </div>
                        <div className="bg-olive/10 px-4 py-4 rounded-full shadow-lg">
                            <img src={bookmark} className="w-6 h-6 lg:w-10 lg:h-10" />
                        </div>
                    </div>
                    <div>
                        <h3>{book?.category}</h3>
                        <Rating name="read-only" value={book?.rating} readOnly size="small" />
                    </div>
                    <p className="text-justify">
                        {trimmedDescription}...
                    </p>
                    <div className="mt-2 w-full flex items-center justify-between">
                        <div></div>
                        <button className="btn rounded-full px-6 border-none bg-olive text-lavender dark:bg-lavender dark:text-olive "
                            onClick={handleShowSample}>Read Sample</button>
                    </div>
                </div>


            </div>

            {/* read sample section */}
            <div
                ref={detailsRef}
                className={`${showSample ? 'mt-8 lg:mt-12 p-6 lg:p-12 rounded-lg bg-white dark:bg-ash transition-all duration-500' : 'hidden'} space-y-6`}>
                <div className="flex items-center justify-between">
                    <h1 className="text-purple text-2xl font-bold">{book?.name} </h1>
                    <button className="btn btn-sm rounded-full bg-lavender border-none text-red-400"
                        onClick={handleHideSample}
                    >Close</button>
                </div>
                <p className="text-justify">{book?.description}</p>
                <button className="btn bg-purple w-48 text-white rounded-lg border-none">
                    <NestedModal
                        bookName={book?.name}
                        bookCategory={book?.category}
                        bookId={book?._id}
                        image={book?.image}
                        quantity={book?.quantity}
                    />
                </button>
            </div>
        </div>
    );
};

export default BookDetails;