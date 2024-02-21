import Link from 'next/link';
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
    isActive: (path: string) => boolean
}
  
// Define a custom component for the dropdown
export default function Dropdown({ options, value, onChange, isActive }: DropdownProps) {
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
  
    return (
        <>
        <div className='dropdown relative'>
          <button
            className={`dropdown-button rounded-lg border-2 border-brand-green-dark py-2 px-4 text-lg mx-2
                      ${
                        isActive(selected.path)
                          ? 'bg-brand-green-light text-black'
                          : 'text-brand-green-light'
                      }
                      transition duration-300 ease-in-out
                      hover:bg-brand-green-light hover:text-black`}
            onClick={handleToggle}
          >
            Membership
          </button>
          <ul
            className={`dropdown-list absolute top-full left-0 right-0 rounded-lg border-2 border-brand-green-dark py-2 px-2 text-md mx-2 list-none text-left bg-white z-20 ${
              open ? 'block' : 'hidden'
            }`}
          >
            {options.map(option => (
              <li
                key={option.title}
                className='dropdown-item py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-200 rounded'
                onClick={() => handleSelect(option)}
              >
                <Link href={option.path}>
                  {option.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        </>
      )
  }
  