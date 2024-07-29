import React from 'react';
import Image from "next/image";
import styles from './AboutProgram.module.scss';
import communityImg from "../../public/images/communityImg.png";

function AboutProgram() {
    return (
        <div className={`${styles.comsWrapper} tk-container`} id="development">


            <div className="row gx-0">
                <div className={`${styles.devContent} col-lg-8 col-md-12`}>
                    <h2>About the Program</h2>
                    <p>Curious about what being a campus ambassador for tkxel looks like?.
                        Work with talented and energetic individuals, to become a part of a winning culture that is exciting and challenging. Partner with us to bring ideas to life, collectively play a big part in the community to be the change. Together, we can make a difference.</p>
                </div>
                <div className="col-lg-4 col-md-12 envir">
                <Image src={communityImg} alt={communityImg} layout="responsive" />
                </div>
            </div>
        </div>
    )
}
export default AboutProgram;
