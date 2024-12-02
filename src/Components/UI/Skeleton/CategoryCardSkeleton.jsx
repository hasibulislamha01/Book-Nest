import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const lavender= "#f5f3ff"

const CategoryCardSkeleton = () => {
    return (
        <Skeleton
            highlightColor={`${lavender}`}
            height={100}
        />
    );
};

export default CategoryCardSkeleton;