import { useState } from 'react';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';

const CustomDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block w-full">
            <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-small font-medium text-white bg-secondary rounded-full focus:outline-none"
                id="dropdown-menu-button"
                aria-expanded="true"
                aria-haspopup="true"
            >
                <p className='flex justify-between items-center w-full'>
                    Work Management
                    {!isOpen ? <BiSolidChevronDown className="block text-white" /> : <BiSolidChevronUp className="block text-white" />}
                </p>
            </button>

            {isOpen && (
                <div className="origin-top-right absolute w-full py-2 bg-lightBlue border-gray-300 rounded-md shadow-lg">
                    <a
                        href="#"
                        className="block px-4 py-2 text-small text-primary underline"
                    >
                        Work Management
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-small text-primary underline"
                    >
                        IT Service Management
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-small text-primary underline"
                    >
                        Agile and DevOps
                    </a>
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
