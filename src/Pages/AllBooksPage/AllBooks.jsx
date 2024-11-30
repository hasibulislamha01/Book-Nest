import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Toaster } from "react-hot-toast";
import FilterDropDown from "./FilterDropDown";
import BookList from "../../Components/BookList";
import { CiBoxList, CiGrid41 } from "react-icons/ci";
import LoadingSkeleton from "../../Components/Skeleton";


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

    // js for toggle view

    const displayList = () => {
        setGridMode(false)
    }

    const displayGrid = () => {
        setGridMode(true)
    }


    return (
        <div className="min-h-screen bg-white dark:bg-neutral text-charcoal dark:text-white pt-20">
            <div className="container mx-auto  border-2 border-rose-500">
                <div className="mb-12 flex justify-between px-2 lg:px-6 gap-4">
                    <div className="flex gap-2 lg:gap-6">
                        <FilterDropDown showFilteredData={showFilteredData} books={books}></FilterDropDown>
                        <h1 className="text-center text-md lg:text-3xl">
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
                    <div className="flex justify-end gap-8 text-xl">
                        <p className={isGridMode ? 'hidden' : 'inline-flex'} onClick={displayGrid}><CiGrid41 /></p>
                        <p className={isGridMode ? 'inline-flex' : 'hidden'} onClick={displayList}><CiBoxList /></p>
                    </div>
                </div>
                <Toaster></Toaster>
                {
                    isGridMode ?
                        <div id="gridContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center justify-stretch">

                            {
                                !loading ?

                                    books?.filter(book => {
                                        return query === '' ? book : book?.quantity > 0
                                    }).map(book =>
                                        <BookCard
                                            key={book._id}
                                            book={book}
                                            loading={loading}
                                        ></BookCard>
                                    ) :
                                    <LoadingSkeleton />

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