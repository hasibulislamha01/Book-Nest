import axios from "axios";
import CategoryOpt from "../../Components/CategoryOption";
import RatingOption from "../../Components/RatingOption";

const AddBooks = () => {

    const handleAddBooks = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.bookName.value;
        const author = form.authorName.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const image = form.photo.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const contents = form.contents.value;
        const bookData = {
            name,
            author,
            category,
            rating,
            image,
            description,
            quantity,
            contents

        }
        console.log(bookData)

        // adding the book to backend
        const url = 'http://localhost:5000/books'
        axios.post(url, bookData)
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="container mx-auto mt-12 lg:px-60">
            <form onSubmit={handleAddBooks} className="space-y-6">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="input-container">
                        <input
                            type="text"
                            name="bookName"
                            required="required"
                        />
                        <span className="label">Book Name</span>
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            name="authorName"
                            required="required"
                        />
                        <span className="label">Author Name</span>
                    </div>

                </div>
                <div className="px-6 lg:px-0 flex flex-col lg:flex-row justify-center items-center gap-5 w-full">
                    <CategoryOpt></CategoryOpt>
                    <RatingOption></RatingOption>
                </div>
                <div className="input-container" id="big-input">
                    <textarea
                        id="big-input big-height"
                        name="description"
                        required="required"
                    ></textarea>
                    <span className="label">Short Description</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="mx-auto input-container">
                        <input
                            className="w-full"
                            type="text"
                            name="photo"
                            required="required"
                        />
                        <label className="label">Book Photo</label>
                    </div>
                    <div className="mx-auto input-container">
                        <input
                            className="w-full"
                            type="number"
                            name="quantity"
                            required="required"
                        />
                        <label className="label">Quantity</label>
                    </div>
                </div>
                <div className="input-container" id="big-input">
                    <textarea
                        name="contents"
                        id="big-input big-height"
                        required="required"
                    ></textarea>
                    <span className="label">Add a paragraph for sample readings</span>
                </div>
                <button type="submit" className="btn btn-block">Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;