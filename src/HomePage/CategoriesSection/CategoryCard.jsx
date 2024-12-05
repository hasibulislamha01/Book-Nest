import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
// Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect, useState } from "react";

// Initialize AOS
AOS.init();

const lText = 'A journey through a mystical realm where heroes, magic, and destiny collide.'
// const mText = text.split(' ')?.slice(0, 10)?.join(' ')
// const sText = text.split(' ')?.slice(0, 5)?.join(' ')
const mText = "A journey through a mystical realm where heroes, magic,"
const sText = "A journey through a mystical realm"
// console.log(mText, sText);

const CategoryCard = ({ category }) => {
    // console.log(category)
    // const {image, category} = category
    const [text, setText] = useState("");
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setText(sText);
            } else if (width >= 640 && width < 1024) {
                setText(mText);
            } else {
                setText(lText);
            }
        };

        handleResize(); // Run on initial render
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div data-aos="flip-right" data-aos-duration="1000" className="card card-side shadow-xl rounded-lg h-40 lg:h-56 bg-lavender dark:bg-charcoal flex items-center">

            {/* image container */}
            <div className="h-full w-2/5"><img className="h-full w-48 lg:w-80 object-cover rounded-l-lg" src={category?.image} alt="Movie" /></div>

            {/* catagory display container */}
            <div className="w-3/5 px-3 lg:px-6 lg:py-3 mx-auto flex flex-col items-center justify-evenly gap-3 lg:gap-5 h-fit">

                <div className="space-y-2">
                    <h2 className="w-full card-title text-left text-xl lg:text-2xl text-purple dark:text-lavender">{category?.category}</h2>
                    <p className="text-sm">
                        {
                            text
                        }
                    </p>
                </div>

                <div className="w-full flex items-center justify-between ">
                    <div></div>
                    <Link to={`/allBooks/categories/${category?.category}`} className="btn btn-xs  lg:btn-sm bg-purple text-lavender dark:bg-lavender dark:text-purple border-none">View Books</Link>
                </div>

            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
}

export default CategoryCard;