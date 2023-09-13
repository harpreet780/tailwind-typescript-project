import React from 'react'
import PrimaryButton from '../primaryButton'

const CarrerCard = () => {
    return (
        <div className='mobile:w-[500px] mx-auto mobile:pb-10 px-3.5'>
            <h5 className='mb-2.5 text-small leading-7 text-secondary mobile:mb-4 uppercase font-extrabold text-center'>Carrers</h5>
            <h2 className='mb-6 text-baselg leading-6 text-textbase mobile:text-large mobile:leading-[50px] font-medium text-center'>
                We can’t do it alone
            </h2>
            <p className='text-md leading-6 mb-6 text-base  mobile:leading-[28px] text-center'>
                We have an ambitious road ahead, and we’re looking for people to join our global team to help shape the future of Atlassian.
            </p>
            <PrimaryButton title="Join the team" style={{ height: 40, display: "block", margin: "auto" }} />
        </div>
    )
}

export default CarrerCard