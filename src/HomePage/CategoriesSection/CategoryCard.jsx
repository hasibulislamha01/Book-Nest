import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
// Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS
AOS.init();

const CategoryCard = ({ category }) => {
    // console.log(category)
    // const {image, category} = category
    return (
        <div data-aos="flip-right" data-aos-duration="1000"  className="card glass card-side shadow-xl rounded-lg h-40 lg:h-56 bg-[#F5F5DC]">
            <figure><img className="h-full w-48 lg:w-80 object-cover" src={category?.image} alt="Movie" /></figure>
            <div className="mx-auto flex flex-col items-center justify-evenly ">
                <h2 className="card-title text-center text-xl lg:text-2xl text-[#6A5ACD]">{category?.category}</h2>
                
                <div className="">
                    <Link to={`/allBooks/categories/${category?.category}`} className="btn btn-sm lg:btn-md bg-[#6A5ACD] text-[#F5F5DC]">View Books</Link>
                </div>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
}

export default CategoryCard;