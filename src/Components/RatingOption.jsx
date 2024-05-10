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


    return (
        <Select
            options={ratingOpt}
            className='w-full'
            placeholder='Rating of the Book'
            name="rating"
            required="required"
        >
        </Select>
    ); 
};

export default RatingOption;