import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard/BookCard";
import { Toaster } from "react-hot-toast";
import FilterDropDown from "./FilterDropDown";
import BookList from "../../Components/BookList";
import { CiBoxList, CiGrid41 } from "react-icons/ci";
import BookCardSkeleton from "../../Components/UI/Skeleton/Skeleton";
import readSvg from '../../assets/readSvg.svg'

const AllBooks = () => {
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])
    const [isGridMode, setGridMode] = useState(true)
    useEffect(() => {
        axios('https://booknest-phi.vercel.app/books', { withCredentials: true })
            .then(response => {
                // console.log(response)
                setBooks(response?.data)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    console.log(books)

    const showFilteredData = (data) => {
        console.log(data)
        setQuery(data)
    }

    const displayList = () => {
        setGridMode(false)
    }

    const displayGrid = () => {
        setGridMode(true)
    }


    return (
        <div className="min-h-screen bg-white dark:bg-neutral text-charcoal dark:text-white py-20">
            <div className="container mx-auto">
                <div className="mb-12 flex justify-between px-2 lg:px-6 gap-4">
                    <div className="flex gap-2 lg:gap-6">
                        <FilterDropDown showFilteredData={showFilteredData} books={books}></FilterDropDown>
                        <h1 className="text-center text-md lg:text-xl">
                            Showing
                            <span className="mx-2">
                                {
                                    query === '' ? 'All'
                                        : 'Available'
                                }
                            </span>
                            Books
                        </h1>
                    </div>
                    <div className="flex items-center justify-center text-xl border border-purple/20 bg-lavender rounded-full shadow-2xl shadow-ash">

                        <div className={`h-full w-12 cursor-pointer flex items-center justify-center rounded-l-full transition-all duration-200 ${isGridMode ? 'bg-purple/80 text-lavender' : ''}`} onClick={() => displayGrid()}>
                            <CiGrid41 size={20} className="font-bold" />
                        </div>

                        <div className={`h-full w-12 cursor-pointer flex items-center justify-center rounded-r-full transition-all duration-200 ${isGridMode ? '' : 'bg-purple/80 text-lavender'}`} onClick={() => displayList()}>
                            <CiBoxList size={20} />
                        </div>

                    </div>
                </div>
                <Toaster></Toaster>
                {
                    isGridMode ?
                        <div id="gridContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center justify-stretch">

                            {
                                !loading ?

                                    books?.filter(book => {
                                        return query === '' ? book : book?.quantity > 0
                                    }).map(book =>
                                        <BookCard
                                            key={book._id}
                                            book={book}
                                            loading={loading}
                                            readSvg={readSvg}
                                        ></BookCard>
                                    ) :
                                    <>
                                        <BookCardSkeleton />
                                        <BookCardSkeleton />
                                        <BookCardSkeleton />
                                        <BookCardSkeleton />
                                    </>

                            }



                        </div>
                        :
                        <div id="listContainer" className="py-12">
                            <BookList books={books}></BookList>
                        </div>

                }


            </div>
        </div>

    );
};

export default AllBooks;