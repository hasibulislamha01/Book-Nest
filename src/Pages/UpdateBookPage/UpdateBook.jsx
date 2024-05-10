import { useLoaderData } from "react-router-dom";
import RatingOption from "../../Components/RatingOption";
import CategoryOpt from "../../Components/CategoryOption";
import axios from "axios";

const UpdateBook = () => {
    const updatableBook = useLoaderData()
    console.log(updatableBook)
    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.bookName.value;
        const author = form.authorName.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const image = form.photo.value;
        const updatedBook = {
            name,
            author,
            category,
            rating,
            image,
        }
        console.log(updatedBook)

        axios.patch
    } 
    return (
        <div className="container mx-auto mt-12 px-60">
            <form onSubmit={handleUpdate} className="space-y-6">
                <div className="flex justify-between items-center gap-5">
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
                <div className="flex justify-center items-center gap-5 w-full">
                    <CategoryOpt></CategoryOpt>
                    <RatingOption></RatingOption>
                </div>
                <div className="mx-auto input-container" id="big-input">
                    <input
                        className="w-full"
                        type="text"
                        name="photo"
                        required="required"
                    />
                    <label className="label">Book Photo</label>
                </div>
                <button type="submit" className="btn btn-block">Update Now</button>
            </form>
        </div>
    );
};

export default UpdateBook;