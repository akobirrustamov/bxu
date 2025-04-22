import React from 'react';
import "./style.css";

// Importing images

import founder from "./img/founder.jpg";
import signature from "./img/signature.png";
import pattern1 from "./img/pattern1.png";

import Facilities from "./Facilities";

function NewRektor(props) {
    return (
        <div>
            {/* Founder Section */}
            <section id="founder" className="padding-medium position-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 offset-md-2">
                            <div className="imageblock me-4">
                                <button type="button" data-bs-toggle="modal"
                                        data-src="https://www.youtube.com/embed/W_tIumKa8VY" data-bs-target="#myModal"
                                        className="play-btn position-relative">
                                    <img  className="img-fluid" src={founder} alt="Founder" />
                                </button>
                            </div>
                        </div>

                        <div className="col-md-4 mt-5">
                            <p className="fs-2 lh-base">At our School, we aim to empower students with the skills,
                                knowledge, and values needed for success in a global context.</p>
                            <div className="d-flex justify-content-between">
                                <div className="mt-3">
                                    <p className="fw-bold m-0">Baratov SH.R</p>
                                    <p>Rektor</p>
                                </div>
                                <div>
                                    <img width={100} src={signature} alt="Signature" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="position-absolute top-50 end-0 translate-middle-y z-n1 img-fluid" src={pattern1} alt="Pattern 1" />
            </section>

            {/* Modal for Video */}
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg className="bi" width="40" height="40">
                                    <use xlinkHref="#close-sharp"></use>
                                </svg>
                            </button>
                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always"
                                        allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Facilities Section */}

        </div>
    );
}

export default NewRektor;
