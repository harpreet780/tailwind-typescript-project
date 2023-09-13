import React from 'react';
import { AiFillFacebook } from "react-icons/ai"
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

const CopyRight = () => {
    return (
        <div className='container-sm p-4'>
            <div className='flex items-center justify-between flex-wrap'>
                <div className='flex items-center flex-wrap mobileMax:flex-col'>
                    <div className='dribble-dropdown flex items-center mobileMax:w-full mobileMax:mb-3'>
                        <img src="static/images/dribble.svg" alt="globe" className='h-5 w-5 block mr-2  cursor-pointer' />
                        <a className='text-xsmall leading-5 text-base underline-none hover:underline relative block mr-14 mobileMax:mr-0 cursor-pointer'>English</a>
                    </div>
                   <a className='text-xsmall leading-5 text-base underline-none hover:underline block mr-[30px] mobileMax:w-full mobileMax:mb-3 mobileMax:mr-0 cursor-pointer'>Privacy policy</a>
                    <a className='text-xsmall leading-5 text-base underline-none hover:underline block mr-[30px] mobileMax:w-full mobileMax:mb-3 mobileMax:mr-0 cursor-pointer'>Notice at Collection
                    </a>
                    <a className='text-xsmall leading-5 text-base underline-none hover:underline block mr-[30px] mobileMax:w-full mobileMax:mb-3 mobileMax:mr-0 cursor-pointer'>Terms</a>
                    <a className='text-xsmall leading-5 text-base underline-none hover:underline block mr-[60px] mobileMax:w-full mobileMax:mb-3 mobileMax:mr-0 cursor-pointer'>Impressum</a>
                    <a className='text-xsmall leading-5 text-base underline-none block mobileMax:w-full mobileMax:mb-3 mobileMax:mr-0'>Copyright © 2023 Atlassian</a>
                </div>
                <div className='flex items-center ml-2 tabMax:justify-end tabMax:w-full'>
                    <AiFillFacebook className="text-facebook  w-7 h-7 medium:w-[44px] medium:h-[40px] mr-1 mobileMax:mr-2.5 cursor-pointer" />
                    <BsTwitter className="text-twitter w-6 h-6 medium:w-[32px] medium:h-[32px] mr-1 mobileMax:mr-2.5 cursor-pointer"/>
                    <BsLinkedin className="text-linkedin w-6 h-6  medium:w-[32px] medium:h-[32px] mr-1 mobileMax:mr-2.5 cursor-pointer"/>
                    <img src="static/images/youtube.svg" alt="youtube" className=' w-6 h-6 medium:w-[32px] medium:h-[32px] mobileMax:mr-2.5 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default CopyRight