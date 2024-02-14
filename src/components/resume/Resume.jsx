import React from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import MyDocument from '../../Assets/MCA_SarveshChoudhary.pdf';
import './Resume.css';
import Navbar from "../Navbar";
import StartSky from "../starrysky/StarrySky"

const Resume = () => {
    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = MyDocument;
        link.download = 'MCA_SarveshChoudhary.pdf';
        link.click();
    };

    return (
        <>
            <Navbar />
                <StartSky />
            <div className="dld">
                <button className="dld-btn" onClick={downloadPdf}><FontAwesomeIcon icon={faDownload} /> Download PDF</button>
            </div>
            <div className="container">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={MyDocument} />
                </Worker>
            </div>
            <div className="dld">
                <button className="dld-btn" onClick={downloadPdf}> <FontAwesomeIcon icon={faDownload} /> Download PDF</button>
            </div>
        </>
    );
};

export default Resume;
