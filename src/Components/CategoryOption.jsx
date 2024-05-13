import Select, { defaultTheme } from 'react-select'

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


    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'bg-[#1d2b3a]',
            border: '1px solid #ffffff40',
            borderRadius: '5px',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'lightblue', // Change text color to red
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#1d2b3a' : 'lightblue',
            color: state.isSelected ? 'white' : 'black',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'lightblue',
        }),
    };

    return (
        <Select
            options={categoryOpt}
            className='w-full'
            placeholder='Subcategory of the Book'
            name="category"
            required="required"
            styles={customStyles}
        >
        </Select>
    );
};

export default CategoryOpt;