import React, { useState } from 'react';

// Define an interface for the dropdown options
interface Option {
    title: string
    path: string
}
  
// Define an interface for the dropdown props
interface DropdownProps {
    options: Option[]
    value: Option
    onChange: (option: Option) => void
}
  
// Define a custom component for the dropdown
export default function Dropdown({ options, value, onChange }: DropdownProps) {
    // Use state variables to store the visibility and the selected option
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(value)
  
    // Define a function to handle the click on the button
    const handleToggle = () => {
      setOpen(prev => !prev)
    }
  
    // Define a function to handle the click on an option
    const handleSelect = (option: Option) => {
      setSelected(option)
      onChange(option)
      setOpen(false)
    }
  
    // Return the JSX for the dropdown
    return (
      <div className='dropdown'>
        <button className='dropdown-button' onClick={handleToggle}>
          {selected.title}
        </button>
        <ul className={`dropdown-list ${open ? 'open' : ''}`}>
          {options.map(option => (
            <li
              key={option.title}
              className='dropdown-item'
              onClick={() => handleSelect(option)}
            >
              {option.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  