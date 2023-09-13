import Image from 'next/image';
import React, { useState } from 'react'
import PrimaryButton from '../primaryButton';
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { MdClose } from 'react-icons/md';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                            <a className="text-small text-base px-[14px] py-[4px] mr-0.5 cursor-pointer hover:bg-hoverbg rounded">
                                Products
                            </a>
                            <a className="text-small text-base px-[14px] py-[4px] mr-0.5 cursor-pointer hover:bg-hoverbg rounded">
                                Solutions
                            </a>
                            <a className="text-small text-base px-[14px] py-[4px] mr-0.5 cursor-pointer hover:bg-hoverbg rounded">
                                Resources
                            </a>
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
                        {isOpen ? <MdClose className="text-lg text-icon" onClick={() => toggle()} /> : <FaBars onClick={() => toggle()} className="text-base text-icon"/>}
                    </div>
                </div>
            </div>
            {isOpen && <div className='mt-0.5 block customSize:hidden'>
                <div className='flex items-center justify-between px-5 pb-4'>
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
                </a>
                <a className="text-small text-base px-5 py-[8px] mr-0.5 cursor-pointer border-b border-borderColor block">
                    Solutions
                </a>
                <a className="text-small text-base px-5 py-[8px] mr-0.5 cursor-pointer block">
                    Resources
                </a>
            </div>
            }
        </div >
    )
}

export default Header