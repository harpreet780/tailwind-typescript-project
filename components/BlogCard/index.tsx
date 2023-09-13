import React from 'react'

interface props {
    src: String;
    style:  React.CSSProperties;
    showGrpBtn: boolean;
    title: String;
    subTitle: String;
    link: String;
}

const BlogCard = (props: props) => {
    return (
        <div className='card-shadow rounded overflow-hidden flex flex-col items-center h-full' style={props.style}>
            <div className={props.showGrpBtn ? "h-3/6 mobile:h-[260px] laptop:h-[237px] w-full" : "w-full mobileMax:h-full mobile:min-h-[157px] laptop:min-h-[240px]"}>
                <img src={props.src} alt="event" className='w-full h-full' />
            </div>

            <div className='p-8 pt-3.5 h-full flex flex-col items-center justify-between'>
                <div>
                    <h3 className='text-md text-textbase mb-3.5 mobile:mb-2.5 mobile:text-mdRange text-center font-medium'>{props.title}</h3>
                    <p className="text-small text-naviBlue mb-3.5 mobile:mb-6 text-center tracking-wider">{props.subTitle}</p>
                </div>
                {props.showGrpBtn === true ?
                    <>
                        <div className='flex items-center justify-evenly w-full'>
                            <div>
                                <a className='text-primary text-small leading-5 cursor-pointer underline-none tracking-wider'> Search the forum </a>
                            </div>
                            <div>
                                <a className='text-primary text-small leading-5 cursor-pointer underline-none tracking-wider'> Join our community </a>
                            </div>
                        </div>
                    </>
                    :
                    <div className='flex items-center justify-center'>
                        <a className='text-primary block  mx-auto cursor-pointer text-small leading-5 cursor-pointer underline-none'>{props.link}</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogCard;