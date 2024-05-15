import { useLoaderData, useNavigate } from "react-router-dom";
import RatingOption from "../../Components/RatingOption";
import CategoryOpt from "../../Components/CategoryOption";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const UpdateBook = () => {

    const navigate = useNavigate()
    
    const updatableBook = useLoaderData()
    const updatableBookId = updatableBook[0]?._id;
    console.log(updatableBookId)
    
    const handleUpdate = async (event) => {
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

        const url = `https://booknest-phi.vercel.app/books/${updatableBookId}`;

        axios.patch(url, updatedBook)
            .then(response => {
                console.log('data updated Successfully', response.data)
                toast.success('Data updated Successfully')
                navigate('/books')
            })
            .catch(error => {
                console.error('error while updating data', error)
                toast.error('error.message')
            })

    }
    return (
        <div className="py-24 md:px-10 lg:px-60 update-bg">
            <Toaster></Toaster>
            <h1 className="text-center text-3xl mb-8 text-white font-bold">Update Book</h1>
            <form onSubmit={handleUpdate} className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
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
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full ">
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