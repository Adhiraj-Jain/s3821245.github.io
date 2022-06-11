import React, { useRef } from 'react';
import '../../Stylesheets/Popup.css';
import { MdClose } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';

const Popup = ({ trigger, setShowModal, projectDetails }) => {
    const modalRef = useRef();
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const animation = useSpring({
        config: {
            duration: 350
        },
        opacity: trigger ? 1 : 0,
        transform: trigger ? `translateY(0%)` : `translateY(-100%)`
    });

    const get = (dictionary, key, default_value) => {
        var result = dictionary[key];
        return (typeof result !== "undefined") ? result : default_value;
    }

    return (
        <>
            {trigger ? (
                <div className='popup' onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div className='popup-inner' showModal={trigger}>
                            <div className='heading'>
                                <h1 className='p-heading'>{projectDetails.value}</h1>
                                <MdClose
                                    className='MdClose'
                                    aria-label='Close modal'
                                    onClick={() => setShowModal(prev => !prev)}
                                />
                            </div>
                            <div className='scrollClass'>
                                <div className='ModalContent'>
                                    <img src={projectDetails.project["img"]} className="" alt="..." />
                                    <div className='heading-2'>
                                        <h2 className=''>{projectDetails.value}</h2>
                                        <h2 className='month'>{projectDetails.project['month']}</h2>
                                    </div>
                                    <p className='aim'>{projectDetails.project['aim']}</p>
                                    {projectDetails.project['summary'].map((text, index) => {
                                        return (<p className='summary'>{text}</p>)
                                    })}
                                    {projectDetails.project['Languages Used'].length > 0 && <p className='elements-used'>
                                        <span className="element-title" >Languages Used:</span>
                                        {projectDetails.project['Languages Used'].map((text, index) => {
                                            if (projectDetails.project['Languages Used'].length - 1 === index) {
                                                return (<span className='individual-element'>{text}</span>)
                                            }
                                            else {
                                                return (<span className='individual-element'>{text},</span>)
                                            }

                                        })}
                                    </p>}
                                    {projectDetails.project['Tools Used'].length > 0 && <p className='elements-used'>
                                        <span className="element-title" >Tools Used:</span>
                                        {projectDetails.project['Tools Used'].map((text, index) => {
                                            if (projectDetails.project['Tools Used'].length - 1 === index) {
                                                return (<span className='individual-element'>{text}</span>)
                                            }
                                            else {
                                                return (<span className='individual-element'>{text},</span>)
                                            }

                                        })}
                                    </p>}
                                    <a className='Button' href={projectDetails.project['link']}>{projectDetails.project['buttonName'] ? get(projectDetails.project, "buttonName", 2) : 'Visit Github page'}</a>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    );
};

export default Popup;