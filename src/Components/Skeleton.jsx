import { Skeleton, Stack } from '@mui/material'
const LoadingSkeleton = () => {
    return (
        <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={210} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={210} />
            {/* For other variants, adjust the size with `width` and `height` */}
            {/* <Skeleton variant="circular" width={40} height={40} /> */}
            <Skeleton variant="rounded" width={210} height={60} />
        </Stack>
    );
};

export default LoadingSkeleton;