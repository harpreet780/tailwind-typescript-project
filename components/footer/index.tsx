import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='container-sm'>
              <div className='block laptop:hidden p-4 box-border'>
                    <a href="#">
                        <Image src="static/images/footer-logo.svg" alt="logo" width={130} height={32} />
                    </a>
                </div>
            <div className='flex justify-between items-start flex-wrap box-border'>
                <div className='hidden laptop:block p-4 box-border'>
                    <a href="#">
                        <Image src="static/images/footer-logo.svg" alt="logo" width={130} height={32} />
                    </a>
                </div>
                <div className='p-4 box-border'>
                    <h3 className='uppercase leading-5 font-extrabold text-xsmall mb-5 text-base'>Products</h3>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Jira Software</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Jira Align</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Jira Service Management</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Jira Product Discovery</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Confluence</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Trello</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Bitbucket</a></p>
                    <p className='mt-4'><a className='text-xsmall leading-5 text-primary underline-none hover:underline cursor-pointer'>View all products</a></p>
                </div>
                <div className='p-4 box-border'>
                    <h3 className='uppercase leading-5 font-extrabold text-xsmall mb-5 text-base'>RESOURCES</h3>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Technical Support</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Purchasing & licensing</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Atlassian Community</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Knowledge base</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Marketplace</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>My Account</a></p>
                    <p className='mt-4'><a className='text-xsmall leading-5 text-primary underline-none hover:underline cursor-pointer'>Create support ticket</a></p>
                </div>
                <div className='p-4 box-border'>
                    <h3 className='uppercase leading-5 font-extrabold text-xsmall mb-5 text-base'>EXPAND & LEARN</h3>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Partners</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Training & Certification</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Documentation</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Developer Resources</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Enterprise services</a></p>
                    <p className='mt-4'><a className='text-xsmall leading-5 text-primary underline-none hover:underline cursor-pointer'>View all resources</a></p>
                </div>
                <div className='p-4 box-border'>
                    <h3 className='uppercase leading-5 font-extrabold text-xsmall mb-5 text-base'>ABOUT ATLASSIAN</h3>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Company</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Careers</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Events</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Blogs</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Atlassian Foundation</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Investor Relations</a></p>
                    <p><a className='text-xsmall leading-5 text-base underline-none hover:underline cursor-pointer'>Trust & Security</a></p>
                    <p className='mt-4'><a className='text-xsmall leading-5 text-primary underline-none hover:underline cursor-pointer'>Contact us</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer