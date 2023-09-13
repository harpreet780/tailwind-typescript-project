import React, { useEffect, useMemo, useState } from 'react'
import Header from '../../../components/header';
import Banner from '../../../components/banner';
import CommonLink from '../../../components/commonLink';
import Image from 'next/image';
import WorkCategoriesCard from '../../../components/workCategoriesCard';
import EventCard from '../../../components/EventCard';
import BlogCard from '../../../components/BlogCard';
import CarrerCard from '../../../components/carrerSection';
import Footer from '../../../components/footer';
import CopyRight from '../../../components/copyright';
import { BsChevronDown } from 'react-icons/bs';
import CustomDropdown from '../../../components/buttonDrowpdown';
import HighVelocityCard from '../../../components/highVelocitySection';


const Landing = () => {

    const [windowSize, setWindowSize] = useState<number>(0);

    const blogImg = useMemo(() => windowSize > 767 ? "/static/images/Community.jpg" : "/static/images/CommunityMobile.jpg", [windowSize]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const windowSize = window?.innerWidth;
            setWindowSize(windowSize);

            window.addEventListener("resize", () => {
                const windowSize = window?.innerWidth;
                setWindowSize(windowSize);
            });
        }
    }, []);

    return (
        <>
            <Header />
            <div className='relative'>
                <Banner />
                <div className="container-medium w-[95%] mx-auto desktop:w-full absolute bottom-[-20px] mobileMax:bottom-[-12%] left-1/2 transform -translate-x-1/2">
                    <HighVelocityCard />
                </div>
            </div>
            <div className='h-48 mobileMax:h-72' />
            <div className='p-4'>
                {/* Atlassian solutions */}
                <h3 className='text-center text-mdRange mobile:text-lg mb-6 font-medium'>Atlassian solutions are designed for all types of work</h3>
                <div className='items-center justify-center hidden mobileUp:flex'>
                    <button className='bg-secondary font-extrabold text-md rounded-full text-white p-6 mr-8 laptop:min-w-[300px]'>Work Management</button>
                    <button className='bg-lightBlue font-extrabold text-md rounded-full text-primary p-6 mr-8 laptop:min-w-[300px]'> IT Service Management </button>
                    <button className='bg-lightBlue font-extrabold text-md rounded-full text-primary p-6 laptop:min-w-[300px]'>  Agile and DevOps </button>
                </div>
                <div className='mobileUp:hidden flex justify-center'>
                    <CustomDropdown />
                </div>
                {/* work flow grid */}
                <div className='pt-20 container-sm mobileMax:pt-10'>
                    <div className='mobile:grid mobile:grid-cols-8 mobileMax:flex mobileMax:flex-wrap'>
                        <div className='mobile:col-span-3 p-2.5 mobileMax:order-2'>
                            <h3 className='text-md mb-3.5 leading-6 mobile:text-mdRange mobile:mb-6 mobile:leading-7 text-textbase font-medium mobile:pr-10'> Make work flow across teams while connecting back to company goals </h3>
                            <CommonLink title="Work differently, together" className={'flex items-center mb-6'} />
                            <div>
                                <WorkCategoriesCard
                                    imgFile={"/static/images/logos-confluence-icon-gradient-blue.svg"}
                                    text="Confluence"
                                    subText="Content collaboration"
                                />
                                <WorkCategoriesCard
                                    imgFile={"/static/images/trello-icon-gradient-blue.svg"}
                                    text="Trello"
                                    subText="Visual project management"
                                />
                                <WorkCategoriesCard
                                    imgFile={"/static/images/mark-gradient-blue-jira-work-management.svg"}
                                    text="Jira Work Management"
                                    subText="Business team collaboration"
                                />
                                <WorkCategoriesCard
                                    imgFile={"/static/images/logos-atlas-icon-gradient-blue.svg"}
                                    text="Atlas"
                                    subText="Teamwork directory"
                                />
                            </div>
                        </div>
                        <div className='w-full h-full mobile:col-span-5 p-2.5 mobileMax:order-1'>
                            <img src="/static/images/file.svg" alt="file" height="100%" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
            {/* companies joint */}
            <div className='linear pb-16'>
                <div className='container-medium'>
                    <div className='p-4'>
                        <h4 className="text-small mb-3.5 leading-5 mobile:text-md mobile:mb-6 mobile:leading-7 text-center text-textbase"> Join the 250,000+ companies that use our software to power team collaboration </h4>
                        <CommonLink title="See all customers" className={'flex items-center mb-6 justify-center underline-none'} />
                    </div>
                    <div className='flex items-center justify-between mx-auto flex-wrap p-4'>
                        <img src="/static/images/kiva.svg" alt="companies logo" className='p-5 box-border block m-auto' />
                        <img src="/static/images/twitter.svg" alt="companies logo" className='p-5 box-border block m-auto' />
                        <img src="/static/images/redfin.svg" alt="companies logo" className='p-5 box-border block m-auto' />
                        <img src="/static/images/Nasa.svg" alt="companies logo" className='p-5 box-border block m-auto max-w-[154px]' />
                        <img src="/static/images/audi.svg" alt="companies logo" className='p-5 box-border block m-auto' />
                        <img src="/static/images/castlight.svg" alt="companies logo" className='p-5 box-border block m-auto max-w-[280px]' />
                    </div>
                </div>
            </div>
            {/* Event Cards */}
            <div className='py-20 container-sm'>
                <div className='laptop:grid laptop:grid-cols-6'>
                    <div className="p-4 laptop:col-span-2 customSize:pr-10">
                        <EventCard eventName="Event" eventTitle=" Explore resources to unleash the potential of your team" />
                    </div>
                    <div className="p-4 laptop:col-span-4">
                        <BlogCard
                            src={blogImg}
                            title=" Atlassian Community "
                            subTitle="Connect globally and meet locally to get more out of our products."
                            showGrpBtn={true}
                            link={""}
                            style={{ backgroundColor: "#FFFAE5" }}
                        />
                    </div>
                </div>
                <div className='mobile:grid mobile:grid-cols-3'>
                    <div className="p-4 mobile:col-span-1">
                        <BlogCard
                            src="/static/images/Blog.jpg"
                            title="Work Life"
                            subTitle="Real-life advice, inspiration, and stories from the working world today."
                            link="Read our blog"
                            showGrpBtn={false}
                            style={{ backgroundColor: "#EAE6FF" }}
                        />
                    </div>
                    <div className="p-4 mobile:col-span-1">
                        <BlogCard
                            src="/static/images/Team Playbook.png"
                            title="Atlassian Team Playbook"
                            subTitle="Solve common team challenges with these group exercises."
                            link="Check team health"
                            showGrpBtn={false}
                            style={{ backgroundColor: "#E6FCFF" }}
                        />
                    </div>
                    <div className="p-4 mobile:col-span-1">
                        <BlogCard
                            src="/static/images/AgileCoach.png"
                            title="The Agile Coach"
                            subTitle="Atlassian's no-nonsense guide to agile development."
                            link="Visit our resources"
                            showGrpBtn={false}
                            style={{ backgroundColor: "#DEEBFF" }}
                        />
                    </div>
                </div>
                <div className='laptop:grid laptop:grid-cols-3'>
                    <div className="p-4 laptop:col-span-1">
                        <EventCard
                            eventName="TEAM ESSENTIALS"
                            eventTitle="Hear from today’s fearless builders and innovators."
                            eventLink={true}
                        />
                    </div>
                    <div className="m-4 laptop:col-span-1 card-shadow rounded overflow-hidden">
                        <img src="/static/images/ITSM.png" alt="team" />
                    </div>
                    <div className="m-4 laptop:col-span-1 card-shadow rounded overflow-hidden">
                        <img src="/static/images/Team_Event.png" alt="team" />
                    </div>
                </div>
            </div>
            {/* carrer card */}
            <div className='carrer-bg'>
                <div className='pt-20 container-sm mobile:pb-[96px] mobileMax:pt-0'>
                    <CarrerCard />
                </div>
                <div className='px-4 box-border hidden mobileMax:block'>
                    <img src="/static/images/CareersCenterMobile.svg" alt="carrer" className='w-full h-full' />
                </div>
            </div>
            {/* Footer */}
            <div className='bg-gray mobile:p-4'>
                <Footer />
            </div>
            <div className='bg-gray border-t border-borderColor'>
                <CopyRight />
            </div>
        </>
    )
}

export default Landing;