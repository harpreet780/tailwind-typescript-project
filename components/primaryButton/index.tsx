import React from 'react';

interface props {
  title: String;
  style:  React.CSSProperties;
}

const PrimaryButton = (props: props) => {
  return (
    <button className='px-4 bg-primary text-white min-h-[32px] rounded text-xsmall font-extrabold hover:bg-primaryHover tracking-wider' style={props.style}>
        {props.title}
    </button>
  )
}

export default PrimaryButton