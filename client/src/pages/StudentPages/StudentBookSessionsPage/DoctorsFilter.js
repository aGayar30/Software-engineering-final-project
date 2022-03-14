import { useState } from 'react'
import Select from 'react-select'
import { DoctorsFilterContainer } from "./DoctorsFilter.styled";

const options = [
    { value: 'psychiatrist', label: 'Psychiatrist'},
    { value: 'life-coach', label: 'Life Coach'},
]

const DoctorsFilter = ({ selectedOption, setSelectionOption}) => {

    return (
        <DoctorsFilterContainer>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectionOption}
                options={options}
                placeholder="Types filter..."
                isClearable={true}
            />
        </DoctorsFilterContainer>
    )
}

export default DoctorsFilter
