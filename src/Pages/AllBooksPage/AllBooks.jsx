import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Toaster } from "react-hot-toast";
import FilterDropDown from "./FilterDropDown";


const AllBooks = () => {
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])
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


    return (
        <div className="container mx-auto pt-20 ibm">
            <div className="mb-6 flex items-center justify-center gap-4">
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
            <Toaster></Toaster>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                
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
        </div>
    );
};

export default AllBooks;