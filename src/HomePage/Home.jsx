import Slider from "../Components/Slider";
import Bookfair from "./BookFairSection/Bookfair";
import Categories from "./CategoriesSection/Categories";

const Home = () => {
    return (
        <div className="">
            <Slider></Slider>
            
            <div className="container mx-auto">
                <Bookfair></Bookfair>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;