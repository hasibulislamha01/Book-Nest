import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Toaster } from "react-hot-toast";


const AllBooks = () => {
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


    return (
        <div className="container mx-auto mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Toaster></Toaster>
            {
                books?.map(book =>
                    <BookCard 
                        key={book._id}
                        book={book}
                    ></BookCard>
                )
            }
        </div>
    );
};

export default AllBooks;