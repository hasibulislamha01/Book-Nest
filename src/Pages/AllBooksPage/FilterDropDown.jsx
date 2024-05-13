import { Dropdown } from 'antd';
import { IoFilterCircleOutline } from "react-icons/io5";

const FilterDropDown = ({showFilteredData}) => {

    


    const items = [
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer"    onClick={()=>showFilteredData('')}>
                    All Books
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer"  onClick={()=>showFilteredData('text')}>
                    AvailAble Books
                </a>
            ),
            
        },

    ];



    return (
        <div className='inline-flex'>
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a>
                    <button className='text-3xl'><IoFilterCircleOutline /></button>
                </a>
            </Dropdown>
        </div>
    );
};

export default FilterDropDown;