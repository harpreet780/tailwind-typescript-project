import React from 'react';
import ModalVideo from 'react-modal-video';

const VideoPlayer = () => {
    return (
        <div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
            />
        </div>
    )
}

export default VideoPlayer;