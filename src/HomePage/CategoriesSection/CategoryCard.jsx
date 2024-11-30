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
        <div data-aos="flip-right" data-aos-duration="1000" className="card glass card-side shadow-xl rounded-lg h-40 lg:h-56 bg-lavender dark:bg-charcoal flex items-center ">

            <div className="h-full w-2/5"><img className="h-full w-48 lg:w-80 object-cover rounded-l-lg" src={category?.image} alt="Movie" /></div>

            <div className="w-3/5 px-6 py-3 mx-auto flex flex-col items-center justify-evenly gap-5">
                
                <div className="space-y-2">
                    <h2 className="w-full card-title text-left text-xl lg:text-2xl text-purple dark:text-lavender">{category?.category}</h2>
                    <p className="text-sm">
                        A journey through a mystical realm where heroes, magic, and destiny collide.
                    </p>
                </div>
                
                <div className="w-full flex items-center justify-between ">
                    <div></div>
                    <Link to={`/allBooks/categories/${category?.category}`} className="btn btn-xs  md:btn-sm bg-purple text-lavender dark:bg-lavender dark:text-purple border-none">View Books</Link>
                </div>

            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
}

export default CategoryCard;