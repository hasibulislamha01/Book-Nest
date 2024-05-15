import axios from "axios";
import toast from "react-hot-toast";
import PropTypes from 'prop-types'

const BorrowedBooksCard = ({ book }) => {
    console.log(book)
    const handleReturn = () => {
        axios.delete(`http://localhost:5000/borrowedBooks/${book?.borrowerEmail}`)
        .then(response => {
            console.log(response.data)

            axios.patch(`https://booknest-phi.vercel.app/returned/${book?.bookId}`)
            .then(response=> {
                console.log(response.data)
                toast.success('Book Returned')
            }).catch(error=>{
                console.error(error.message)
                toast.error(error.message)
            })

            window.location.reload()
            toast.success('Thanks For Retuning the book')
        }) .catch(error => {
            console.error(error.message)
        })
        console.log('returning')
    }
    return (
        <div className="card bg-base-100 card-side shadow-xl rounded-lg h-40 lg:h-52 p-2 lg:p-4">
            <figure><img className="h-full object-contain" src={book?.image} alt="Movie" /></figure>
            <div className="mx-auto flex flex-col items-center justify-evenly">
                <h2 className="card-title text-center text-xl lg:text-2xl">{book?.bookName}</h2>
                <h3>Return Date: {book?.returnDate}</h3>
                <button onClick={handleReturn} className="btn">Return Book</button>
            </div>
        </div>
    );
};

BorrowedBooksCard.propTypes = {
    book: PropTypes.object
}

export default BorrowedBooksCard;