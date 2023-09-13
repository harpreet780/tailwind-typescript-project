import Image from 'next/image';
import React from 'react'


interface props {
  imgFile: String;
  text: String;
  subText: String;
}

const WorkCategoriesCard = (props: props) => {
  return (
    <div className='flex items-center mb-9 mt-6 cursor-pointer text-black transition duration-300 hover:text-primary workCard-onHover'>
        <div className='w-[72px] h-[72px] flex items-center justify-center bg-hoverbg rounded work-wrap'>
          <img src={props.imgFile} alt="option-img" className='w-[36px] h-[36px]'/>
        </div>
        <div className='ml-6 flex-1'>
            <p className='text-small leading-6 font-bold tracking-wide'>{props.text}</p>
            <p className='text-small leading-6 text-small text-black tracking-wide'>{props.subText}</p>
        </div>
    </div>
  )
}

export default WorkCategoriesCard;