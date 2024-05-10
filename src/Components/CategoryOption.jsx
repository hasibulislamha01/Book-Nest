import Select from 'react-select'

const CategoryOpt = () => {

    const categoryOpt = [
        { value: 'Novel', label: 'Novel' },
        { value: 'Sci-Fi', label: 'Sci-Fi' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Coming-of-Age', label: 'Coming-of-Age' },
        { value: 'Fantasy', label: 'Fantasy' },
        { value: 'Mystery', label: 'Mystery' },
        { value: 'History', label: 'History' },
        { value: 'Thriller', label: 'Thriller' },
    ]

    return (
        <Select
            options={categoryOpt}
            className='w-full'
            placeholder='Subcategory of the Book'
            name="category"
            required="required"
        >
        </Select>
    );
};

export default CategoryOpt;