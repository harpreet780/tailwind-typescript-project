import React, { useState } from 'react'
import { PiCaretDownLight, PiCaretUpLight } from 'react-icons/pi';

interface props {
    dropdownTitle: String;
    dropdownList1: String;
    dropdownList2: String;
    dropdownList3: String;
}

const HeaderDropdown = (props: props) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    return (
        <>
            <a className="text-small text-base px-[14px] py-[4px] mr-0.5 cursor-pointer hover:bg-hoverbg rounded flex items-center relative" onClick={toggleDropdown}>
                {props.dropdownTitle}
                {!isOpenDropdown ? <PiCaretDownLight className="block text-primary ml-1.5 text-xsmall" /> : <PiCaretUpLight className="block text-primary ml-1.5 text-xsmall" />}
                {isOpenDropdown && (
                    <div className="absolute z-10 top-10 min-w-[220px] py-2 bg-hoverbg border-gray-300 rounded-md shadow-lg">
                        <a
                            href="#"
                            className="block px-4 py-1 text-small text-base hover:underline cursor-pointer"
                        >
                            {props.dropdownList1}
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-1 text-small text-base hover:underline cursor-pointer"
                        >
                            {props.dropdownList2}
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-1 text-small text-base hover:underline cursor-pointer"
                        >
                            {props.dropdownList3}
                        </a>
                    </div>
                )}
            </a>
        </>
    )
}

export default HeaderDropdown