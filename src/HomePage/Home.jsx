import Slider from "../Components/Slider";
import Categories from "./CategoriesSection/Categories";

const Home = () => {
    return (
        <div className="">
            <Slider></Slider>
            
            <div className="container mx-auto">
                
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;