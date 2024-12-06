
const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 text-lavender">
            <h1 className="text-5xl md:text-7xl lg:text-9xl">404</h1>
            <p>Looks like you are lost.</p>
            <button className="btn btn-sm w-60 bg-lavender text-purple">Back to track</button>
        </div>
    );
};

export default NotFound;