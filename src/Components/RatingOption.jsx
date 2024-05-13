import Select from 'react-select'

const RatingOption = () => {

    const ratingOpt = [
        { value: '0', label: '0' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
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
            options={ratingOpt}
            className='w-full'
            placeholder='Rating of the Book'
            name="rating"
            required="required"
            styles={customStyles}
        >
        </Select>
    ); 
};

export default RatingOption;