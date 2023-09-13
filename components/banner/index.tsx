import React, { useState } from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import { MdClose } from "react-icons/md"


const videoUrl = "https://youtu.be/adf9jUIHKgI?si=peeah2EsIWBU7tfN"
const Banner = () => {
  const [isOpenVideo, setOpenVideo] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className='banner-section flex items-center justify-center p-4 relative'>
        <div>
          <h2 className='text-white text-large leading-tight mb-2 mobile:mb-6 mobileMax:text-lg font-normal mx-auto max-w-[500px] mobileMax:text-center'>Impossible alone.
            <span className='block font-bold mobile:ml-20'>
              Possible together.
            </span>
          </h2>
          <p className='text-white text-md mobile:text-mdRange mb-4 text-center mobileMax:text-small'>See how collaboration makes the impossible, possible.</p>
          <button className='block mx-auto mb-5' onClick={() => setModalIsOpen(true)}>
            <div className='flex items-center'>
              <div className='w-[22px] h-[22px] text-white rounded-full bg-naviBlue mr-2'>
                <BsFillPlayCircleFill className="w-full h-full" />
              </div>
             <p className='text-white text-small mt-1'> Play video</p>
            </div>
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        id="custom-video"
      >
        <button onClick={closeModal} className='text-white text-baselg absolute right-0 top-2 tabLg:top-[-4px] tabLg:right-3'><MdClose /></button>
        <ReactPlayer
          url={videoUrl}
          playing={modalIsOpen}
          controls
          width="100%"
          height="100%"
          id="video-play"
        />
      </Modal>
    </>
  )
}

export default Banner;