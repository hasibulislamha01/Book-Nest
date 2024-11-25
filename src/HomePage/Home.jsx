import Slider from "../Components/Slider";
import Bookfair from "./BookFairSection/Bookfair";
import Categories from "./CategoriesSection/Categories";
import Donate from "./DonateSection/Donate";

const Home = () => {
    return (
        <div className="pb-12 md:pb-24 lg:pb-40 bg-white dark:bg-neutral text-slate-700 dark:text-white">
            <Slider></Slider>
            
            <div className="container mx-auto">
                <Bookfair></Bookfair>
                <Categories></Categories>
                <Donate></Donate>
            </div>
        </div>
    );
};

export default Home;