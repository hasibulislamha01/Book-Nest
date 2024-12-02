import Skeleton from "react-loading-skeleton";

const lavender = "#f5f3ff"
const BookCardSkeleton = () => {
    return (
        <div>
            <Skeleton
                height={190}
                width={200}
                highlightColor={`${lavender}`}
            />
            <Skeleton height={10}/>
            <Skeleton height={30}/>
        </div>
    );
};

export default BookCardSkeleton;