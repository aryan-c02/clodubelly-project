import React, { useState } from 'react'

const SelectCategory = () => {

    const [selectedOption, setSelectedOption] = useState('');


    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='SelectCategoryContainer'>

            <div className='SelectCategoryOptionsWrapper'>
                <label></label>
                <select value={selectedOption} onChange={handleSelectChange}>

                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>


                <p>Selected option: {selectedOption}</p>
            </div>

        </div>
    )
}

export default SelectCategory;