import Categories from "./CategoriesSection/Categories";

const Home = () => {
    return (
        <div>
            <div className="p-32 text-center bg-rose-100 text-5xl font-semibold">
                Home Sweet Home

            </div>
            <div>
                <h1>Categories</h1>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;