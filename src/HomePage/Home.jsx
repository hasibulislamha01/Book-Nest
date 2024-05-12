import Slider from "../Components/Slider";
import Categories from "./CategoriesSection/Categories";

const Home = () => {
    return (
        <div className="">
            <Slider></Slider>
            
            <div>
                <h1>Categories</h1>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;