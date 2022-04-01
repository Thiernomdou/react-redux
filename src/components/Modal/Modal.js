import { useState } from 'react';
import './Modal.css'

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <button
                onClick={toggleModal}
                className="btn-modal">Open</button>

            {
                modal &&
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello modal</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic at ipsum
                                excepturi consequatur tempora non aspernatur?
                                Odit veritatis impedit vero, distinctio, aspernatur porro,
                                repellendus recusandae eligendi dicta quos obcaecati!
                                Accusamus tempore hic necessitatibus vitae a minus! Est
                                optio id, enim ipsa, excepturi beatae repellat temporibus
                                sunt dolorem modi, maiores tempore!
                            </p>
                            <button
                                onClick={toggleModal}
                                className="close-modal"
                            >CLOSE</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
