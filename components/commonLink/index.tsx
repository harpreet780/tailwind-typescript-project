import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

interface props {
    title: String;
    className: String;
}

const CommonLink = (props: props) => {

    return (
        <div className={`${props.className} hover-child-link`}>
            <a className='text-primary text-xsmall transition duration-300 font-medium tracking-wider ease-in-out hover:underline hover:underline-primary cursor-pointer mr-1'>
                {props.title}
            </a>
            <HiArrowNarrowRight className="text-primary text-xsmall transition duration-500" />
        </div>
    )
}

export default CommonLink;