
const BorrowedBooksCard = ({ book }) => {
    return (
        <div className="card bg-base-100 card-side shadow-xl rounded-lg h-40 lg:h-52 p-2 lg:p-4">
            <figure><img className="h-full object-contain" src={book?.image} alt="Movie" /></figure>
            <div className="mx-auto flex flex-col items-center justify-evenly">
                <h2 className="card-title text-center text-xl lg:text-2xl">{book?.bookName}</h2>
                <h3>Return Date: {book?.returnDate}</h3>
                <button className="btn">Return Book</button>
            </div>
        </div>
    );
};

export default BorrowedBooksCard;