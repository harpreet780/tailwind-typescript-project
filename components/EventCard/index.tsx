import React from 'react'

interface props {
  title: String;
  className: String;
  eventLink: boolean;
  eventName: String;
  eventTitle: String;
}

const EventCard = (props: props) => {
  return (
    <div>
        <h5 className='mb-2.5 text-small leading-7 text-secondary mobile:mb-4 uppercase font-black tracking-wider'>{props.eventName}</h5>
        <h2 className='mb-2.5 text-md leading-6 mobile:mb-6 text-textbase mobile:text-lg mobile:leading-[50px] font-medium'>{props.eventTitle}</h2>
        {props.eventLink && <a className='text-primary block  mx-auto cursor-pointer text-small leading-5 cursor-pointer underline-none'>Learn more</a>}
    </div>
  )
}

export default EventCard;