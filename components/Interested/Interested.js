import React from 'react';
import style from './Interested.module.scss';
import { Button } from "react-bootstrap";
import Image from "next/image";
import interestedImg from "../../public/images/interested.png";

export default function Interested() {
    return (
        <div className={`${style.comsWrapper} tk-container`} id="development">


            <div className="row gx-0">
                <div className={`${style.devContent} col-lg-8 col-md-12`}>
                    <h2>Interested?</h2>
                    <p>If you are ready to experience an exciting roller coaster ride, Join our team!</p>
                    <Button
                        variant="primary"
                        className={style.applyBtn}
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://jobs.tkxel.com/jobs/Careers/524295000011327008/Student-Ambassador-Program?source=CareerSite", "_blank");
                            }}
                    >
                        Apply Now
                    </Button>
                </div>
                <div className="col-lg-4 col-md-12 envir">
                    <Image src={interestedImg} alt={interestedImg} layout="responsive" />
                </div>
            </div>
        </div>
    )
}
