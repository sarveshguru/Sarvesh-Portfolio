import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Interest.css'
import { faCamera, faMountainSun, faPaintBrush, faPuzzlePiece, faTableCells } from '@fortawesome/free-solid-svg-icons';

const Interest = () => {
  return (
    <>
         <div className="solid-box">
            <div className="int">
                <div className="interest-topic"><p><FontAwesomeIcon icon={faPuzzlePiece} /> Solving Puzzle</p></div>
                <div className="interest-topic"><p><FontAwesomeIcon icon={faTableCells} /> Sudoku</p></div>
                <div className="interest-topic"><p><FontAwesomeIcon icon={faPaintBrush} /> Charcoal Realisiam Sketch</p></div>
                <div className="interest-topic"><p><FontAwesomeIcon icon={faCamera} /> Photography</p></div>
                <div className="interest-topic"><p><FontAwesomeIcon icon={faMountainSun} /> Travelling</p></div>
            </div>
         </div>
    </>
  )
}

export default Interest
