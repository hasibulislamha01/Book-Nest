import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Toaster } from "react-hot-toast";
import FilterDropDown from "./FilterDropDown";
import BookList from "../../Components/BookList";
import { CiBoxList, CiGrid41 } from "react-icons/ci";


const AllBooks = () => {
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])
    const [isGridMode, setGridMode] = useState(true)
    useEffect(() => {
        axios('http://localhost:5000/books')
            .then(response => {
                // console.log(response)
                setBooks(response?.data)
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
        <div className="container mx-auto pt-20 ibm">
            <div className="mb-12 flex items-center justify-between gap-4 ">
                <div className="flex items-center gap-8">
                    <FilterDropDown showFilteredData={showFilteredData} books={books}></FilterDropDown>
                    <h1 className="text-center text-xl lg:text-3xl">
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
                    <p onClick={displayGrid}><CiGrid41 /></p>
                    <p onClick={displayList}><CiBoxList /></p>
                </div>
            </div>
            <Toaster></Toaster>
            {
                isGridMode ?
                    <div id="gridContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

                        {
                            books?.filter(book => {
                                return query === '' ? book : book?.quantity > 0
                            }).map(book =>
                                <BookCard
                                    key={book._id}
                                    book={book}

                                ></BookCard>
                            )
                        }
                    </div>
                    :
                    <div id="listContainer" className="py-12">
                        <BookList books={books}></BookList>
                    </div>

            }


        </div>
    );
};

export default AllBooks;