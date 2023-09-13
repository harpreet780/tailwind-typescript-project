import Image from 'next/image';
import React, { useState } from 'react'
import PrimaryButton from '../primaryButton';
import { BiSearch, BiSolidChevronRight } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { MdClose } from 'react-icons/md';
import HeaderDropdown from './headerDropdown';

interface props {
    isOpen: boolean;
    toggle: (e: any) => void;
}

const Header = (props:props) => {
    const {isOpen, toggle  } = props;

    return (
        <div className='bg-white'>
            <div className='container-sm px-4 customSize:px-5'>
                <div className='flex items-center justify-between w-full min-h-[56px] customSize:min-h-[72px]'>
                    <div className='flex items-center'>
                        <a href="#">
                            <Image src="static/images/logo.svg" alt="logo" width={193} height={93} className='mr-3 hidden customSize:block' />
                            <Image src="static/images/logo.svg" alt="logo" width={161} height={20} className='mr-3 block customSize:hidden' />
                        </a>
                        <div className='mt-0.5 customSize:flex items-center hidden'>
                            <HeaderDropdown dropdownTitle = "Products" dropdownList1="Trello" dropdownList2="Jira Work Management" dropdownList3="Atlas"/>
                            <HeaderDropdown dropdownTitle = "Solutions" dropdownList1="Small Business" dropdownList2="Marketing" dropdownList3="Retail"/>
                            <HeaderDropdown dropdownTitle = "Resources" dropdownList1="Enterprise Service" dropdownList2="Atlassian Support" dropdownList3="Developer Resources"/>
                        </div>
                    </div>
                    <div className='customSize:flex items-center hidden'>
                        <BiSearch className="mr-1.5 text-medium rounded-full text-[#636870] cursor-pointer hover:bg-hoverbg w-7 h-7 p-0.5" />
                        <PrimaryButton title="Try now" />
                        <div className='borderContent' />
                        <a href="#" className='text-primary min-h-[36px] px-2 flex items-center justify-center rounded text-xsmall font-bold hover:bg-hoverbg rounded'>
                            Sign in
                        </a>
                    </div>
                    <div className='flex items-center customSize:hidden'>
                        {!isOpen && <BiSearch className="mr-2.5 text-medium rounded-full text-icon cursor-pointer font-medium w-[31px] h-[31px] hover:bg-hoverbg  p-0.5" />}
                        {isOpen ? <MdClose className="text-baselg text-icon" onClick={toggle} /> : <FaBars onClick={toggle} className="text-base text-icon"/>}
                    </div>
                </div>
            </div>
            {isOpen && <div className='mt-0.5 block customSize:hidden border-t border-borderColor'>
                <div className='flex items-center justify-between p-5 pb-4'>
                    <div>
                        <PrimaryButton title="Try now" />
                    </div>
                    <div>
                        <a href="#" className='text-primary min-h-[36px] px-2 flex items-center font-bold justify-center rounded text-xsmall hover:bg-hoverbg rounded'>
                            Sign in
                        </a>
                    </div>
                </div>
                <a className="text-small text-base px-5 py-[8px] mr-0.5 cursor-pointer border-b border-borderColor block">
                    Products 
                    <BiSolidChevronRight className="text-xsmall ml-5 text-base inline" />
                </a>
                <a className="text-small text-base px-5 py-[8px] mr-0.5 cursor-pointer border-b border-borderColor block">
                    Solutions
                    <BiSolidChevronRight className="text-xsmall ml-5 text-base inline" />
                </a>
                <a className="text-small text-base px-5 py-[8px] mr-0.5 cursor-pointer block border-b border-borderColor ">
                    Resources
                    <BiSolidChevronRight className="text-xsmall ml-5 text-base inline" />
                </a>
            </div>
            }
        </div >
    )
}

export default Header