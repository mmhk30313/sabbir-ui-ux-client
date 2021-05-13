import React from 'react';
import { MdDevices } from 'react-icons/md';
import { BiRocket } from 'react-icons/bi';
import { BsStopwatch } from 'react-icons/bs';
import SkillBar from 'react-skillbars';
// import ProgressBar from '../ProgressBar/ProgressBar';
import './About.css';
import MyTagCloud from './MyTagCloud';
const colors = {
    "bar": "#9a4dce",
    "title": {
        "text": "#b575e0",
        "background": "#9a4dce"
    }
}
const About = () => {
    return (
        <div className="container main-div about">
            <h3 className="font-weight-bold header">ABOUT</h3>
            <div className="row py-2 about-experience my-3">
                <div className="col-md-4 text-center">
                    <div  className="card bg-transparent responsive">
                        <div className="about-icons mx-auto">
                            <MdDevices />
                        </div>
                        <p className="font-weight-bold my-2 title">Responsive</p>
                        <div className="about-des">
                            <p><>Fast load times and lag free interaction, my highest priority.</></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card bg-transparent fast ">
                        <div className="about-icons mx-auto">
                            <BsStopwatch/>
                        </div>
                        <p className="font-weight-bold my-2 title">Fast</p>
                        <div className="about-des">
                            <p><>My layouts will work on any device, big, medium or small.</></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card bg-transparent dynamic ">
                        <div className="about-icons mx-auto">
                            <BiRocket/>
                        </div>
                        <p className="font-weight-bold my-2 title">Dynamic</p>
                        <div className="about-des">
                            <p><>Websites don't have to be static, I love making pages come to life.</></p>
                        </div>
                    </div>  
                </div>
            </div>
            <h6 className="skills-title mt-4">SKILLS</h6>
            <div className="row skills">
                {
                    [
                        {
                            _id: 1,
                            name: "HTML",
                            percent: 98,
                            img: "",
                            skills: [{"type": "HTML", "level": 98}]
                        },
                        {
                            _id: 2,
                            name: "CSS",
                            percent: 98,
                            img: "",
                            skills: [{"type": "CSS", "level": 98}]
                        },
                        {
                            _id: 3,
                            name: "ReactJS",
                            percent: 90,
                            img: "",
                            skills: [{"type": "ReactJS", "level": 90}]
                        },
                        {
                            _id: 4,
                            name: "JavaScript",
                            percent: 85,
                            img: "",
                            skills: [{"type": "JavaScript", "level": 85}]
                        },
                        {
                            _id: 5,
                            name: "NodeJS",
                            percent: 80,
                            img: "",
                            skills: [{"type": "NodeJS", "level": 80}]
                        },
                        {
                            _id: 6,
                            name: "C/C++",
                            percent: 75,
                            img: "",
                            skills: [{"type": "C/C++", "level": 75}]
                        }
                        
                    ].map(skill => <div key={skill._id} className="col-md-6">
                        <div style={{height: '110px'}} className="card bg-transparent py-2 skill">
                            <div style={{color: "thistle"}} className="d-flex justify-content-between">
                                <p style={{fontSize: '14px'}}>{skill.name}</p>
                                <p style={{fontSize: '14px'}}>{skill.percent}{"%"}</p>
                            </div>
                            <SkillBar skills={skill.skills} colors={colors} height={'20px'}/>
                            {/* <div style={{height: '5px'}} className="progress">
                                <div className={`progress-bar  progress-bar-striped" role="progressbar `} style={{width: skill.percent+"%"}} aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                        </div>
                    </div>)
                }
            </div>
            <MyTagCloud/>
        </div>
    );
};

export default About;