import React from 'react';
// import { Progress } from 'react-sweet-progress';
// import "react-sweet-progress/lib/style.css";
import './ProgressBar.css';
const ProgressBar = ({percent}) => {
    
    return (
        <div>
            <div style={{height: '5px'}} className="progress">
                <div className={`progress-bar  progress-bar-striped" role="progressbar `} style={{width: percent+"%"}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;