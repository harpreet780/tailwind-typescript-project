import React from 'react'
import PrimaryButton from '../primaryButton'

const HighVelocityCard = () => {
    return (
            <div className="flex items-center justify-between bg-yellow tabletRange:p-4 mobileMax:pb-8 mobileMax:px-4 mobileMax:block">
                <div className="flex items-center justify-center mobileMax:my-5 mobile:w-[25%] mobileMax:mx-auto mobileMax:w-[200px]">
                    <div className="mobileMax:pt-2 mobileMax:w-full mobileMax:mx-auto">
                        <img
                            src="static/images/high-velocity.svg"
                            alt="logo high velocity"
                            className="mobileMax:block mobileMax:mx-auto mobileMax:w-full mobileMax:pt-12"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between desktop:w-[55%] laptop:w-[50%] tabletRange:w-[70%] mobileMax:w-full mobileMax:block mobileMax:mt-6">
                    <div className="mr-2.5 mobileMax:my-3 mobileMax:mr-0">
                        <p className="font-semibold text-naviBlue txt-small">In person and on demand</p>
                        <p className='text-naviBlue txt-small'>Meet us on our home turf in Sydney, Australia in November for our biggest <b>service management</b> event of the year.</p>
                    </div>
                    <div className="mobileMax:flex mobileMax:justify-center" >
                        <PrimaryButton title="Get your ticket" style={{minWidth: 135, padding: "4px 10px"}}/>
                    </div>
                </div>

                <div className="md:w-1/4 tabLg:hidden block">
                    <div className="">
                        <img
                            src="static/images/sydney.png"
                            alt="sydney"
                        />
                    </div>
                </div>
        </div>

    )
}

export default HighVelocityCard;