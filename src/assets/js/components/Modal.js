import React, { useState } from 'react';

function Modal(props) {
    const [Show, setShow] = useState(props.Show);
    
    return (
        <div className={Show === "1" ? "modal active" : "modal"}>
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={() => setShow("0")} className="close">&times;</span>
                    <h2>{props.Header}</h2>
                </div>
                <div className="modal-body" dangerouslySetInnerHTML={{ __html: props.Body }}>

                </div>
                <div className="modal-footer">
                    <h3>{props.Footer}</h3>
                </div>
            </div>
        </div>
    );
}

export default Modal;