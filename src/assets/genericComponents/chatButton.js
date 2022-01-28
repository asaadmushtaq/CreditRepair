import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import { FiSend } from "react-icons/fi";

export function ChatButton() {
    const [chatSection, setChatSection] = useState(false);
    return (
        <div id="chat-box-body">
            <div
                id="chat-circle"
                className="waves-effect waves-circle btn btn-circle btn-sm l-h-50"
            >
                {chatSection === false ? (
                    <button type="button" onClick={() => setChatSection(true)}>
                        <AiOutlineMessage className="randox-svg-chat" />
                    </button>
                ) : (
                    <button type="button" onClick={() => setChatSection(false)}>
                        <CgClose />
                    </button>
                )}
            </div>
            <div
                className={`chat-box ${chatSection === true ? "chat-box-show" : "chat-box-hide"
                    }`}
            >
                <Chat />

            </div>
        </div>
    );
}

function Chat() {

    function reactive() {
        toast.success("Your Query has been sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <>
            <ToastContainer />
            <div className="height_adjust_chat">
                <div className="popup-head d-flex align-items-center justify-content-between randox-chat-input-head">
                    <div className="popup-head-left pull-left">
                        {/* <img src="http://bootsnipp.com/img/avatars/bcf1c0d13e5500875fdd5a7e8ad9752ee16e7462.jpg" alt="iamgurdeeposahan">  */}
                        Chat Support
                    </div>
                    <div className="popup-head-right pull-right">
                        {/* <AiOutlineCloseCircle className="randox-chat-box" /> */}
                    </div>
                </div>
                <div className="popup-messages randox-popup-box ">
                    <div style={{ display: 'none' }} id="popup-text-list" className="direct-chat-messages">
                    </div>
                    <div id="no-popup-text" className="direct-chat-messages">
                        <h4 className="text-center" style={{ color: 'black' }}>Ask Questions!</h4>
                        <p className="text-center" id="popup-loader" style={{ display: 'none' }}> <i className="fa fa-spinner fa-spin fa-3x" style={{ color: 'white' }} /></p>
                    </div>
                </div>
            </div>
            <div className="input-group randox-chat-input">
                <input type="text" id="chat-support-input" className="form-control " placeholder="Ask Question" />
                <div class='file'>
                    <label for='input-file'>
                        <GrAttachment className="chat-box-randox-attach" />
                    </label>
                    <input id='input-file' type='file' />
                </div>
                {/* <div class="image-upload">
                    <label for="file-input">
                        <GrAttachment />
                    </label>
                    <input id="file-input" type="file" />



                </div> */}
                <button type="button" onClick={reactive} id="chat-send-btn" class="btn btn-secondary">
                    <FiSend />

                </button>

            </div>


        </>
    )
}
